# Template catalog

84 templates. Each row points to `prompts/<slug>.md`, which holds the full build spec.

Columns:

- **What it builds**: written from the spec itself. Trust this over the template title; several titles do not match their content.
- **Theme**: `dark`, `light`, `bright video, white text`, `colour`, or `mixed`. Taken from the spec's colours and from viewing the footage.
- **Footage**: what the main background video shows, with a hex sampled from the edges of a frame (use it as the fallback background colour). `-` means the design has no video.
- **Stack / effects**: notable libraries and signature effects the spec names. React + Tailwind is implied everywhere, usually with Vite, TypeScript and lucide-react icons.
- **Media**: for videos, how many still answered a direct request on 2026-11-14 (`live`) and how many have a verified copy in the source repository (`in repo`, fetch with `scripts/fetch_media.py`). Other asset kinds are listed only when some are dead, as `kind live/total`; a trailing `?` means unverified. `none` means no external media at all.
- **Size**: length of the spec in thousands of characters; a rough proxy for how much it pins down.

## Contents

- Full landing pages: 19
- Hero sections: 60
- Components: 3
- Slide decks: 2
- Quick picks by look
- Quick picks by industry
- Real names and claims to replace
- Broken or unverified media

## Full landing pages (multi-section)

| slug | What it builds | Theme | Footage | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `3d-jack-portfolio` | 3D-creator portfolio "Jack": hero, marquee, about, services, projects. Dark #0C0C0C, Kanit. | dark | - | Motion, marquee, scroll-driven, text reveal, gradient text | img 34/35 | 14k |
| `acreage-farming` | Agriculture brand site, 12 sections (video hero, stats bar, about, services, video break, portfolio, blog grid, CTA, footer). Warm cream + forest green, Playfair Display + DM Sans. | light | aerial of misty green hills (#969f8e) | Tailwind v4 | video 1/1 live, 0/1 in repo; img 13/15? | 11k |
| `ai-designer-agency` | AI web-design agency "VIRALMEDIA", 7 sections: fixed navbar, hero, scroll-reveal about text, 2x2 work grid, parallax video showcase, HLS video CTA, footer. Pure black, liquid glass, Barlow + Instrument Serif italic. | dark | pink coral-like arc on black; CTA clip: purple glass ribbon (#10090f) | Motion, hls.js, liquid glass, scroll-driven | video 1/3 live, 2/3 in repo | 7k |
| `ai-designer-portfolio` | Creative-studio portfolio "V Vortex": hero, marquee, testimonial quote, pricing cards, projects, footer. White background with dark-teal ink (#051A24), PP Neue Montreal + PP Mondwest accent words. | light | - | marquee | font 0/2 | 4k |
| `akor-security` | Security-systems landing "AKOR". Dark grey with vivid green primary, Sora, fade-up entrances. | dark | dark room corner with a green laser line (#131313) | - | video 2/2 live, 2/2 in repo | 5k |
| `e-commerce-website` | Health/wellness shop landing. Near-white, fully rounded (pill) radii, system fonts, shadcn/ui. No media needed. | light | - | shadcn, marquee | none | 5k |
| `focus-ai` | Actually "Velorah", an electric RV/camper brand: 6-section landing. Pure black, Instrument Serif headings + Inter, HLS video sections. | dark | figure reading on a flower hill at dusk; people at glowing screens at night; red-white light flare (#4e6da1) | shadcn, hls.js, react-router, liquid glass | video 3/4 live, 3/4 in repo | 11k |
| `framelix-3d-studios` | Motion-studio landing "Framelix 3D": navbar, hero, marquee banner, shipping section. Pure black, Inter, pill radii, Framer Motion. | dark | glowing translucent dragonflies on black (#020203) | Motion, marquee | video 2/2 live, 2/2 in repo | 3k |
| `guardnet` | Security/privacy brand "guardnet": hero, security, companies, benefits sections. Black, Futura/Readex Pro, blue + orange accents. | dark | dark iridescent blobs with orange-blue rim light on black (#050303) | - | video 3/3 live, 0/3 in repo | 9k |
| `liquid-glass-agency` | AI web-design agency landing, 9 sections: floating navbar, hero, how-it-works, alternating feature rows, feature grid, stats, testimonials, CTA + footer. Black, liquid glass, Instrument Serif italic + Barlow, BlurText word reveal. | dark | night garden of glowing wildflowers; section clips: white light curve, orange glow line, lilac ribbon, all on black (#090905) | shadcn, Motion, hls.js, react-router, liquid glass, text reveal | video 1/4 live, 4/4 in repo | 13k |
| `mindloop-landing` | Newsletter/content platform "Mindloop": navbar, hero, mission, solution, CTA, footer. Strict black-and-white monochrome, Inter + Instrument Serif italic accents, HLS video. | dark | astronaut and creatures in a surreal pond at night; section clips: floating plant island, 3D shapes, lilac ribbon on black (#282324) | shadcn, Motion, hls.js, liquid glass, scroll-driven, text reveal | video 3/4 live, 4/4 in repo | 7k |
| `neovision` | Futuristic 3-section landing: light hero (#FBFDFD) with video on the right half, dark About, Insights. System fonts. | mixed (light hero, dark sections) | man in a white VR headset on white (#f2f2f2) | - | video 2/2 live, 2/2 in repo | 9k |
| `nexacore` | Enterprise-infrastructure landing "NexaCore": shrinking white navbar, video hero, trusted, freedom and precision sections. Mazzard H font, navy/lavender with purple #c86fff, HLS. | mixed (dark hero, light sections) | dark fan of purple and orange light rays (#110f1b) | hls.js, gradient text | video 1/2 live, 0/2 in repo | 14k |
| `nova-space-systems` | Aerospace landing "NOVA". Brutally minimal black/white, zero border radius, Space Grotesk only, shadcn/ui. | dark | night sky with a bright star over a dark coastline | shadcn | video 2/3 live, 2/3 in repo | 5k |
| `orbis-nft` | NFT landing "Orbis.Nft", 4 sections: hero, intro, collection grid, CTA. Dark space theme, Anton + Condiment script, liquid glass, video backgrounds. | dark | cartoon astronaut on a colourful alien planet (#484470) | liquid glass | video 6/6 live, 6/6 in repo | 8k |
| `orbit-engineers` | Space-engineering consultancy: 3 full-screen heroes switched by buttons (not scroll) with crossfading videos. Dark blue-grey + cyan, Inter, Framer Motion. | dark | sunset alien valley with dome habitats seen through a porthole (#473f43) | Motion | video 3/3 live, 3/3 in repo | 6k |
| `portfolio-cosmic` | Dark portfolio page: loading screen, video hero with floating navbar, further sections. GSAP + Framer Motion + hls.js, Inter + Instrument Serif italic. | dark | black hole swirl on black (#090f13) | Motion, GSAP, hls.js, react-router, marquee, scroll-driven | video 0/1 live, 1/1 in repo | 8k |
| `veloce-finance` | Fintech app "veloce", 4 sections. White page with deep-navy text (#00041F), copper accent #B56939 and a custom brand gradient, Manrope, Framer Motion. The only full finance page in the library. | light | pastel debit cards floating on white; pastel glass discs (#f8f6fb) | Motion, scroll-driven, gradient text | video 4/4 live, 0/4 in repo | 8k |
| `viktor-portfolio` | Two-page architect portfolio. Black, Orbitron + Space Grotesk + JetBrains Mono, video hero with vignette, slide counter and next-project navigation. | dark | man in a glowing AR visor, orange backlight (#280f02) | Motion | video 2/2 live, 2/2 in repo; img 0/1? | 3k |

## Hero sections (one viewport, sometimes plus a logo strip or one extra section)

| slug | What it builds | Theme | Footage | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `aethera-studio` | Cinematic studio hero over a looping video. Instrument Serif display + Inter. Headline "Beyond silence, we build the eternal." | light | painted green valley with a river under a white sky (#9da686) | fade loop | video 1/1 live, 1/1 in repo | 3k |
| `ai-automation-hero` | AI/SaaS hero, content left-aligned and vertically centred over an HLS video. Dark purple-black #070612. | dark | dark grey vertical light bands (#151419) | Motion, text reveal | video 0/1 live, 1/1 in repo | 3k |
| `apex-saas` | Dark SaaS hero in 3 parts: floating glass navbar, hero, social-proof block with background video. Purple-black (260 87% 3%), Geist Sans. | dark | glossy blue glass ribbon on black (#0f1333) | liquid glass, marquee | video 1/1 live, 1/1 in repo | 5k |
| `asme` | Dark cinematic hero, full-screen video with liquid-glass UI. Headline "Built for the curious". | dark | person at a laptop ringed by light trails and yellow flowers, on black (#0d0d0c) | liquid glass, fade loop | video 1/1 live, 1/1 in repo | 4k |
| `automation-machines` | Futuristic full-viewport hero with a Spline 3D scene behind the content. Black/white, React 19 + Tailwind v4 + Motion. | dark | - | Tailwind v4, Motion, Spline, gradient text | 3D 1/1 | 7k |
| `bionova-biotech` | Biotech consulting hero "BIONOVA", exactly 100vh. White background, Poppins, soft-blue pill buttons, HLS video, blur fade-up entrances. | light | glass droplet floating on lilac (two more droplet clips) (#655c82) | hls.js | video 0/3 live, 3/3 in repo | 4k |
| `bloom-ai` | AI floral-design platform "Bloom". Liquid-glass panels over a looping video. | dark | green glowing planet in a starfield (#0c1d21) | liquid glass | video 1/1 live, 1/1 in repo | 4k |
| `bold-portfolio-hero` | Personal-portfolio hero on a red-orange vertical gradient (#fd2601 to #f37e1c). Massive uppercase Anton headline, floating navbar, brand strip. No media needed. | colour (orange) | - | - | none | 3k |
| `buzzentic-agency` | Agency hero over a full-screen video with no overlay. Barlow + Instrument Serif italic accents, off-white pills, Tailwind v4. | dark | red and white light flare on blue-black (#433f45) | Tailwind v4 | video 1/1 live, 1/1 in repo | 2k |
| `clearinvoice-saas-hero` | Invoicing SaaS hero "ClearInvoice". Dark, HLS video at full opacity, Switzer + Geist, exact button recreation, social proof row. | dark | iridescent rainbow wave on black (#1a252c) | Motion, hls.js | video 0/1 live, 1/1 in repo | 2k |
| `clubx-investors` | Private investor club "ClubX". Dark heading over a bright full-screen video with white stats at the bottom, Inter + Instrument Serif. Headline "Finance. Freedom. Fellows." | light | sunny lakeside gathering under trees (#686c5c) | - | video 1/1 live, 1/1 in repo | 3k |
| `codenest-coding-platform` | Coding-education hero "CodeNest". Dark, HLS video, content inside a liquid-glass card with gradient border. | dark | teal digital equaliser bars on black (#010202) | hls.js, liquid glass | video 0/1 live, 1/1 in repo | 3k |
| `codercrest` | Single HeroSection.tsx component: 100vh pure black, three-line heading with grey gradient text and a green accent (#27F3A9). | dark | grey fingerprint mark on black; teal crystal burst (#010101) | gradient text | video 2/2 live, 0/2 in repo | 4k |
| `crypto-wealth` | Actually "ContentFlow": two scroll-linked fullscreen sections over a fixed video that zooms with scroll progress. Inter, amber-to-blue gradient-border buttons, feature showcase cards. | light | flowering hedge arch on white; hikers above a sunset valley (#d5d9d3) | scroll-driven | video 2/2 live, 0/2 in repo | 11k |
| `dark-portfolio-hero` | Portfolio hero plus animated loading screen. Dark, Next.js 14, GSAP entrance, Framer Motion loader, Inter + Instrument Serif. | dark | blue glass light beams on black (#202b37) | Next.js, Motion, GSAP | video 0/1 live, 1/1 in repo | 6k |
| `datacore-booking` | Booking-app hero over an opaque full-screen video. Purple #7b39fc, Manrope/Cabin/Instrument Serif/Inter. Headline "Book your perfect stay instantly and hassle-free". | dark | purple light streaks on black (#2b1d45) | - | video 1/1 live, 1/1 in repo | 3k |
| `datacore-saas-hero` | "Linear-style" dark SaaS hero "Datacore". HLS video under a black/60 overlay, mobile hamburger menu, Manrope/Inter/Cabin/Instrument Serif. | dark | purple-blue glass ribbons on black (#231d36) | hls.js | video 0/1 live, 1/1 in repo; img 0/1 | 3k |
| `designpro-academy` | Design-education hero "DesignPro". Black with video background, pill nav container, two-column top section. | dark | translucent blue-violet glass ribbon on black (#121122) | Motion | video 1/1 live, 1/1 in repo | 3k |
| `digitwist-ai-builder` | AI website-builder hero. Dark, HLS video with decorative gradients, Motion animations. Headline "Design at the speed of thought". | dark | deep blue vertical curtain folds (#031467) | Motion, hls.js, gradient text | video 0/1 live, 1/1 in repo | 6k |
| `ecovolta` | Renewable-energy hero "EcoVolta", h-screen with no scroll. Cream #F5F3EE over a fixed full-page video, Inter, Framer Motion. | light | wind turbines and solar panels on a small green island, white background (#fdfefc) | Motion, liquid glass, marquee | video 1/1 live, 0/1 in repo | 7k |
| `ecovolta-v2` | Full-screen video hero for an AI outbound-sales product (the spec's brand is "closer"; content does not match the title). Dark text on a bright video, Instrument Serif + Manrope + Instrument Sans, blue-to-yellow gradient accents. | light | not viewable (source dead, no copy) | Tailwind v4, hls.js, gradient text | video 0/1 live, 0/1 in repo | 4k |
| `evr-ventures` | Impact-venture hero "Evolve Responsible Ventures". Pure black with video background, Geist + Gilda Display serif, circular progress stat. Headline "Navigating the route to impactful regeneration". | dark | glass cube splitting rainbow light on black (#070f15) | Motion, marquee | video 1/1 live, 1/1 in repo | 4k |
| `finlytic-ai-agent` | AI-agent automation hero. Black, video scaled to 120% with a blurred black pill behind the copy, purple #7b39fc accents. | dark | purple dotted globe on black (#15131a) | - | video 1/1 live, 1/1 in repo | 3k |
| `glassmorphism-agency-hero` | Dark glassmorphism hero with purple/pink gradients (#FA93FA to #983AD6), HLS hero video, animated logo cloud. Tailwind v4, Motion. | dark | not viewable (source dead, no copy) | Tailwind v4, Motion, hls.js | video 0/1 live, 0/1 in repo | 3k |
| `grow-ai-talent-platform` | Dark hero + social-proof section. shadcn tokens (260 87% 3%), Geist, liquid glass, video with JS fade-in/out loop, logo marquee. | dark | glossy blue glass ribbon on black (#0f1333) | shadcn, liquid glass, marquee, fade loop, gradient text | video 1/1 live, 1/1 in repo | 5k |
| `hr-saas-hero` | Minimal editorial hero for remote-team HR. White, vertically flipped video fading into white, Geist + Instrument Serif, 290px top padding. | light | pastel glass tiles rising like a bar chart on white (#e8def0) | Tailwind v4, Motion | video 1/1 live, 1/1 in repo | 2k |
| `impressive-hero` | Full-screen video hero with liquid-glass navbar, character-by-character heading animation and bottom tagline pill. Helvetica Neue, no animation or icon libraries. | dark | dark starfield with soft light leaks and thin HUD lines (#343a3d) | liquid glass, text reveal | video 1/1 live, 0/1 in repo | 5k |
| `logoisum-video-agency` | Video-editing agency hero. Bright full video with no overlay, floating white navbar, Barlow + Instrument Serif italic. Shortest spec in the library. | bright video, white text | pastel flower hills by a lake under blue sky (#a1c6d5) | - | video 1/1 live, 1/1 in repo | 2k |
| `mindloop` | Full-screen video hero, dark with white text, Instrument Serif. Headline "Focus in a Distracted World". | dark | figure reading on a flower hill above clouds at dusk (#4e6da1) | liquid glass | video 1/1 live, 1/1 in repo | 3k |
| `neuralyn` | Analytics-dashboard SaaS "Neuralyn". Pure black, Inter + Instrument Serif italic accent word, shadcn/ui, Framer Motion. | dark | night garden of glowing wildflowers (#090905) | shadcn, Motion, liquid glass, scroll-driven | video 1/1 live, 1/1 in repo | 5k |
| `new-era-automotive-hero` | Car-marketplace hero. Dark video with giant gradient-filled "NEW ERA" in Bebas Neue behind the content, Inter UI. | dark | orange sports car on a black-to-orange studio floor (#501806) | - | video 1/1 live, 1/1 in repo | 3k |
| `new-era-bold-hero` | Top-aligned hero over a video with dark-blue fallback (#21346e), big headline and custom CTA. | colour (blue) | isometric 3D gadget on a track, saturated blue (#3a74bc) | - | video 1/1 live, 1/1 in repo | 2k |
| `nexar` | Project-management dashboard UI floating over a fullscreen video: white pill header, 3-column grid of task cards with staggered fade-up. Instrument Serif display. | light | blue sky over low green hills (#b5d0ca) | - | video 1/1 live, 0/1 in repo | 8k |
| `nexora-automation` | White SaaS hero filling exactly 100vh: badge, headline, CTAs and a hand-coded banking dashboard preview (balances, accounts, transactions; not an image). Instrument Serif + Inter, indigo accent. | light | painted forest clearing with bright sky (#8a9795) | shadcn, Motion | video 1/1 live, 1/1 in repo | 5k |
| `nexus-it-solutions` | IT-consulting hero, 100vh, video stretched with object-fill, trusted-by strip. Akshar + Inter. | light | white field with glowing blue rings at both edges (#c5d2dc) | - | video 1/1 live, 1/1 in repo | 2k |
| `nickel-payments` | Payments hero with floating navbar. Warm off-white with orange primary, shadcn/ui. | light | orange retro 3D computer character on white (playful, unrelated to payments) (#ecebef) | shadcn | video 1/1 live, 1/1 in repo | 3k |
| `nike-premium-landing` | Two-section interactive sneaker hero: GSAP bubble menu, cursor spotlight that reveals a video through an SVG mask, react-player. Tailwind v4, Manrope + Instrument Serif. Uses a real brand: rebrand before use. | dark | not viewable (source dead, no copy) | Tailwind v4, GSAP, cursor fx | video 0/2 live, 0/2 in repo; img 0/2? | 18k |
| `orbit-web3` | Dark cinematic Web3 hero. Deep green-black (150 20% 5%) with warm off-white, Instrument Serif for everything. | dark | gold coins falling through a green light beam in space (#1b2720) | marquee | video 1/1 live, 1/1 in repo | 3k |
| `planet-orbit` | Dark SaaS hero. Purple-black with green accent #87FB89, Geist Sans, liquid glass. | dark | Earth's limb with teal atmospheric glow (#10373f) | liquid glass, marquee | video 1/1 live, 1/1 in repo | 3k |
| `power-ai` | Dark full-screen video hero with navbar, headline, CTA and bottom logo marquee. Geist + General Sans. | dark | glowing violet tube loops on black (#160f30) | liquid glass, marquee, gradient text | video 1/1 live, 1/1 in repo | 4k |
| `railroad-ai` | Full-screen video hero with a faint black/5 overlay and liquid glass. Headline "Focus in a Constantly Distracted World". | bright video, white text | plains and mountains through a train window, blue sky (#535660) | shadcn, Motion, liquid glass, text reveal | video 1/1 live, 1/1 in repo | 4k |
| `skyelite-private-jets` | Private-jet hero over a bright video: dark-grey text, uppercase "PRIVATE JETS" label, two-line headline. | light | black private jet in white clouds (#ceccce) | - | video 1/1 live, 1/1 in repo | 2k |
| `slate` | Productivity SaaS "Slate". Fullscreen video, ultra-light Helvetica Neue (weight 200), liquid glass, GSAP SplitText heading animation. | dark | violet dusk sky over a mountain ridge (#4e4f95) | GSAP, liquid glass, text reveal | video 1/1 live, 0/1 in repo | 5k |
| `space-voyage` | Space-travel cinematic hero. Video background, liquid glass, Instrument Serif italic + Barlow, partners bar. | bright video, white text | cherry-blossom meadow and lake under blue sky (#8f8480) | Motion, liquid glass, text reveal | video 1/1 live, 1/1 in repo | 6k |
| `stellar-ai` | "Stellar.ai" hero. White, Inter, fade-in-up entrances and an overlay dialog. | light | purple glowing fantasy garden at night (#312e49) | gradient text | video 1/1 live, 1/1 in repo | 4k |
| `synapse-dark-hero` | Solid-black hero with blurred-glass navbar, row of glass "Integrated with" badges, video and a static logo row. Framer Motion. | dark | thin white light curve on black (#080808) | Motion, hls.js, marquee | video 0/1 live, 1/1 in repo | 2k |
| `sync-ai` | White single-viewport SaaS hero (brand in the spec is "Stellar.ai"): video pushed below the hero copy, partner-logo bar pinned to the bottom. Inter + lucide only. | light | green flower-covered hills under blue sky (#708d76) | gradient text | video 1/1 live, 1/1 in repo | 6k |
| `targo-logistics-hero` | Logistics hero "targo". Black + brand red #EE3F2C, bold uppercase Rubik, clipped-corner buttons, consultation card bottom-left. | dark | red formula race car on a dark track (#351b23) | - | video 1/1 live, 1/1 in repo | 2k |
| `taskly` | Task-management hero. White with blue glow, Fustat + Inter, strong liquid-glass navbar, glassy orb video blended with mix-blend-screen. | light | violet glass orb on black (meant for mix-blend-screen) (#000001) | liquid glass | video 1/1 live, 1/1 in repo | 2k |
| `taskora-saas-hero` | Dark (#050505) SaaS hero "Taskora": video at 50% opacity fading into the background, floating pill glass navbar, dashboard UI, Instrument Serif italic accent word. | dark | blue glass waves (#3376c7) | Motion | video 1/1 live, 1/1 in repo | 3k |
| `terra-geo-map` | Geo-mapping SaaS "Terra". Light, Inter, blue #2E7DF3, dotted selection-box SVG around one headline word, product video under the CTA. | light | rotating Earth globe on white (#dde3e9) | gradient text | video 1/1 live, 1/1 in repo | 3k |
| `transform-data` | Data-product hero: black text and an AI search box over a 115%-scaled bright video with a custom JavaScript fade loop. Schibsted Grotesk/Inter/Noto Sans/Fustat. | light | misty green valley with a winding path (#72786f) | fade loop | video 1/1 live, 1/1 in repo | 4k |
| `urban-jungle` | Scroll-driven hero on a 500vh root: GSAP ScrollTrigger + ScrollToPlugin, hls.js, custom Dirtyline display font. Black, React 19 + Tailwind v4. | dark | not viewable (source dead, no copy) | Tailwind v4, GSAP, hls.js, react-router, marquee, scroll-driven, cursor fx | video 0/1 live, 0/1 in repo | 12k |
| `velorah` | Fullscreen video hero with glassmorphic navigation and cinematic serif type. shadcn/ui. Headline "Where dreams rise through the silence." | dark | people at glowing screens among book stacks under a starry sky (#223637) | shadcn, liquid glass | video 1/1 live, 1/1 in repo | 4k |
| `vitara` | Healthcare-AI hero. Video background under a white navbar, Inria Serif headings with very tight tracking. | light | pale grey sky over a thin band of colourful field (#b4b8ba) | text reveal | video 1/1 live, 0/1 in repo | 4k |
| `wealth-video-hero` | Wealth-management hero. Black, video background, glass pill tag. Headline "Build Wealth That Lasts Generations". | dark | neon blue-pink-orange light arc on black (#050d13) | - | video 1/1 live, 1/1 in repo | 2k |
| `web3-eos-hero` | Web3 hero. Pure black, video under a 50% overlay, General Sans, waitlist pill button. | dark | black hole swirl on black (#090f13) | - | video 1/1 live, 1/1 in repo | 3k |
| `weblex-dark-hero` | Dark website-builder hero: transparent navbar, bottom-aligned content, video with requestAnimationFrame fade loop, green accent. | dark | grey asteroid breaking apart on black (#060607) | fade loop | video 1/1 live, 1/1 in repo | 3k |
| `xportfolio-hero` | Brand-design agency "Brandly", one viewport: fullscreen video, Inter + Anton. Headline "BUILDING / BRANDS THAT / RESONATE". | light | figure in a white helmet with an orange visor, on white (#fcfcfc) | - | video 1/1 live, 1/1 in repo | 3k |
| `yacht-club` | Luxury yacht-club experience: GSAP staggered menu, Framer Motion fleet video overlay, liquid-distortion cursor trail. React 19, Tailwind v4, OKLCH tokens, Instrument Serif. | dark | top-down yachts cutting through dark sea (3 clips) (#152432) | Tailwind v4, Motion, GSAP, cursor fx | video 3/3 live, 0/3 in repo; embed 0/1? | 8k |

## Components

| slug | What it builds | Theme | Footage | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `loader-animation` | Fullscreen loading screen: rotating words, 000-to-100 counter, gradient progress bar, timed hand-off to the page. Framer Motion, Instrument Serif italic. No media needed. | dark | - | Next.js, Motion | none | 3k |
| `price-calculator` | Project-estimation calculator section: radios, slider, checkboxes and live pricing logic against agency/freelancer comparison cards. Dark, coral #FF5656, shadcn Slider. No media needed. | dark | - | shadcn | none | 3k |
| `social-media-posts` | 3x2 grid of six 384px social-post cards over a full-page background image. Seven Google fonts, liquid glass. A set of post designs rather than a page. | mixed | six clips, five reused from other templates plus an orange-black android figure (#0a0504) | liquid glass, gradient text | video 6/6 live, 5/6 in repo; img 0/1 | 12k |

## Slide decks

| slug | What it builds | Theme | Footage | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `investor-deck` | 5-slide investor presentation web app. Black, Aeonik, Mux HLS video backgrounds, Motion slide transitions. | dark | five dark clips: black hole swirl, grey light bands, blue glass beams, faint purple orb, purple dotted globe (#090f13) | Tailwind v4, Motion, hls.js | video 0/5 live, 5/5 in repo | 11k |
| `pro-ai-deck` | 7-slide studio pitch deck with swipe/scroll/keyboard navigation and animated transitions. Motion, hls.js, Instrument Serif. | dark | glowing forest shrine, blue glass waves, robot in a flower field, red-lit monoliths, plus four dark stream clips (#101515) | Motion, hls.js, liquid glass, text reveal | video 5/9 live, 5/9 in repo | 20k |

## Quick picks by look

Starting points, not an exhaustive index. Check the row before committing.

- **Liquid glass (the library's signature look)**, heroes: `apex-saas`, `asme`, `bloom-ai`, `codenest-coding-platform`, `ecovolta`, `grow-ai-talent-platform`, `impressive-hero`, `mindloop`, `neuralyn`, `planet-orbit`, `power-ai`, `railroad-ai`, `slate`, `space-voyage`, `taskly`, `velorah`
- **Liquid glass, full pages**: `ai-designer-agency`, `focus-ai`, `liquid-glass-agency`, `mindloop-landing`, `orbis-nft`
- **Light themes**: `acreage-farming`, `aethera-studio`, `ai-designer-portfolio`, `bionova-biotech`, `clubx-investors`, `crypto-wealth`, `e-commerce-website`, `ecovolta`, `ecovolta-v2`, `hr-saas-hero`, `nexar`, `nexora-automation`, `nexus-it-solutions`, `nickel-payments`, `skyelite-private-jets`, `stellar-ai`, `sync-ai`, `taskly`, `terra-geo-map`, `transform-data`, `veloce-finance`, `vitara`, `xportfolio-hero`
- **Bright footage with white text**: `logoisum-video-agency`, `railroad-ai`, `space-voyage`
- **Abstract glass and light footage (brand-neutral, suits any product)**: `apex-saas`, `grow-ai-talent-platform`, `clearinvoice-saas-hero`, `datacore-saas-hero`, `designpro-academy`, `dark-portfolio-hero`, `evr-ventures`, `wealth-video-hero`, `power-ai`, `synapse-dark-hero`, `taskora-saas-hero`, `buzzentic-agency`, `datacore-booking`, `digitwist-ai-builder`, `guardnet`, `hr-saas-hero`
- **Nature and landscape footage**: `aethera-studio`, `logoisum-video-agency`, `space-voyage`, `sync-ai`, `nexar`, `nexora-automation`, `transform-data`, `railroad-ai`, `acreage-farming`, `slate`, `mindloop`, `crypto-wealth`
- **Space footage**: `bloom-ai`, `planet-orbit`, `orbit-web3`, `web3-eos-hero`, `weblex-dark-hero`, `finlytic-ai-agent`, `nova-space-systems`, `portfolio-cosmic`, `impressive-hero`, `terra-geo-map`
- **Sans headline with one italic serif accent word**: `taskora-saas-hero`, `neuralyn`, `mindloop-landing`, `hr-saas-hero`, `logoisum-video-agency`, `buzzentic-agency`, `datacore-booking`, `nexora-automation`
- **Loud display type (Anton, Bebas Neue, Rubik, Kanit)**: `bold-portfolio-hero`, `new-era-automotive-hero`, `xportfolio-hero`, `orbis-nft`, `targo-logistics-hero`, `3d-jack-portfolio`
- **Product UI or dashboard inside the hero**: `nexora-automation`, `taskora-saas-hero`, `nexar`, `terra-geo-map`, `sync-ai`, `transform-data`
- **Stark minimal / monochrome**: `nova-space-systems`, `mindloop-landing`, `codercrest`, `evr-ventures`
- **No external media needed**: `bold-portfolio-hero`, `e-commerce-website`, `loader-animation`, `price-calculator`
- **Scroll-driven or cursor-driven interaction**: `3d-jack-portfolio`, `ai-designer-agency`, `crypto-wealth`, `mindloop-landing`, `neuralyn`, `nike-premium-landing`, `portfolio-cosmic`, `urban-jungle`, `veloce-finance`, `yacht-club`
- **GSAP**: `dark-portfolio-hero`, `nike-premium-landing`, `portfolio-cosmic`, `slate`, `urban-jungle`, `yacht-club`
- **shadcn/ui tokens**: `e-commerce-website`, `focus-ai`, `grow-ai-talent-platform`, `liquid-glass-agency`, `mindloop-landing`, `neuralyn`, `nexora-automation`, `nickel-payments`, `nova-space-systems`, `price-calculator`, `railroad-ai`, `velorah`
- **Video at risk** (at least one video is dead with no copy in the repo, so plan a substitute): `ai-designer-agency`, `ecovolta-v2`, `focus-ai`, `glassmorphism-agency-hero`, `nexacore`, `nike-premium-landing`, `nova-space-systems`, `urban-jungle`

## Quick picks by industry

Industry is the weakest reason to choose (the brand gets replaced), but requests often arrive phrased this way.

- **Finance, fintech, payments, investing**: `veloce-finance`, `nickel-payments`, `nexora-automation`, `wealth-video-hero`, `clearinvoice-saas-hero`, `clubx-investors`, `evr-ventures`, `investor-deck`
- **AI products and SaaS**: `ai-automation-hero`, `apex-saas`, `neuralyn`, `planet-orbit`, `power-ai`, `grow-ai-talent-platform`, `digitwist-ai-builder`, `datacore-saas-hero`, `synapse-dark-hero`, `taskora-saas-hero`, `slate`, `stellar-ai`, `sync-ai`, `mindloop`, `railroad-ai`, `ecovolta-v2`, `finlytic-ai-agent`
- **Agency and studio**: `liquid-glass-agency`, `ai-designer-agency`, `framelix-3d-studios`, `buzzentic-agency`, `logoisum-video-agency`, `glassmorphism-agency-hero`, `xportfolio-hero`, `aethera-studio`, `velorah`
- **Portfolio and personal**: `3d-jack-portfolio`, `viktor-portfolio`, `portfolio-cosmic`, `dark-portfolio-hero`, `bold-portfolio-hero`, `ai-designer-portfolio`
- **Space, aerospace, deep tech**: `nova-space-systems`, `orbit-engineers`, `space-voyage`, `automation-machines`, `nexacore`
- **Security and privacy**: `akor-security`, `guardnet`, `codercrest`
- **Web3 and NFT**: `orbis-nft`, `orbit-web3`, `web3-eos-hero`
- **Consumer, retail, travel, automotive, luxury**: `e-commerce-website`, `nike-premium-landing`, `urban-jungle`, `yacht-club`, `skyelite-private-jets`, `focus-ai`, `new-era-automotive-hero`, `datacore-booking`
- **Health, biotech, wellness**: `bionova-biotech`, `vitara`, `e-commerce-website`
- **Energy, agriculture, climate**: `ecovolta`, `acreage-farming`, `evr-ventures`
- **Logistics, IT services, B2B tools**: `targo-logistics-hero`, `nexus-it-solutions`, `terra-geo-map`, `transform-data`, `hr-saas-hero`, `nexar`, `taskly`
- **Education, content, community**: `codenest-coding-platform`, `designpro-academy`, `mindloop-landing`, `bloom-ai`
- **Decks and components**: `investor-deck`, `pro-ai-deck`, `loader-animation`, `price-calculator`, `social-media-posts`

## Real names and claims to replace

Specs that name real companies or make factual claims. Replace them with the user's own facts or with invented placeholder names. Not exhaustive: also check any "trusted by" strip, testimonial, statistic or award badge in the spec you use.

| slug | What to replace |
| :--- | :--- |
| `nike-premium-landing` | Nike brand throughout |
| `nexus-it-solutions` | FedEx, Amazon, McKesson, Pitney Bowes in the trusted-by strip |
| `taskora-saas-hero` | Amazon.com as a company in the dashboard table |
| `liquid-glass-agency` | Stripe, Vercel, Linear, Notion, Figma as partners |
| `pro-ai-deck` | Stripe, Vercel, Linear, Notion, Figma as partners |
| `stellar-ai` | Interscope and Spotify logos |
| `glassmorphism-agency-hero` | OpenAI in the logo cloud |
| `nexora-automation` | "Mercury Balance" card and a "GPT-5" badge |
| `transform-data` | "Powered by GPT-4o" label |
| `mindloop-landing` | ChatGPT named in the copy |
| `terra-geo-map` | Product Hunt "#1 Product of the Day" badge (a claim) |
| `veloce-finance` | App Store and Google Play badges; member-count statistics (claims) |
| `ai-designer-portfolio` | biography claim "former Apple designer" |

## Broken or unverified media

One plain HTTPS request per asset on 2026-11-14. `dead` = the origin refused or the object is gone (every Mux stream answered 403 "Not Authorized"; two signed URLs have expired). `unverified` = the request failed in a way that may be specific to the machine that ran the check. `repo copy` = a verified file in the source repository that `scripts/fetch_media.py` can fetch. Re-check with `scripts/check_assets.py` before relying on this table.

| slug | kind | state | HTTP | host | repo copy |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `3d-jack-portfolio` | img | dead | 404 | motionsites.ai | none |
| `acreage-farming` | img | dead | 404 | images.unsplash.com | none |
| `acreage-farming` | img | unverified | 401 | unsplash.com | none |
| `ai-automation-hero` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_1.mp4` |
| `ai-designer-agency` | video | dead | 403 | media.cleanshot.cloud | none |
| `ai-designer-agency` | HLS | dead | 403 | stream.mux.com | `assets/videos/AI_Designer_Agency_6.mp4` |
| `ai-designer-portfolio` | font | dead | 403 | assets.website-files.com | none |
| `ai-designer-portfolio` | font | dead | 403 | assets.website-files.com | none |
| `bionova-biotech` | HLS | dead | 403 | stream.mux.com | `assets/videos/Bionova_Biotech_0.mp4` |
| `bionova-biotech` | HLS | dead | 403 | stream.mux.com | `assets/videos/Bionova_Biotech_1.mp4` |
| `bionova-biotech` | HLS | dead | 403 | stream.mux.com | `assets/videos/Bionova_Biotech_2.mp4` |
| `clearinvoice-saas-hero` | HLS | dead | 403 | stream.mux.com | `assets/videos/ClearInvoice_SaaS_Hero_0.mp4` |
| `codenest-coding-platform` | HLS | dead | 403 | stream.mux.com | `assets/videos/CodeNest_Coding_Platform_0.mp4` |
| `dark-portfolio-hero` | HLS | dead | 403 | stream.mux.com | `assets/videos/Dark_Portfolio_Hero_0.mp4` |
| `datacore-saas-hero` | HLS | dead | 403 | stream.mux.com | `assets/videos/AI_Designer_Agency_6.mp4` |
| `datacore-saas-hero` | img | dead | 404 | customer-cbeadsgr09pnsezs.cloudflarestream.com | none |
| `digitwist-ai-builder` | HLS | dead | 403 | stream.mux.com | `assets/videos/Digitwist_AI_Builder_1.mp4` |
| `ecovolta-v2` | HLS | dead | 403 | stream.mux.com | none |
| `focus-ai` | HLS | dead | 403 | stream.mux.com | none |
| `glassmorphism-agency-hero` | HLS | dead | 404 | customer-cbeadsgr09pnsezs.cloudflarestream.com | none |
| `investor-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_0.mp4` |
| `investor-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_1.mp4` |
| `investor-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Dark_Portfolio_Hero_0.mp4` |
| `investor-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_3.mp4` |
| `investor-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_4.mp4` |
| `liquid-glass-agency` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_1.mp4` |
| `liquid-glass-agency` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_2.mp4` |
| `liquid-glass-agency` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_3.mp4` |
| `mindloop-landing` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_3.mp4` |
| `nexacore` | HLS | dead | 403 | stream.mux.com | none |
| `nike-premium-landing` | img | unverified | 403 | github.com | none |
| `nike-premium-landing` | video | dead | 403 | pikaso.cdnpk.net | none |
| `nike-premium-landing` | img | unverified | 403 | github.com | none |
| `nike-premium-landing` | video | dead | 403 | pikaso.cdnpk.net | none |
| `nova-space-systems` | video | dead | 403 | d8j0ntlcm91z4.cloudfront.net | none |
| `portfolio-cosmic` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_0.mp4` |
| `pro-ai-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_1.mp4` |
| `pro-ai-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Investor_Deck_1.mp4` |
| `pro-ai-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Digitwist_AI_Builder_1.mp4` |
| `pro-ai-deck` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_2.mp4` |
| `social-media-posts` | img | dead | 403 | media.cleanshot.cloud | none |
| `synapse-dark-hero` | HLS | dead | 403 | stream.mux.com | `assets/videos/Liquid_Glass_Agency_1.mp4` |
| `urban-jungle` | HLS | dead | 403 | stream.mux.com | none |
| `viktor-portfolio` | img | unverified | 000 | picsum.photos | none |
| `yacht-club` | embed | unverified | 401 | player.vimeo.com | none |
