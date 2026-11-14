#!/usr/bin/env python3
"""Check whether the media a template hotlinks is still reachable.

Usage:
    python scripts/check_assets.py prompts/<slug>.md [more files or URLs ...]

Each URL gets one plain HTTPS request for its first byte. Nothing is downloaded
or cached. Output is one line per asset:

    OK    video 200  https://...
    DEAD  HLS   403  https://...
    ????  img   ---  https://...   (no answer: offline, blocked, or timed out)

Only URLs written in the spec are tested. A font or image the spec names
without a URL is not covered.

Exit code: 0 when the check ran (dead assets are an expected finding, not an
error; read the lines), 2 if nothing could be verified (no network) or on bad
usage. Standard library only.
"""
import concurrent.futures
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

URL_RE = re.compile(r"https?://[^\s\"'`)<>]+")
SKIP = re.compile(r"fonts\.googleapis\.com|fonts\.gstatic\.com|w3\.org|tsconfig|localhost")
TIMEOUT = 20


def kind(url):
    path = url.split("?")[0].lower()
    if path.endswith(".m3u8"):
        return "HLS"
    if path.endswith((".mp4", ".webm", ".mov")):
        return "video"
    if path.endswith((".otf", ".woff", ".woff2", ".ttf")) or "fontshare" in url or "onlinewebfonts" in url:
        return "font"
    if path.endswith((".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp", ".avif")):
        return "img"
    if path.endswith(".splinecode"):
        return "3D"
    return "other"


def clean(url):
    url = url.rstrip(".,;:")
    if url.endswith("]") and "[" not in url:   # keep "?f[]=" query strings intact
        url = url.rstrip("]")
    return url


def collect(args):
    urls = []
    for arg in args:
        if arg.startswith(("http://", "https://")):
            urls.append(arg)
            continue
        text = Path(arg).read_text(encoding="utf-8", errors="replace")
        urls += [clean(u) for u in URL_RE.findall(text)]
    seen = dict.fromkeys(u for u in urls if not SKIP.search(u))
    return list(seen)


def probe(url):
    req = urllib.request.Request(
        urllib.parse.quote(url, safe=":/?&=%@,+~#;$!*'()-._"),
        headers={"Range": "bytes=0-0", "User-Agent": "asset-link-check/1.0"},
    )
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            return url, resp.status
    except urllib.error.HTTPError as err:
        return url, err.code
    except Exception:
        return url, None


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    urls = collect(sys.argv[1:])
    if not urls:
        print("No external assets referenced. Nothing to check.")
        return 0
    with concurrent.futures.ThreadPoolExecutor(8) as pool:
        results = list(pool.map(probe, urls))
    ok = dead = unknown = 0
    for url, code in results:
        if code is None:
            label, unknown = "????", unknown + 1
        elif 200 <= code < 400:
            label, ok = "OK  ", ok + 1
        else:
            label, dead = "DEAD", dead + 1
        print(f"{label}  {kind(url):<5} {code if code else '---'}  {url}")
    print(f"\n{ok} ok, {dead} dead, {unknown} unverified, of {len(results)} assets")
    if ok == 0 and dead == 0:
        print("No asset answered at all: this machine probably has no outbound network. "
              "Fall back to the status recorded in references/catalog.md.")
        return 2
    if unknown:
        print("Unverified assets did not answer from here; they may still work in a browser.")
    if dead:
        print("For dead videos, see whether the repository has a copy: "
              "python scripts/fetch_media.py <slug> --list")
    return 0


if __name__ == "__main__":
    sys.exit(main())
