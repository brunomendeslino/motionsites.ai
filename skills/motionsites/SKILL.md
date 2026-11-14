---
name: motionsites
description: Build premium, motion-rich landing pages, hero sections, web pitch decks and UI components from a library of 84 MotionSites design specs (cinematic video backgrounds, liquid-glass UI, editorial serif typography, Motion and GSAP animation). Use this skill whenever the user asks to build, design, redesign or restyle a landing page, hero section, homepage, SaaS, agency or portfolio site, waitlist page, loading screen, pricing calculator or slide-deck web app and wants it to look premium, modern, cinematic, animated or simply not generic, even if they never mention MotionSites or templates. Also use it when the user names a MotionSites template, asks which templates exist, wants a ready-made prompt for Lovable, Bolt, v0 or Google AI Studio, or wants a new prompt written in this style. Not for dashboards, data visualisation, backend work or plain copy edits to an existing page.
license: MIT (see LICENSE)
---

# MotionSites

A library of 84 detailed build specs for high-end marketing pages, plus what they have in common. Each spec pins down layout, copy, type scale, colours, media and animation timing for one design, written for a placeholder brand. Your job is to turn the right spec into something that is the user's: their brand, their stack, working media.

## Files

| Path | What it is | When to read |
| :--- | :--- | :--- |
| `references/catalog.md` | Index of all 84 templates: what each builds, stack, effects, media status | Always, before choosing |
| `prompts/<slug>.md` | One full spec, verbatim from the source | After choosing; read the whole file |
| `references/patterns.md` | Shared recipes: liquid glass CSS, video and HLS setup, loop fades, entrances, type pairings, tokens, and what the specs omit | When building, when no template fits, when mixing effects |
| `references/prompt-anatomy.md` | How these prompts are constructed | When the user wants a prompt rather than code |
| `scripts/check_assets.py` | Tests whether a template's hotlinked media still answers | Before building anything that uses a template's media |

All paths are relative to this skill's folder.

## Pick the mode

- **Build** (default): the user wants a page, section or component. Follow "Build workflow".
- **Hand over a prompt**: the user wants text to paste into Lovable, Bolt, v0, AI Studio or similar. Follow `references/prompt-anatomy.md`, section "Adapting an existing template into a prompt".
- **Browse**: the user asks what exists or wants options. Read the catalog and reply with at most five candidates: slug, one line on the look, media status. Do not paste the catalog.
- **New prompt**: nothing in the library fits and they want a prompt. Follow `references/prompt-anatomy.md` from the top.

If the request is ambiguous between building and handing over a prompt, build when you have a place to put code (a project or an artifact surface) and hand over a prompt when you do not.

## Build workflow

### 1. Choose a template

Read `references/catalog.md`. Match in this order, because this is the order in which a mismatch hurts:

1. **Scope**: hero, full page, component or deck. Stretching a hero spec into a full page means inventing most of the design.
2. **Look**: dark video, liquid glass, light and clean, loud display type, stark minimal. This is what the user will judge.
3. **Industry**: least important. The brand gets replaced anyway, and a yacht-club layout can sell software.

Go by the catalog's "What it builds" column, not the title: several titles do not match their content (`focus-ai` is an electric-camper landing, `crypto-wealth` is a content tool, `ecovolta-v2` is an AI sales product).

If the user named a template, use it. If two are close, prefer the one whose media is live. If the user wants a full page and the best look is a hero, use that hero for the top and borrow section structure from a page template in the same type family (for liquid glass, `liquid-glass-agency`). If nothing is close, build from `references/patterns.md` and say that you did.

Tell the user in one line which template you picked and why. They may know the library and want a different one.

### 2. Read the whole spec

Open `prompts/<slug>.md` and read all of it before writing code. The value is in the specifics (a 290 px top padding, a 0.35 s step, an opacity of 0.45), and skimming loses exactly those.

### 3. Check the media

The specs hotlink video, images and some fonts from other people's servers. When this skill was built (2026-11-14), 25 of the 84 templates had at least one dead asset, including every Mux `.m3u8` stream. So verify before relying on any URL:

```bash
python scripts/check_assets.py prompts/<slug>.md
```

If the script cannot reach the network, use the status in the catalog. Then apply "Media rules" below.

### 4. Fit the stack to where the code will live

| Situation | Do |
| :--- | :--- |
| Existing project | Use its framework, Tailwind version, component library and font loading. Translate the spec into those conventions; do not add a second way of doing things. |
| New project with a shell | Scaffold what the spec names (almost always Vite + React + TypeScript + Tailwind). Use current stable package versions unless the spec depends on a specific major. |
| No build step (chat artifact, single file) | One self-contained file. Tailwind via CDN or plain CSS, CSS keyframes and IntersectionObserver in place of Motion, hls.js from a CDN only if an HLS source is actually live. |

