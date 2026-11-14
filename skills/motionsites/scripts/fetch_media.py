#!/usr/bin/env python3
"""Fetch the repository's copies of a template's media into a project.

The source repository keeps byte-identical copies of most background videos,
including MP4 conversions of the HLS streams that no longer play. This script
downloads the ones a template uses, so the page can serve them itself instead
of hotlinking someone else's server.

Usage:
    python scripts/fetch_media.py <slug> [dest-dir]
    python scripts/fetch_media.py <slug> [dest-dir] --repo-dir /path/to/clone
    python scripts/fetch_media.py <slug> --list

    dest-dir   where to save (default: ./public/media)
    --repo-dir copy from a local clone of the repository instead of downloading
    --base     alternative base URL for the repository's raw files
    --list     print the plan without fetching anything

Prints one line per asset: the URL as written in the spec, then where its copy
was saved (or why there is none). Replace each URL in your code with the saved
path. Assets with no copy still need the fallback rules in SKILL.md.

Exit code: 0 on success, 1 if a copy that should exist could not be fetched,
2 on bad usage. Standard library only.
"""
import json
import shutil
import sys
import urllib.request
from pathlib import Path

DEFAULT_BASE = "https://raw.githubusercontent.com/brunomendeslino/motionsites.ai/main/"
MAP_FILE = Path(__file__).with_name("media_map.json")


def parse(argv):
    opts = {"dest": "public/media", "repo_dir": None, "base": DEFAULT_BASE, "list": False}
    pos = []
    it = iter(argv)
    for arg in it:
        if arg == "--repo-dir":
            opts["repo_dir"] = next(it, None)
        elif arg == "--base":
            opts["base"] = next(it, None)
        elif arg == "--list":
            opts["list"] = True
        elif arg.startswith("--"):
            return None, None
        else:
            pos.append(arg)
    if not pos or len(pos) > 2 or opts["base"] is None:
        return None, None
    if len(pos) == 2:
        opts["dest"] = pos[1]
    return pos[0], opts


def fetch(rel, dest, opts):
    target = dest / Path(rel).name
    if target.exists() and target.stat().st_size > 10_000:
        return target, "already present"
    if opts["repo_dir"]:
        src = Path(opts["repo_dir"]) / rel
        if not src.exists():
            return None, f"not found in {opts['repo_dir']}"
        shutil.copyfile(src, target)
        return target, "copied"
    url = opts["base"].rstrip("/") + "/" + rel
    req = urllib.request.Request(url, headers={"User-Agent": "asset-fetch/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=120) as resp, open(target, "wb") as out:
            shutil.copyfileobj(resp, out)
    except Exception as err:
        target.unlink(missing_ok=True)
        return None, f"download failed ({err})"
    return target, "downloaded"


def main():
    slug, opts = parse(sys.argv[1:])
    if slug is None:
        print(__doc__)
        return 2
    data = json.loads(MAP_FILE.read_text(encoding="utf-8"))
    templates = data["templates"]
    if slug not in templates:
        close = [s for s in templates if slug.split("-")[0] in s][:8]
        print(f"Unknown slug '{slug}'." + (f" Did you mean: {', '.join(close)}" if close else ""))
        return 2
    entries = templates[slug]
    if not entries:
        print(f"{slug} uses no external media.")
        return 0

    dest = Path(opts["dest"])
    if not opts["list"]:
        dest.mkdir(parents=True, exist_ok=True)
    failed = 0
    print(f"{slug}: {len(entries)} asset(s); link status as of {data['checked']}\n")
    for e in entries:
        state = {"ok": "live", "dead": "DEAD", "unverified": "unverified"}[e["state"]]
        print(f"[{e['kind']}, {state}] {e['url']}")
        if not e["repo"]:
            print("    no copy in the repository" + ("" if e["state"] == "ok" else ": needs a substitute") + "\n")
            continue
        size = (f", {e['width']}x{e['height']}, {e['seconds']} s, {e['mb']} MB" if e.get("mb") else "")
        if opts["list"]:
            print(f"    copy available: {e['repo']}{size}\n")
            continue
        target, how = fetch(e["repo"], dest, opts)
        if target is None:
            failed += 1
            print(f"    FAILED: {how}\n")
        else:
            print(f"    -> {target} ({how}{size})\n")
    if failed:
        print(f"{failed} copy(ies) could not be fetched. If this machine has no network, "
              "ask the user for the files or use the fallback rules in SKILL.md.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
