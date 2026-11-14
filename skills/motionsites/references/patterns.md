# Shared design recipes

What the 84 templates have in common, distilled so you can apply the look without opening a template, mix effects into another design, or repair a spec that leaves something out. Counts are out of 84.

## Contents

1. The house style in one paragraph
2. Typography
3. Colour tokens
4. Liquid glass
5. Background video (MP4)
6. HLS video
7. Seamless loop fade
8. Overlays and blending
9. Entrance motion
10. Text reveals
11. Logo marquee
12. Gradient borders and gradient text
13. Navbar archetypes
14. What the specs leave out
15. Translating a spec into a single file

## 1. The house style in one paragraph

A single full-bleed video or near-black canvas, one oversized headline with tight negative tracking, a short muted subline, one or two pill buttons, a floating navbar, and a quiet strip of logos at the bottom. Colour is rationed: most pages are monochrome plus one accent. Motion is slow and soft (fade up with a little blur, 0.6 to 1 s, staggered). The result reads as expensive because of restraint, large type, and real spacing values rather than because of many effects. When adapting, protect those three things first.

## 2. Typography

| Pairing | Used in | Character |
| :--- | :--- | :--- |
| Instrument Serif (often italic) + Inter | 15 | The default editorial look: sans headline with one italic serif word, or all-serif headline with Inter UI |
| Instrument Serif italic + Barlow (300 to 600) | 7 | The liquid-glass agency look; headings italic, `leading-[0.9]`, body `font-light` |
| Instrument Serif + Manrope | 7 | Softer SaaS variant, often with Cabin for buttons |
| Geist Sans alone, or with General Sans headline | 7 | Technical dark SaaS |
| Anton / Bebas Neue / Rubik bold uppercase | 7 | Loud display heroes |
| Helvetica Neue at weight 200 to 400 | 4 | Stark, quiet |
| Space Grotesk, Orbitron + JetBrains Mono | 3 | Aerospace, technical |

Conventions that recur:

- Headline size: `text-5xl` on mobile stepping to `text-7xl`/`text-8xl`, or fixed 60 to 100 px on desktop. Decorative background words go to 160 to 220 px.
- Tracking: negative on every large headline (52 templates). Typical values `-0.02em` to `-0.04em`, or `tracking-[-2px]` to `tracking-[-4px]` at 80 px and up.
- Line height below 1 for display type (`leading-[0.9]`, `leading-none`), 1.05 to 1.1 otherwise.
- Body and sublines are small (14 to 18 px) and dimmed with opacity, not with a grey hex: `text-white/60` to `text-white/80` on dark.
- The "accent word" trick: one word of a sans headline set in Instrument Serif italic at the same size.

Fonts some templates name that are commercial or have no dependable public URL: Aeonik, PP Neue Montreal, PP Mondwest, Mazzard H, Futura, SF Pro, SF Compact, Product Sans. Unless the user has a licence and the files, substitute and say so: Inter or Geist for the neutral sans, Instrument Serif or Playfair Display for the serif accent, Manrope for the geometric ones.

Switzer and General Sans are a different case: they are Fontshare families and load from `https://api.fontshare.com/v2/css?f[]=switzer@500&display=swap` (same pattern with `general-sans@400,500,600,700`). Use them as specified, with a Google or system fallback in the font stack.

## 3. Colour tokens

Most specs define shadcn-style HSL custom properties in `index.css` and map them in Tailwind. Recurring sets:

```css
/* Pure monochrome (42 templates use a pure black base) */
:root { --background: 0 0% 0%; --foreground: 0 0% 100%; --primary: 0 0% 100%; --primary-foreground: 0 0% 0%; }

/* Purple-black SaaS (apex-saas, grow-ai-talent-platform, planet-orbit, power-ai) */
:root { --background: 260 87% 3%; --foreground: 40 6% 95%; --card: 240 6% 9%; }
/* accent on top: 121 95% 76% (green #87FB89) or 262 83% 58% (violet) */
```

Rules worth keeping when you swap in a brand colour: one accent only; the accent goes on the primary button and at most one more element; borders are the foreground at 10 to 20% opacity; fully rounded radii (`rounded-full`, used by 53 templates) for buttons, badges and nav pills.

Recolouring details the specs do not cover:

