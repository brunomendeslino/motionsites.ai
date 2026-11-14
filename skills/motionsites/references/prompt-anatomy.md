# Writing a prompt in the MotionSites style

Read this when the user wants a new prompt to paste into another builder (Lovable, Bolt, v0, Google AI Studio and similar), or wants an existing template rewritten for their brand as a prompt rather than as code.

## Why these prompts work

They are specifications, not wishes. A builder model given "a premium dark hero" invents an average one. Given the exact copy, sizes, colours, timings and layer order, it has nothing left to average. Every part below exists to remove a decision the builder would otherwise make badly.

## Anatomy

Write the sections in this order. Skip one only if the design truly has nothing to say there.

1. **Opening line**: what is being built, for which brand, with which stack, and the one-phrase aesthetic.
   `Build a dark, single-page landing page for "Northwind", a freight-tracking SaaS, using React + Vite + TypeScript + Tailwind CSS + Motion. Pure black, white text, liquid-glass UI over video.`
2. **Stack and constraints**: packages to install, and what not to add ("No other UI libraries"). Builders over-install unless told.
3. **Fonts**: family, weights, the import URL, and the Tailwind alias each maps to (`font-heading`, `font-body`).
4. **Design tokens**: HSL custom properties for background, foreground, primary, border, radius. State the accent once and where it may appear.
5. **Reusable CSS**: paste effect classes and keyframes in full (liquid glass, fade-up, marquee). Describing them in words produces a different effect every time.
6. **Media**: the full URL of each video or image, its attributes (`autoPlay muted loop playsInline`), sizing (`object-cover`), position, and any overlay with its exact opacity. If the user has no asset yet, write a clearly marked placeholder such as `VIDEO_URL_HERE` plus a fallback background colour.
7. **Sections, top to bottom**: one block per section with a numbered heading. For each: container classes and height, the layout, every text string in quotes, sizes per breakpoint (`text-5xl md:text-7xl`), spacing, and z-index if layers overlap.
8. **Components and behaviour**: for anything animated or interactive give start state, end state, duration, delay, easing, and trigger (on load, in view, on hover, on scroll progress).
9. **Responsive rules**: what stacks, what hides, what the nav becomes below `md`.
10. **Timing or layering summary** (only for choreographed pieces such as loaders and decks): a short table of what happens at each second, or the z-order from back to front.

## Rules of thumb

- **Quote all copy.** Headline, subline, button labels, nav items, badge text. Unquoted copy gets rewritten.
- **Prefer numbers to adjectives.** `tracking-[-0.04em]`, `leading-[0.9]`, `bg-black/40`, `0.6s`, `delay 0.1s per item`. Replace "large", "subtle", "smooth" with the value.
- **Use the builder's vocabulary.** Tailwind class names and CSS property values are unambiguous to these tools; prose descriptions of the same thing are not.
- **State the negative.** "No overlay on the video." "No light mode." "Do not use react-player." Defaults creep in otherwise.
- **One accent colour, one display font, one effect family.** Specs that stack effects produce noise; the library's best pages use two or three ideas at most.
- **Name invented brands and logos.** Use placeholders the user can publish: an invented product name and partner names, not real companies.
- **Size to the scope.** Most heroes in the library run 2,500 to 5,000 characters; most full pages 5,000 to 11,000. Much shorter and the builder guesses; much longer and it starts dropping instructions.
- **Add what the library forgets**: a reduced-motion rule, a video poster or fallback colour, the mobile menu, accessible names for icon buttons. One line each is enough.

## Adapting an existing template into a prompt

1. **Start from the template file.** Keep its structure, its order and every numeric value. Do not re-sort it into the ten-part anatomy above; add only what is missing (an opening line if it has none, and one short block for accessibility and fallbacks).
2. **Replace the placeholder brand**: name, copy, nav labels, logo names. Match the original's length and rhythm, since headlines are sized for a word count. Do not invent facts about the user's business (customer counts, ratings, partners, awards, testimonials): write claim-free copy or leave a marked placeholder such as `[customer count]`.
3. **Recolour only if the user has brand colours**; keep the relationships (accent on the primary button only, borders at low opacity).
4. **Fill the gaps.** Many specs say "rounded corners" or "smooth transition" where a builder needs a value. Supply concrete ones from a sibling template of the same look or from `patterns.md`, and say in your note that you did.
5. **Media.** A pasted prompt cannot carry files, so:
   - *Live video URL*: keep it, declared once at the top of the prompt as a named constant (`HERO_VIDEO_URL`), with a fallback background colour next to it (the hex in the catalog's Footage column).
   - *Dead video URL*: write `VIDEO_URL_HERE` plus the fallback colour, and tell the user which file in the source repository holds the clip (the catalog's broken-media table gives the path) so they can upload it to their builder. If they want something that works on first paste, use a live clip from a template with similar footage instead and say which.
   - Run `scripts/check_assets.py` first when you can; the catalog status may be out of date.
6. **Scope.** If the user did not say hero or page and the best match is a hero, deliver the hero, point its nav links at anchors, and say the prompt covers the first screen only.
7. **Builder defaults.** Builders ship their own component styles (a shadcn `Button`, a default font). Where exact styling matters, tell the builder to use plain elements with the listed classes and to add no other UI library.
8. **Strip export debris**: wrapper headings such as "Full Prompt", stray lines reading `code` / `CSS` / `Tsx`, references to "Bolt Database", unneeded backend packages.

### Shape of the reply

- One or two sentences above the block: which template, what you changed.
- The prompt in a single fenced code block, so it can be copied whole.
- Up to four short bullets below: what the demo footage is and that it should be replaced before launch; what the prompt does not cover (scope); any placeholders to fill; and that the prompt has not been run through the builder.

Keep everything outside the block to roughly 120 words. The prompt is the deliverable.
