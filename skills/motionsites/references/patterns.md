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

Fonts some templates name that are not free to hotlink: Aeonik, PP Neue Montreal, PP Mondwest, Switzer, Mazzard H, Futura, SF Pro. Unless the user has a licence and files, substitute and say so: Inter or Geist for the neutral sans, Instrument Serif or Playfair Display for the serif accent, Manrope for the geometric ones.

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

## 4. Liquid glass

The signature effect (26 templates). Two utility classes under `@layer components`. The `::before` draws a 1.4 px gradient border that is bright at top and bottom and vanishes in the middle, using the mask-composite trick.

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
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
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
  position: relative;
  overflow: hidden;
}
/* .liquid-glass-strong::before: same as above with alphas 0.5 and 0.2 */
```

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
- Content sits in a sibling with `relative z-10`. The section needs `relative overflow-hidden` and a background colour that matches the video's dominant tone, so a slow or failed load still looks deliberate.
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

Every Mux stream in the library was refusing direct requests when this skill was built, so treat HLS sources as likely dead until checked (see the media rules in SKILL.md). When you substitute an MP4, drop hls.js entirely rather than keeping a dead code path.

## 7. Seamless loop fade

Used by `weblex-dark-hero`, `grow-ai-talent-platform`, `transform-data` to hide the jump when a clip restarts. Drive opacity from the clip's own clock:

- In a `requestAnimationFrame` loop read `currentTime` and `duration`.
- Fade in over the first 0.5 to 1 s; fade out over the last 0.5 to 1.5 s.
- On `ended`: set opacity 0, wait 100 ms, set `currentTime = 0`, `play()`.
- Do not also set the `loop` attribute, and do not use a CSS transition on opacity (the two fight). Cancel the frame on unmount.

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
.animate-fade-up { animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
```

With Motion (`import { motion } from "motion/react"`; the older package name is `framer-motion`, same API): `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}`. Typical order and delays: badge 0, headline 0.1 to 0.2, subline 0.3 to 0.8, buttons 0.5 to 1.1, logo strip last. Below the fold use `whileInView` with `viewport={{ once: true }}`.

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
- **Contrast**: `text-white/60` over bright footage can fall under 4.5:1. Raise the opacity or add an overlay.