- A spec with a two-stop accent gradient (a button going from one orange to another) gets two stops of the brand hue: the brand colour and a shade about 10% darker. Glows and shadows take the brand colour at the original opacity.
- Decorative multi-colour gradients (a rainbow top bar, an iridescent border) stay as designed unless they clash with the brand colour; then shift only the stop nearest to it.
- Check text on the brand colour. White on a mid-tone green, orange or cyan is often under 4.5:1; darken the button, or switch its label to near-black, rather than shipping unreadable text.

## 4. Liquid glass

The signature effect (26 templates). Two utility classes under `@layer components`. The `::before` draws a 1.4 px gradient border that is bright at top and bottom and vanishes in the middle, using the mask-composite trick.

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
/* Heavier variant for CTAs and navbars */
.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
/* .liquid-glass-strong::before: same as above with alphas 0.5 and 0.2 */
```

Two traps, both silent (the gradient border still renders, so the page looks plausible without any blur):

- **Declaration order.** Keep `-webkit-backdrop-filter` before `backdrop-filter`, as above. Every spec in the library writes them the other way round, and Lightning CSS (the Tailwind v4 / Vite production build) then drops the unprefixed line, leaving Chromium and Firefox with no blur at all. Fix the order whenever you copy glass CSS out of a spec.
- **Filtered ancestors.** An element with any CSS `filter`, even `blur(0px)`, becomes the backdrop for everything inside it, so a glass element in it no longer blurs the page behind. Blur-in entrance animations leave exactly that behind; see section 9.

Usage notes: the element needs its own `border-radius` (usually `rounded-full` or `rounded-2xl`) since the border inherits it. It only reads as glass over something with detail (video, image, gradient); over flat black it is nearly invisible, which is intended for badges but wrong for a main card. On a light background flip the white rgba values to black at lower alpha (see `taskly`: `rgba(255,255,255,0.3)` fill, `1px solid rgba(0,0,0,0.1)`, `inset 0 4px 4px rgba(255,255,255,0.25)`).

## 5. Background video (MP4)

77 templates use video. The reliable form:

```tsx
<video
  className="absolute inset-0 h-full w-full object-cover"
  src={VIDEO_URL}
  poster={POSTER_URL}
  autoPlay muted loop playsInline preload="auto"
/>
```

- `muted` and `playsInline` are what make autoplay work on mobile; without them iOS shows a play button or goes fullscreen.
- Plan for the clip failing, since these links do die. Start the video at `opacity: 0` over a background in the footage's colours (the catalog gives a hex per clip; a CSS gradient needs no extra file), and fade it in once it can play:

```js
const v = document.querySelector('video');
const show = () => v.classList.add('is-ready');            // .is-ready { opacity: 1; transition: opacity .8s }
const hide = () => v.remove();
if (v.error) hide();                                        // the error may have fired before this script ran
else if (v.readyState >= 3) show();
else { v.addEventListener('canplay', show, { once: true }); v.addEventListener('error', hide, { once: true }); }
```
- Content sits in a sibling with `relative z-10`. The section needs `relative overflow-hidden` and a background colour that matches the video's dominant tone, so a slow or failed load still looks deliberate.
- Only the first video on a page needs `preload="auto"`. Pages with several clips (the full landing pages carry four or five, tens of megabytes together) should give the rest `preload="none"` and call `play()` from an IntersectionObserver as they approach the viewport.
- Variants in the library: `object-fill` (stretch, `nexus-it-solutions`), scaled to 115 to 120% for a crop (`finlytic-ai-agent`, `transform-data`), `scaleY(-1)` flip blended into white (`hr-saas-hero`), video only on the right 55% (`neovision`), video pushed below the copy with top padding (`sync-ai`), fixed full-page video behind scrolling sections (`crypto-wealth`, `nexar`).

## 6. HLS video

19 templates stream `.m3u8` through hls.js. Pattern, including the native path Safari needs:

```tsx
useEffect(() => {
  const video = ref.current;
  if (!video) return;
  if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = SRC;                      // Safari, iOS
    return;
  }
  if (!Hls.isSupported()) return;
  const hls = new Hls();
  hls.loadSource(SRC);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
  return () => hls.destroy();              // prevents AbortError on unmount
}, []);
```

Every Mux stream in the library was refusing direct requests when this skill was built, so treat HLS sources as dead until checked. Most have an MP4 copy in the source repository (`scripts/fetch_media.py`). When an MP4 takes the place of a stream, drop hls.js entirely rather than keeping a dead code path, and use the plain `<video>` form from section 5.

## 7. Seamless loop fade

Used by `weblex-dark-hero`, `grow-ai-talent-platform`, `transform-data` to hide the jump when a clip restarts. Drive opacity from the clip's own clock:

- In a `requestAnimationFrame` loop read `currentTime` and `duration`.
- Fade in over the first 0.5 to 1 s; fade out over the last 0.5 to 1.5 s.
- On `ended`: set opacity 0, wait 100 ms, set `currentTime = 0`, `play()`.
- Do not also set the `loop` attribute. Cancel the frame on unmount.
- Pick one driver for opacity. Either set it every frame as above, or (simpler outside React) toggle a class from a `timeupdate` listener and let a CSS transition do the fade. Mixing per-frame writes with a CSS transition on the same property makes them fight.
- Use the same fade when a substitute clip's last frame does not match its first; a plain `loop` then shows a visible cut.

## 8. Overlays and blending

- Readability: `bg-black/40` to `bg-black/60` over busy footage; many templates use none or `bg-black/5` because the footage was chosen dark. If you swap footage, re-check contrast and add an overlay if the headline loses to the background.
- Fade into the page: a bottom gradient 200 to 300 px tall from transparent to the page background.
- `mix-blend-screen` drops a black background from footage shot on black (`taskly` orb), with a CSS `filter: hue-rotate() saturate()` to recolour it to the brand.
- A blurred shape behind the copy (`finlytic-ai-agent`: 801x384 px black pill, `blur(77.5px)`) gives contrast without a full overlay.

## 9. Entrance motion

One vocabulary across the library: fade up, sometimes with blur, staggered.

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}
.animate-fade-up { animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
```

