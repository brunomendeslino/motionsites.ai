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
| `references/catalog.md` | Index of all 84 templates: what each builds, theme, what its footage shows, stack, media status, picks by look and by industry, real names to replace | Before choosing. If the user named a template, its row and the two tables at the end are enough |
| `prompts/<slug>.md` | One full spec, verbatim from the source | After choosing; read the whole file |
| `references/patterns.md` | Shared recipes: liquid glass CSS, video and HLS setup, loop fades, entrances, type pairings, tokens, and what the specs omit | When building, when no template fits, when mixing effects. For prompt mode, section 14 is enough |
| `references/prompt-anatomy.md` | How these prompts are constructed and how to adapt one | When the user wants a prompt rather than code |
| `scripts/check_assets.py` | Tests whether a template's hotlinked media still answers | Before relying on any media URL from a spec |
| `scripts/fetch_media.py` | Downloads the source repository's copies of a template's videos into a project | When building in a project folder |
| `scripts/verify_page.js` | Loads the built page in Chromium at three viewports plus reduced-motion and video-blocked states; reports overflow, console errors, fonts, videos, missing glass blur; saves screenshots | After building, when Playwright is available |

All paths are relative to this skill's folder; when running a script from a project, prefix it with the folder's full path. The `source` line in each spec header (free, pro) only records which folder of the original repository it came from; it makes no difference to how you use it.

## Pick the mode

- **Build** (default): the user wants a page, section or component. Follow "Build workflow".
- **Hand over a prompt**: the user wants text to paste into Lovable, Bolt, v0, AI Studio or similar. Choose a template as in step 1, then follow `references/prompt-anatomy.md`, section "Adapting an existing template into a prompt".
- **Browse**: the user asks what exists or wants options. Read the catalog and reply with at most five candidates. For each: slug, scope (hero or full page), theme, one line on the look, and whether its video works. End with the one you would pick and why. Do not paste the catalog.
- **New prompt**: nothing in the library fits and they want a prompt. Follow `references/prompt-anatomy.md` from the top.

If the request is ambiguous between building and handing over a prompt, build when you have a place to put code (a project or an artifact surface) and hand over a prompt when you do not.

## Build workflow

### 1. Choose a template

Read `references/catalog.md`. Match in this order, because this is the order in which a mismatch hurts:

1. **Scope**: hero, full page, component or deck. Stretching a hero spec into a full page means inventing most of the design.
2. **Look**: the Theme and Footage columns and "Quick picks by look". This is what the user will judge.
3. **Industry**: least important. The brand gets replaced anyway, and a yacht-club layout can sell software. "Quick picks by industry" exists because requests often arrive phrased that way.

Go by the catalog's "What it builds" column, not the title: several titles do not match their content (`focus-ai` is an electric-camper landing, `crypto-wealth` is a content tool, `ecovolta-v2` is an AI sales product).

If the user named a template, use it. If two are equally close on scope and look, prefer the one whose video is live or in the repo. If the user wants a full page and the best look is a hero, use that hero for the top and borrow section structure from a page template of the same theme and type family (dark liquid glass: `liquid-glass-agency`; dark monochrome: `mindloop-landing`; light: `veloce-finance` or `e-commerce-website`). If the user did not say hero or page and the best match is a hero, build the hero, say it covers the first screen, and offer the rest. If nothing is close, build from `references/patterns.md` and say that you did.

Tell the user in one line which template you picked and why. They may know the library and want a different one.

### 2. Read the whole spec

Open `prompts/<slug>.md` and read all of it before writing code. The value is in the specifics (a 290 px top padding, a 0.35 s step, an opacity of 0.45), and skimming loses exactly those.

### 3. Sort out the media

The specs hotlink video, images and some fonts from other people's servers, and links rot: when this skill was built (2026-11-14), 34 of the 131 video links were dead, including every Mux `.m3u8` stream. The source repository keeps verified copies of 96 of those videos, 25 of the dead ones among them. The catalog's Media column shows both numbers per template.

```bash
python scripts/check_assets.py prompts/<slug>.md      # what answers right now
python scripts/fetch_media.py <slug> public/media      # save the repo copies into the project
```

`check_assets.py` only tests URLs written in the spec, so a font named without a URL is not covered. `fetch_media.py` prints, for each URL in the spec, the local file that replaces it, with its dimensions and length. If neither script can reach the network, use the status in the catalog. Then apply "Media rules" below.