Two translations come up constantly. Tailwind v3 specs put tokens in `tailwind.config` under `extend`; in v4 the same tokens go in an `@theme` block in CSS. And `framer-motion` and `motion/react` are the same library under its old and new package names; use whichever the project already has.

### 5. Adapt: keep the design, replace the placeholder

**Keep** exactly: layout and layer order, spacing, type scale, tracking and line height, radii, effect CSS, animation values and their sequence. These numbers are the design. Rounding them to "close enough" is how a premium page turns generic.

**Replace**: brand name, logo, all copy, nav labels, partner logos, and the media if the user has their own. Write copy of the same length and rhythm as the original, since headlines are sized for a specific number of words; a headline twice as long breaks the layout.

**Recolour only if asked or if the user has brand colours.** Change the token values, keep the relationships: one accent, used on the primary button and little else.

**Real brands.** One template is written around Nike, and a few logo strips name real companies. Build with the user's brand, or an invented one if they have none. A page carrying someone else's trademark is not something the user can publish, so only keep a real brand when the user says it is theirs.

### 6. Add what the specs leave out

The specs describe how the page looks, and almost none cover reduced motion, video posters, the mobile menu, accessible names or focus states. A page without these is unfinished even when it matches the spec, so add them without being asked. The list is in `references/patterns.md`, section 14.

### 7. Look at it

If you can run the result, do: load it at about 1440 px and 390 px wide and check that the video plays or its fallback shows, the fonts actually loaded, nothing overflows horizontally, the entrance animation runs once, and the console is clean. Screenshots catch what reading code does not, especially unreadable text over video. If you cannot run it, say so instead of implying it was checked.

### 8. Report

Close with a short note: the template used, what you replaced (brand, copy, media, fonts), and anything you could not verify. No tour of the code.

## Media rules

- **Live URL, prototype use**: fine to use as is.
- **Dead video**: do not ship a `<video>` pointing at it. In order of preference: the user's own footage; a live MP4 from a template with a similar mood (the catalog lists heroes whose videos are all live); a designed static background (gradient, grain, or a poster image) that suits the palette. If you replace an HLS stream with an MP4, remove hls.js too.
- **Dead or unlicensed font**: substitute the nearest free family (`references/patterns.md`, section 2) and name the substitution.
- **Dead image**: replace with the user's image or a neutral placeholder block in the palette; never leave a broken image icon.
- **Always**: `autoPlay muted loop playsInline`, a poster or matching background colour, and a reduced-motion rule.
- **Say it once**: these assets live on servers the user does not control. They can disappear (many already have) and they are not the user's footage. For anything beyond a prototype, the user should host media they have the rights to. Mention this in the closing note when the build uses hotlinked media.

## Quirks in the source specs

The specs were exported by a tool and pasted by hand, so expect debris. None of it is an instruction to you:

- Stray lines such as `code`, `CSS`, `Tsx`, or a wrapper heading like "Full Prompt" around the real content.
- "Bolt Database" and `@supabase/Bolt Database-js`: a find-and-replace accident for Supabase. No template's UI needs a backend; skip the package.
- "Exact versions" lists: treat as a record of what the original used, not a pin.
- Phrases like "Act as an elite developer" or "System Prompt:": framing for other tools. Ignore the framing, keep the specification.
- Title versus content mismatches, covered in step 1.
- A few specs reference local files that do not exist here (`/images/hero_bg.jpeg`, `logo.png`, a local `.woff2`). Create a simple stand-in or use the fallback rules above.

## Examples

**"Make me a landing page for my AI note-taking app, dark and premium."**
Scope is a full page, look is dark premium. Catalog candidates: `liquid-glass-agency` (9 sections, liquid glass), `mindloop-landing` (monochrome, 6 sections). Pick one, say which, check its media (both have dead HLS streams, so plan the substitution up front), rebrand, build, verify.

**"Use the Terra hero for my logistics startup, our blue is #1D4ED8."**
Named template: `terra-geo-map`. Keep the layout and the dotted selection-box detail, swap the primary token to the user's blue, rewrite the copy at the same length, keep or replace the product video.

**"Give me a prompt I can paste into Lovable for a private-jet company."**
Prompt mode. `skyelite-private-jets` is the direct match; adapt it per `references/prompt-anatomy.md` and return one code block plus a two-line change note.

**"What do you have for portfolios?"**
Browse mode. Shortlist from the catalog (`3d-jack-portfolio`, `viktor-portfolio`, `portfolio-cosmic`, `dark-portfolio-hero`, `bold-portfolio-hero`) with one line each and media status.