Use `backwards`, not `both` or `forwards`: the element's own styles are the end state, `backwards` holds the start state during the delay, and when the animation finishes nothing is left on the element. With `both`, the final `filter: blur(0)` stays applied for good and switches off the backdrop blur of any glass element inside (section 4). Writing `filter: none` in the last keyframe does not help; it still computes to `blur(0px)`.

With Motion (`import { motion } from "motion/react"`; the older package name is `framer-motion`, same API): `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}`. Typical order and delays: badge 0, headline 0.1 to 0.2, subline 0.3 to 0.8, buttons 0.5 to 1.1, logo strip last. Below the fold use `whileInView` with `viewport={{ once: true }}`.

Motion keeps the final `filter: blur(0px)` as an inline style, so the same trap applies. When a wrapper contains a glass button or badge, animate only `opacity` and `y` on the wrapper and put the blur on the text elements; or run that one entrance with the Web Animations API (`el.animate([...], { duration })` with no `fill`), which leaves no style behind.

## 10. Text reveals

- **BlurText** (`liquid-glass-agency`): split by words, each a `motion.span` going `{filter: blur(10px), opacity: 0, y: 50}` to `{blur(5px), 0.5, -5}` to `{blur(0), 1, 0}`, 0.35 s per step, 100 to 200 ms stagger, triggered by IntersectionObserver.
- **Character by character** without libraries (`impressive-hero`): each character an `inline-block` span with `transition-all duration-500`, from `opacity: 0, translateX(-18px)` to `opacity: 1, translateX(0)`, with a per-character `transitionDelay`.
- **SplitText with GSAP** (`slate`): per-character `y` and opacity tween with `power3.out`.
- **Rotating words** (`loader-animation`): `AnimatePresence mode="wait"`, keyed span, in from `y: 20`, out to `y: -20`, 0.4 s.

Keep the text selectable and readable by assistive tech: put the full string in `aria-label` on the wrapper and `aria-hidden` on the split spans.

## 11. Logo marquee

```css
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.animate-marquee { animation: marquee 20s linear infinite; }
```

Render the logo list twice inside one flex row so the -50% shift loops without a seam. Logos are greyscale at 40 to 60% opacity, `gap-16`. Speeds in the library: 20 to 30 s desktop, 10 s mobile. The library fills these with invented names (Vortex, Nimbus, Prysma, Cirrus, Kynder, Halcyn); use those or the user's real customers, never real companies the user has not named.