### 4. Fit the stack to where the code will live

| Situation | Do |
| :--- | :--- |
| Existing project | Use its framework, Tailwind version, component library and font loading. Translate the spec into those conventions; do not add a second way of doing things. |
| New project with a shell | Scaffold what the spec names (almost always Vite + React + TypeScript + Tailwind). Use current stable package versions unless the spec depends on a specific major. |
| No build step (chat artifact, single file) | One self-contained file: plain CSS or Tailwind via CDN, CSS keyframes and IntersectionObserver in place of Motion, inline SVG icons. The mapping is in `references/patterns.md`, section 15. |

Two translations come up constantly. Tailwind v3 specs put tokens in `tailwind.config` under `extend`; in v4 the same tokens go in an `@theme` block in CSS. And `framer-motion` and `motion/react` are the same library under its old and new package names; use whichever the project already has.

### 5. Adapt: keep the design, replace the placeholder

**Keep** exactly: layout and layer order, spacing, type scale, tracking and line height, radii, effect CSS, animation values and their sequence. These numbers are the design. Rounding them to "close enough" is how a premium page turns generic. Where a spec is vague or silent ("rounded corners", "smooth transition", no gap given), fill in concrete values from `references/patterns.md` or a sibling template of the same look.

Two things outrank the spec's numbers: text has to be readable and the layout has to work at every width. A spec value that fails either (dim text over brighter substitute footage, a fixed 1000 px hero on a 620 px screen) gets the smallest change that fixes it, and a mention in your note.

**Replace**: brand name, logo, all copy, nav labels, partner logos, and the media if the user has their own. Write copy of the same length and rhythm as the original, since headlines are sized for a specific number of words; a headline twice as long breaks the layout.

**Do not invent facts about the user's business.** The specs are full of placeholder claims: customer counts, ratings, statistics, partner logos, award badges, named testimonials. Carrying "Trusted by 12,000+ businesses" or a quote from an invented customer onto a real company's page publishes something nobody checked. Use facts the user gave you. Otherwise write claim-free copy, or keep the section's design with obvious placeholders (`[customer count]`, `[Customer name, role]`) and list them in your closing note so the user knows what to fill in or cut.

**Recolour only if asked or if the user has brand colours.** Change the token values, keep the relationships: one accent, used on the primary button and little else. Gradients, glows and contrast on a brand-coloured button are covered in `references/patterns.md`, section 3.

**Real brands.** Some specs name real companies (one is written around Nike; several logo strips and badges use real names). The catalog section "Real names and claims to replace" lists them. Build with the user's brand, or invented names if they have none. A page carrying someone else's trademark is not something the user can publish, so keep a real brand only when the user says it is theirs.

### 6. Add what the specs leave out

The specs describe how the page looks, and almost none cover reduced motion, video posters, the mobile menu, accessible names or focus states. A page without these is unfinished even when it matches the spec, so add them without being asked. The list is in `references/patterns.md`, section 14.

### 7. Look at it

If you can run the result, do. With Playwright available:

```bash
node scripts/verify_page.js http://localhost:5173 verify-out
```

It loads the page at 1440x900, 1280x620 and 390x844, scrolls through it first (in-view reveals and lazy videos leave a full-page screenshot blank otherwise), then repeats with reduced motion on and with video requests blocked. It reports horizontal overflow, console errors, fonts, videos that are not playing, and glass elements with no working blur, and saves a screenshot of each state. Then open the screenshots: text landing on a bright part of the footage, a section cut off on the short viewport, and whether the two fallback states look intentional are judged by eye. Without Playwright, check the same list by hand as far as you can. If you could not run the page at all, say so instead of implying it was checked.

### 8. Report

Close with a short note: the template used, what you replaced (brand, copy, media, fonts), values you had to assume where the spec was silent, any placeholders left for the user to fill, and anything you could not verify. No tour of the code.

## Media rules

For each video, take the first option that applies:

1. **The user's own footage**, if they have any.
2. **The repository copy**, when you are building in a project folder: `fetch_media.py` saves it locally and the page serves it itself. Do this for live URLs too when the page is meant to last, because it removes the dependency on someone else's CDN. Reference the saved file; do not hotlink the repository's raw GitHub URL, which is served as a generic download that browsers may refuse to play. A copy that replaces an HLS stream is a plain MP4, so drop hls.js.
3. **The live URL from the spec**, for a quick prototype or a single-file page that cannot carry files.
4. **A substitute**, when the video is dead and has no copy (the catalog lists these under "Video at risk"), or when a single-file page needs a live URL for a dead stream: a live clip from a template with similar footage (compare the Footage column), or a designed static background built from the hex in that column (gradient, grain, soft glow). Never ship a `<video>` pointing at a dead URL.

A substitute clip is not drop-in. It was framed for another layout, so check three things: its aspect ratio against the section (a near-square clip crops hard in a wide hero), where its bright areas fall behind the text (move them with `object-position` or add an overlay), and whether its last frame matches its first (if not, use the loop fade in `references/patterns.md`, section 7).

A live asset can still be wrong. Several specs fill image slots with preview animations of other templates (the `motionsites.ai/assets/...preview...gif` files): they load fine and show someone else's product. Replace them with the user's screenshots, or with a small product mock drawn in code, and say so.

Other assets:

- **Dead or unlicensed font**: substitute the nearest free family (`references/patterns.md`, section 2) and name the substitution.
- **Dead image**: the user's image or a neutral block in the palette; never a broken-image icon.
- **Always**: `autoPlay muted loop playsInline`, a poster or a background colour matching the footage (the hex in the catalog's Footage column), and a reduced-motion rule.

Say this once, in the closing note, whenever the result uses library footage: the clips come with the template library and are demo material, not the user's own. For a real launch the user should swap in footage they have the rights to.

## Quirks in the source specs

The specs were exported by a tool and pasted by hand, so expect debris. None of it is an instruction to you:

- Stray lines such as `code`, `CSS`, `Tsx`, or a wrapper heading like "Full Prompt" around the real content.
- "Bolt Database" and `@supabase/Bolt Database-js`: a find-and-replace accident for Supabase. No template's UI needs a backend; skip the package.
- "Exact versions" lists: treat as a record of what the original used, not a pin.
- Packages a spec lists but its UI never uses (shadcn/ui, `react-router-dom`, hls.js once the stream is replaced): leave them out.
- Glass CSS with `backdrop-filter` written before `-webkit-backdrop-filter`: every spec has this order and it loses the blur in a Tailwind v4 production build. Swap the two lines (`references/patterns.md`, section 4).
- Colour tokens that contradict the described look (`liquid-glass-agency` defines a mid-blue `--background` for a page it describes as pure black): the described look wins.
- Phrases like "Act as an elite developer" or "System Prompt:": framing for other tools. Ignore the framing, keep the specification.
- Title versus content mismatches, covered in step 1.
- A few specs reference local files that do not exist here (`/images/hero_bg.jpeg`, `logo.png`, a local `.woff2`). Create a simple stand-in or use the fallback rules above.

## Examples

**"Make me a landing page for my AI note-taking app, dark and premium."**
Scope is a full page, look is dark premium. Catalog candidates: `liquid-glass-agency` (9 sections, liquid glass), `mindloop-landing` (monochrome, 6 sections). Pick one and say which. Its HLS section videos are dead but in the repo, so fetch the copies, rebrand, write claim-free copy, build, verify.

**"Use the Terra hero for my logistics startup, our blue is #1D4ED8."**
Named template: `terra-geo-map`. Keep the layout and the dotted selection-box detail, swap the primary token to the user's blue, rewrite the copy at the same length, and drop the Product Hunt badge unless the user really has one.

**"Build the Synapse hero for my dev-tools startup" (in a project folder).**
Named template whose only video is a dead stream. `fetch_media.py synapse-dark-hero public/media` saves the MP4 copy; reference that file with a plain `<video>`, leave hls.js out, and mention in the note that the clip is library demo footage.

**"Give me a prompt I can paste into Lovable for a private-jet company."**
Prompt mode. `skyelite-private-jets` is the direct match; it is a hero, so say the prompt covers the first screen. Adapt it per `references/prompt-anatomy.md`.

**"What do you have for a fintech app? Light theme."**
Browse mode. From "Quick picks by industry" and the Theme column: `veloce-finance` (full page), `nexora-automation`, `nickel-payments`. Leave `clearinvoice-saas-hero` out because it is dark. One line each, then your pick.