## 12. Gradient borders and gradient text

- Gradient border on any shape: the same mask trick as liquid glass, with a brand gradient as the `::before` background and `padding` as the border width (`crypto-wealth`: 1.5 px, `linear-gradient(135deg, #F59E0B, #3B82F6)`).
- Gradient text: `bg-gradient-to-r from-… to-… bg-clip-text text-transparent`. Used sparingly: one word or one line.
- Giant ghost word behind the hero (`new-era-automotive-hero`): vertical gradient from white at 83% to white at 12%, clipped to text.

## 13. Navbar archetypes

1. **Transparent bar**: logo left, links centre, pill CTA right, no background (most video heroes).
2. **Floating pill**: `fixed top-4`, centred, `liquid-glass rounded-full`, links plus a solid white CTA inside the pill.
3. **Floating white card**: white `rounded-[16px]` bar with shadow over video (`logoisum-video-agency`), sometimes narrowing on scroll (`nexacore`: `max-w-6xl` to `max-w-3xl` past 20 px).
4. **Bordered pill group**: links inside a rounded container with a 1 px border (`designpro-academy`).

Below `md`/`lg` every archetype collapses to logo plus a hamburger that opens a dropdown or full-screen sheet. Only 16 specs describe this; build it regardless.

## 14. What the specs leave out

The templates are visual specs. These are missing from almost all of them and should be added quietly, because a page without them is not finished:

- **Reduced motion**: none of the 84 mention it. Wrap autoplay and entrance animation in `@media (prefers-reduced-motion: reduce)` (pause or hide the video and show the poster, set animations to none).
- **Poster or fallback**: only 5 specify a poster. Always give the video a poster or a matching background colour.
- **Accessible names**: `aria-label` on icon-only buttons and the menu toggle, `alt` on images, real `<nav>`, `<main>`, `<h1>` (one per page).
- **Mobile**: check the headline does not overflow at 360 px wide; fixed pixel sizes from a spec (for example 290 px top padding) need a smaller mobile value.
- **Focus states**: visible focus ring on links and buttons; the glass styles remove borders, so add `focus-visible:ring`.
- **Contrast**: `text-white/60` over bright footage can fall under 4.5:1. Raise the opacity or add an overlay. The same goes for white labels on a brand-coloured button (section 3).
- **Media placed by percentage**: a video set with `top: 20%`, `w-full h-auto` in a fixed-height hero shrinks to a thin strip on a phone and slides behind the copy on a tablet. Give it a per-breakpoint offset or switch to `object-cover` below `md`.
- **Floating nav over content**: a 4 px glass pill is readable over the hero video and unreadable once body text scrolls under it. Give it a darker, heavier glass after the first scroll.
- **Short screens**: video heroes are sensitive to height. A layout that works at 1440x900 can push its buttons onto the bright part of the footage, or below the fold, at 1280x620 or 360x640. Check one short viewport and reduce vertical padding there.

## 15. Translating a spec into a single file

When there is no build step (a chat artifact, "just give me one HTML file"), the spec's React vocabulary maps as follows:

| In the spec | In a single file |
| :--- | :--- |
| Tailwind classes | Plain CSS with the same values is the safest choice (the Tailwind Play CDN works but logs a console warning). Common values: `text-5xl` 48px, `text-6xl` 60px, `text-7xl` 72px, `text-8xl` 96px; `tracking-tight` -0.025em; `backdrop-blur-md` 12px, `backdrop-blur` 8px, `blur-lg` 16px; `rounded-2xl` 16px; `max-w-7xl` 1280px |
| `lucide-react` icons | Inline SVG, 24x24 viewBox, `stroke="currentColor"`, `stroke-width="2"`, round caps and joins |
| Motion `initial` / `animate` | CSS keyframes with `animation-delay` for the stagger (section 9) |
| Motion `whileHover`, `whileTap` | CSS `:hover` / `:active` with a `transition` |
| `whileInView`, scroll reveals | IntersectionObserver adding a class once |
| A memoised React video component with hls.js | A plain `<video>` plus the failure handling in section 5; hls.js from a CDN only if the stream is live |
| Poster image | A CSS gradient in the footage's colours behind the video, so no second file is needed |
| shadcn/ui components | The same element with the listed classes written out; the tokens become CSS custom properties on `:root` |
