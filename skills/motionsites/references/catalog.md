# Template catalog

84 templates. Each row points to `prompts/<slug>.md`, which holds the full build spec.

Columns:

- **What it builds**: written from the spec itself. Trust this over the template title; several titles do not match their content.
- **Stack / effects**: libraries and signature effects the spec names. React + Tailwind is implied everywhere.
- **Media**: third-party assets the spec hotlinks, as `kind live/total`, from a direct request on 2026-11-14. `none` means the design needs no external media. `HLS 0/1` means the video stream was dead on that date: see "Broken or unverified media" at the bottom and the media rules in SKILL.md.
- **Size**: length of the spec in thousands of characters; a rough proxy for how much detail it pins down.

## Contents

- Full landing pages: 19
- Hero sections: 60
- Components: 3
- Slide decks: 2
- Quick picks by look
- Broken or unverified media

## Full landing pages (multi-section)

| slug | What it builds | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- |
| `3d-jack-portfolio` | 3D-creator portfolio "Jack": hero, marquee, about, services, projects. Dark #0C0C0C, Kanit at heavy weights. | Vite, TS, Motion, lucide, marquee, scroll-driven, text reveal, gradient text | img 34/35 | 14k |
| `acreage-farming` | Agriculture brand site, 12 sections (video hero, stats bar, about, services, video break, portfolio, blog grid, CTA, footer). Warm cream + forest green, Playfair Display + DM Sans. | Tailwind v4 | MP4 1/1, img 13/15 | 11k |
| `ai-designer-agency` | AI web-design agency "VIRALMEDIA", 7 sections: fixed navbar, hero, scroll-reveal about text, 2x2 work grid, parallax video showcase, HLS video CTA, footer. Pure black, liquid glass, Barlow + Instrument Serif italic. | Motion, hls.js, liquid glass, scroll-driven | MP4 1/2, img 4/4, HLS 0/1 | 7k |
| `ai-designer-portfolio` | Creative-studio portfolio "V Vortex": hero, marquee, testimonial quote, pricing cards, projects, footer. White background with dark-teal ink (#051A24), PP Neue Montreal + PP Mondwest accent words. | Vite, TS, lucide, marquee | font 0/2 | 4k |
| `akor-security` | Security-systems landing "AKOR". Dark grey with vivid green primary, Sora, fade-up entrances. | - | MP4 2/2, img 4/4 | 5k |
| `e-commerce-website` | Health/wellness shop landing. Near-white, fully rounded (pill) radii, system fonts, shadcn/ui. No media needed. | Vite, TS, shadcn, lucide, marquee | none | 5k |
| `focus-ai` | Actually "Velorah", an electric RV/camper brand: 6-section landing. Pure black, Instrument Serif headings + Inter, HLS video sections. | TS, shadcn, hls.js, lucide, react-router, liquid glass | MP4 3/3, HLS 0/1 | 11k |
| `framelix-3d-studios` | Motion-studio landing "Framelix 3D": navbar, hero, marquee banner, shipping section. Pure black, Inter, pill radii, Framer Motion. | TS, Motion, marquee | MP4 2/2 | 3k |
| `guardnet` | Security/privacy brand "guardnet": hero, security, companies, benefits sections. Black, Futura/Readex Pro, blue + orange accents. | Vite, TS, lucide | font 1/1, MP4 3/3 | 9k |
| `liquid-glass-agency` | AI web-design agency landing, 9 sections: floating navbar, hero, how-it-works, alternating feature rows, feature grid, stats, testimonials, CTA + footer. Black, liquid glass, Instrument Serif italic + Barlow, BlurText word reveal. | Vite, shadcn, Motion, hls.js, lucide, react-router, liquid glass, text reveal | MP4 1/1, HLS 0/3, img 2/2 | 13k |
| `mindloop-landing` | Newsletter/content platform "Mindloop": navbar, hero, mission, solution, CTA, footer. Strict black-and-white monochrome, Inter + Instrument Serif italic accents, HLS video. | Vite, TS, shadcn, Motion, hls.js, lucide, liquid glass, scroll-driven, text reveal | MP4 3/3, HLS 0/1 | 7k |
| `neovision` | Futuristic 3-section landing: light hero (#FBFDFD) with video on the right half, dark About, Insights. System fonts. | Vite, TS, lucide | MP4 2/2 | 9k |
| `nexacore` | Enterprise-infrastructure landing "NexaCore": shrinking white navbar, video hero, trusted, freedom and precision sections. Mazzard H font, navy/lavender with purple #c86fff, HLS. | Vite, TS, hls.js, lucide, gradient text | font 2/2, MP4 1/1, img 7/7, HLS 0/1 | 14k |
| `nova-space-systems` | Aerospace landing "NOVA". Brutally minimal black/white, zero border radius, Space Grotesk only, shadcn/ui. | Vite, TS, shadcn, lucide | MP4 2/3 | 5k |
| `orbis-nft` | NFT landing "Orbis.Nft", 4 sections: hero, intro, collection grid, CTA. Dark space theme, Anton + Condiment script, liquid glass, video backgrounds. | Vite, TS, lucide, liquid glass | MP4 6/6 | 8k |
| `orbit-engineers` | Space-engineering consultancy: 3 full-screen heroes switched by buttons (not scroll) with crossfading videos. Dark blue-grey + cyan, Inter, Framer Motion. | Motion, lucide | MP4 3/3 | 6k |
| `portfolio-cosmic` | Dark portfolio page: loading screen, video hero with floating navbar, further sections. GSAP + Framer Motion + hls.js, Inter + Instrument Serif italic. | Vite, TS, Motion, GSAP, hls.js, react-router, marquee, scroll-driven | HLS 0/1 | 8k |
| `veloce-finance` | Fintech app "veloce", 4 sections. Deep navy #00041F with copper #B56939 and a custom brand gradient, Manrope, Framer Motion. | Vite, TS, Motion, lucide, scroll-driven, gradient text | MP4 4/4, img 2/2 | 8k |
| `viktor-portfolio` | Two-page architect portfolio. Black, Orbitron + Space Grotesk + JetBrains Mono, video hero with vignette, slide counter and next-project navigation. | Motion, lucide | MP4 2/2, img 0/1 | 3k |

## Hero sections (one viewport, sometimes plus a logo strip or one extra section)

| slug | What it builds | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- |
| `aethera-studio` | Cinematic studio hero over a looping video. Instrument Serif display + Inter. Headline "Beyond silence, we build the eternal." | Vite, TS, fade loop | MP4 1/1 | 3k |
| `ai-automation-hero` | AI/SaaS hero, content left-aligned and vertically centred over an HLS video. Dark purple-black #070612. | Motion, lucide, text reveal | HLS 0/1 | 3k |
| `apex-saas` | Dark SaaS hero in 3 parts: floating glass navbar, hero, social-proof block with background video. Purple-black (260 87% 3%), Geist Sans. | TS, lucide, liquid glass, marquee | MP4 1/1 | 5k |
| `asme` | Dark cinematic hero, full-screen video with liquid-glass UI. Headline "Built for the curious". | Vite, TS, lucide, liquid glass, fade loop | MP4 1/1 | 4k |
| `automation-machines` | Futuristic full-viewport hero with a Spline 3D scene behind the content. Black/white, React 19 + Tailwind v4 + Motion. | Vite, Tailwind v4, Motion, lucide, Spline, gradient text | 3D 1/1 | 7k |
| `bionova-biotech` | Biotech consulting hero "BIONOVA", exactly 100vh. White background, Poppins, soft-blue pill buttons, HLS video, blur fade-up entrances. | hls.js | HLS 0/3 | 4k |
| `bloom-ai` | AI floral-design platform "Bloom". Liquid-glass panels over a looping video. | lucide, liquid glass | MP4 1/1 | 4k |
| `bold-portfolio-hero` | Personal-portfolio hero on a red-orange vertical gradient (#fd2601 to #f37e1c). Massive uppercase Anton headline, floating navbar, brand strip. No media needed. | - | none | 3k |
| `buzzentic-agency` | Agency hero over a full-screen video with no overlay. Barlow + Instrument Serif italic accents, off-white pills, Tailwind v4. | Tailwind v4, liquid glass | MP4 1/1 | 2k |
| `clearinvoice-saas-hero` | Invoicing SaaS hero "ClearInvoice". Dark, HLS video at full opacity, Switzer + Geist, exact button recreation, social proof row. | Vite, Motion, hls.js, lucide, react-player | HLS 0/1 | 2k |
| `clubx-investors` | Private investor club "ClubX". Full-screen video hero, Inter + Instrument Serif. Headline "Finance. Freedom. Fellows." | - | MP4 1/1 | 3k |
| `codenest-coding-platform` | Coding-education hero "CodeNest". Dark, HLS video, content inside a liquid-glass card with gradient border. | hls.js, lucide, liquid glass | HLS 0/1 | 3k |
| `codercrest` | Single HeroSection.tsx component: 100vh pure black, three-line heading with grey gradient text and a green accent (#27F3A9). | TS, gradient text | MP4 2/2 | 4k |
| `crypto-wealth` | Actually "ContentFlow": two scroll-linked fullscreen sections over a fixed video that zooms with scroll progress. Inter, amber-to-blue gradient-border buttons, feature showcase cards. | Vite, TS, lucide, scroll-driven | MP4 2/2 | 11k |
| `dark-portfolio-hero` | Portfolio hero plus animated loading screen. Dark, Next.js 14, GSAP entrance, Framer Motion loader, Inter + Instrument Serif. | Next.js, TS, Motion, GSAP | HLS 0/1 | 6k |
| `datacore-booking` | Booking-app hero over an opaque full-screen video. Purple #7b39fc, Manrope/Cabin/Instrument Serif/Inter. Headline "Book your perfect stay instantly and hassle-free". | - | MP4 1/1 | 3k |
| `datacore-saas-hero` | "Linear-style" dark SaaS hero "Datacore". HLS video under a black/60 overlay, mobile hamburger menu, Manrope/Inter/Cabin/Instrument Serif. | hls.js, lucide | HLS 0/1, img 0/1 | 3k |
| `designpro-academy` | Design-education hero "DesignPro". Black with video background, pill nav container, two-column top section. | Vite, TS, Motion, lucide | MP4 1/1 | 3k |
| `digitwist-ai-builder` | AI website-builder hero. Dark, HLS video with decorative gradients, Motion animations. Headline "Design at the speed of thought". | Motion, hls.js, lucide, gradient text | HLS 0/1, img 1/1 | 6k |
| `ecovolta` | Renewable-energy hero "EcoVolta", h-screen with no scroll. Cream #F5F3EE over a fixed full-page video, Inter, Framer Motion. | Vite, TS, Motion, lucide, liquid glass, marquee | MP4 1/1, img 3/3 | 7k |
| `ecovolta-v2` | Full-screen HLS-video hero for an AI outbound-sales product (content does not match the title). Instrument Serif + Manrope + Instrument Sans, blue/yellow accents. | TS, Tailwind v4, hls.js, gradient text | HLS 0/1 | 4k |
| `evr-ventures` | Venture-firm hero. Pure black with video background, Geist + Gilda Display serif. | Motion, marquee | MP4 1/1 | 4k |
| `finlytic-ai-agent` | Fintech AI-agent hero. Black, video scaled to 120% with a blurred black pill behind the copy, purple #7b39fc accents. | - | MP4 1/1 | 3k |
| `glassmorphism-agency-hero` | Dark glassmorphism hero with purple/pink gradients (#FA93FA to #983AD6), HLS hero video, animated logo cloud. Tailwind v4, Motion. | Vite, TS, Tailwind v4, Motion, hls.js, lucide, react-player | HLS 0/1, img 2/2 | 3k |
| `grow-ai-talent-platform` | Dark hero + social-proof section. shadcn tokens (260 87% 3%), Geist, liquid glass, video with JS fade-in/out loop, logo marquee. | Vite, TS, shadcn, liquid glass, marquee, fade loop, gradient text | MP4 1/1 | 5k |
| `hr-saas-hero` | Minimal editorial hero for remote-team HR. White, vertically flipped video fading into white, Geist + Instrument Serif, 290px top padding. | Tailwind v4 | MP4 1/1 | 2k |
| `impressive-hero` | Full-screen video hero with liquid-glass navbar, character-by-character heading animation and bottom tagline pill. Helvetica Neue, no animation or icon libraries. | Vite, TS, Motion, liquid glass, text reveal | MP4 1/1 | 5k |
| `logoisum-video-agency` | Video-editing agency hero. Full video with no overlay, floating white navbar, Barlow + Instrument Serif italic. Shortest spec in the library. | - | MP4 1/1 | 2k |
| `mindloop` | Full-screen video hero, dark with white text, Instrument Serif. Headline "Focus in a Distracted World". | liquid glass | MP4 1/1 | 3k |
| `neuralyn` | Analytics-dashboard SaaS "Neuralyn". Pure black, Inter + Instrument Serif italic accent word, shadcn/ui, Framer Motion. | Vite, TS, shadcn, Motion, liquid glass, scroll-driven | MP4 1/1 | 5k |
| `new-era-automotive-hero` | Car-marketplace hero. Dark video with giant gradient-filled "NEW ERA" in Bebas Neue behind the content, Inter UI. | - | MP4 1/1 | 3k |
| `new-era-bold-hero` | Top-aligned hero over a video with dark-blue fallback (#21346e), big headline and custom CTA. | - | MP4 1/1 | 2k |
| `nexar` | Project-management dashboard UI floating over a fullscreen video: white pill header, 3-column grid of task cards with staggered fade-up. Instrument Serif display. | Vite, TS, lucide | MP4 1/1, img 4/4 | 8k |
| `nexora-automation` | White SaaS hero filling exactly 100vh: badge, headline, CTAs and a hand-coded dashboard preview (not an image). Instrument Serif + Inter, indigo accent. | shadcn, Motion, lucide | MP4 1/1 | 5k |
| `nexus-it-solutions` | IT-consulting hero, 100vh, video stretched with object-fill, trusted-by strip. Akshar + Inter. | TS | MP4 1/1 | 2k |
| `nickel-payments` | Payments hero with floating navbar. Warm off-white with orange primary, shadcn/ui. | TS, shadcn | MP4 1/1 | 3k |
| `nike-premium-landing` | Two-section interactive sneaker hero: GSAP bubble menu, cursor spotlight that reveals a video through an SVG mask, react-player. Tailwind v4, Manrope + Instrument Serif. Uses a real brand: rebrand before use. | TS, Tailwind v4, GSAP, react-player, cursor fx | img 0/2, MP4 0/2 | 18k |
| `orbit-web3` | Dark cinematic Web3 hero. Deep green-black (150 20% 5%) with warm off-white, Instrument Serif for everything. | lucide, marquee | MP4 1/1 | 3k |
| `planet-orbit` | Dark SaaS hero. Purple-black with green accent #87FB89, Geist Sans, liquid glass. | liquid glass, marquee | MP4 1/1 | 3k |
| `power-ai` | Dark full-screen video hero with navbar, headline, CTA and bottom logo marquee. Geist + General Sans. | liquid glass, marquee, gradient text | font 0/1, MP4 1/1 | 4k |
| `railroad-ai` | Full-screen video hero with a faint black/5 overlay and liquid glass. Headline "Focus in a Constantly Distracted World". | Vite, TS, shadcn, Motion, lucide, liquid glass, text reveal | MP4 1/1 | 4k |
| `skyelite-private-jets` | Private-jet hero over a bright video: dark-grey text, uppercase "PRIVATE JETS" label, two-line headline. | TS, lucide | MP4 1/1 | 2k |
| `slate` | Productivity SaaS "Slate". Fullscreen video, ultra-light Helvetica Neue (weight 200), liquid glass, GSAP SplitText heading animation. | Vite, TS, GSAP, lucide, liquid glass, text reveal | MP4 1/1 | 5k |
| `space-voyage` | Space-travel cinematic hero. Video background, liquid glass, Instrument Serif italic + Barlow, partners bar. | Vite, TS, Motion, lucide, liquid glass, text reveal | MP4 1/1 | 6k |
| `stellar-ai` | "Stellar.ai" hero. White, Inter, fade-in-up entrances and an overlay dialog. | lucide, gradient text | MP4 1/1 | 4k |
| `synapse-dark-hero` | Solid-black hero with blurred-glass navbar, row of glass "Integrated with" badges, video and a static logo row. Framer Motion. | Motion, hls.js, marquee | HLS 0/1 | 2k |
| `sync-ai` | White single-viewport SaaS hero (brand in the spec is "Stellar.ai"): video pushed below the hero copy, partner-logo bar pinned to the bottom. Inter + lucide only. | TS, lucide, liquid glass, gradient text | MP4 1/1 | 6k |
| `targo-logistics-hero` | Logistics hero "targo". Black + brand red #EE3F2C, bold uppercase Rubik, clipped-corner buttons, consultation card bottom-left. | lucide, liquid glass | MP4 1/1 | 2k |
| `taskly` | Task-management hero. White with blue glow, Fustat + Inter, strong liquid-glass navbar, glassy orb video blended with mix-blend-screen. | liquid glass | MP4 1/1 | 2k |
| `taskora-saas-hero` | Dark (#050505) SaaS hero "Taskora": video at 50% opacity fading into the background, floating pill glass navbar, dashboard UI, Instrument Serif italic accent word. | Motion | MP4 1/1 | 3k |
| `terra-geo-map` | Geo-mapping SaaS "Terra". Light, Inter, blue #2E7DF3, dotted selection-box SVG around one headline word, product video under the CTA. | lucide, gradient text | MP4 1/1 | 3k |
| `transform-data` | Data-product hero with a 115%-scaled video and a custom JavaScript fade loop. Schibsted Grotesk/Inter/Noto Sans/Fustat. | fade loop | MP4 1/1 | 4k |
| `urban-jungle` | Scroll-driven hero on a 500vh root: GSAP ScrollTrigger + ScrollToPlugin, hls.js, custom Dirtyline display font. Black, React 19 + Tailwind v4. | Vite, TS, Tailwind v4, GSAP, hls.js, lucide, react-router, marquee, scroll-driven, cursor fx | font 1/1, HLS 0/1 | 12k |
| `velorah` | Fullscreen video hero with glassmorphic navigation and cinematic serif type. shadcn/ui. Headline "Where dreams rise through the silence." | Vite, TS, shadcn, liquid glass | MP4 1/1 | 4k |
| `vitara` | Healthcare-AI hero. Video background under a white navbar, Inria Serif headings with very tight tracking. | Vite, TS, lucide, text reveal | MP4 1/1 | 4k |
| `wealth-video-hero` | Wealth-management hero. Black, video background, glass pill tag. Headline "Build Wealth That Lasts Generations". | - | MP4 1/1 | 2k |
| `web3-eos-hero` | Web3 hero. Pure black, video under a 50% overlay, General Sans, waitlist pill button. | - | MP4 1/1 | 3k |
| `weblex-dark-hero` | Dark website-builder hero: transparent navbar, bottom-aligned content, video with requestAnimationFrame fade loop, green accent. | TS, lucide, fade loop | MP4 1/1 | 3k |
| `xportfolio-hero` | Brand-design agency "Brandly", one viewport: fullscreen video, Inter + Anton. Headline "BUILDING / BRANDS THAT / RESONATE". | lucide | MP4 1/1 | 3k |
| `yacht-club` | Luxury yacht-club experience: GSAP staggered menu, Framer Motion fleet video overlay, liquid-distortion cursor trail. React 19, Tailwind v4, OKLCH tokens, Instrument Serif. | Vite, TS, Tailwind v4, Motion, GSAP, cursor fx | embed 0/1, MP4 3/3 | 8k |

## Components

| slug | What it builds | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- |
| `loader-animation` | Fullscreen loading screen: rotating words, 000-to-100 counter, gradient progress bar, timed hand-off to the page. Framer Motion, Instrument Serif italic. No media needed. | Next.js, TS, Motion | none | 3k |
| `price-calculator` | Project-estimation calculator section: radios, slider, checkboxes and live pricing logic against agency/freelancer comparison cards. Dark, coral #FF5656, shadcn Slider. No media needed. | shadcn | none | 3k |
| `social-media-posts` | 3x2 grid of six 384px social-post cards over a full-page background image. Seven Google fonts, liquid glass. A set of post designs rather than a page. | TS, lucide, liquid glass, gradient text | img 0/1, MP4 6/6 | 12k |

## Slide decks

| slug | What it builds | Stack / effects | Media | Size |
| :--- | :--- | :--- | :--- | :--- |
| `investor-deck` | 5-slide investor presentation web app. Black, Aeonik, Mux HLS video backgrounds, Motion slide transitions. | Tailwind v4, Motion, hls.js | HLS 0/5 | 11k |
| `pro-ai-deck` | 7-slide studio pitch deck with swipe/scroll/keyboard navigation and animated transitions. Motion, hls.js, Instrument Serif. | Vite, TS, Motion, hls.js, lucide, liquid glass, text reveal | MP4 5/5, HLS 0/4 | 20k |

## Quick picks by look

Starting points, not an exhaustive index. Check the row before committing.

- **Liquid glass (the library's signature look)**, heroes: `apex-saas`, `asme`, `bloom-ai`, `buzzentic-agency`, `codenest-coding-platform`, `ecovolta`, `grow-ai-talent-platform`, `impressive-hero`, `mindloop`, `neuralyn`, `planet-orbit`, `power-ai`, `railroad-ai`, `slate`, `space-voyage`, `sync-ai`, `targo-logistics-hero`, `taskly`, `velorah`
- **Liquid glass, full pages**: `ai-designer-agency`, `focus-ai`, `liquid-glass-agency`, `mindloop-landing`, `orbis-nft`
- **Light themes**: `acreage-farming`, `ai-designer-portfolio`, `bionova-biotech`, `e-commerce-website`, `ecovolta`, `hr-saas-hero`, `neovision`, `nexora-automation`, `nickel-payments`, `skyelite-private-jets`, `stellar-ai`, `sync-ai`, `taskly`, `terra-geo-map`
- **Sans headline with one italic serif accent word**: `taskora-saas-hero`, `neuralyn`, `mindloop-landing`, `hr-saas-hero`, `logoisum-video-agency`, `buzzentic-agency`, `datacore-booking`, `nexora-automation`
- **Loud display type (Anton, Bebas Neue, Rubik, Kanit)**: `bold-portfolio-hero`, `new-era-automotive-hero`, `xportfolio-hero`, `orbis-nft`, `targo-logistics-hero`, `3d-jack-portfolio`
- **Product UI or dashboard inside the hero**: `nexora-automation`, `taskora-saas-hero`, `nexar`, `terra-geo-map`, `sync-ai`
- **Stark minimal / monochrome**: `nova-space-systems`, `mindloop-landing`, `codercrest`, `evr-ventures`
- **No external media needed**: `bold-portfolio-hero`, `e-commerce-website`, `loader-animation`, `price-calculator`
- **Scroll-driven or cursor-driven interaction**: `3d-jack-portfolio`, `ai-designer-agency`, `crypto-wealth`, `mindloop-landing`, `neuralyn`, `nike-premium-landing`, `portfolio-cosmic`, `urban-jungle`, `veloce-finance`, `yacht-club`
- **GSAP**: `dark-portfolio-hero`, `nike-premium-landing`, `portfolio-cosmic`, `slate`, `urban-jungle`, `yacht-club`
- **shadcn/ui tokens**: `e-commerce-website`, `focus-ai`, `grow-ai-talent-platform`, `liquid-glass-agency`, `mindloop-landing`, `neuralyn`, `nexora-automation`, `nickel-payments`, `nova-space-systems`, `price-calculator`, `railroad-ai`, `velorah`
- **Hero with all videos live on 2026-11-14** (safe donors when another template's video is dead): `aethera-studio`, `apex-saas`, `asme`, `bloom-ai`, `buzzentic-agency`, `clubx-investors`, `codercrest`, `crypto-wealth`, `datacore-booking`, `designpro-academy`, `ecovolta`, `evr-ventures`, `finlytic-ai-agent`, `grow-ai-talent-platform`, `hr-saas-hero`, `impressive-hero`, `logoisum-video-agency`, `mindloop`, `neuralyn`, `new-era-automotive-hero`, `new-era-bold-hero`, `nexar`, `nexora-automation`, `nexus-it-solutions`, `nickel-payments`, `orbit-web3`, `planet-orbit`, `power-ai`, `railroad-ai`, `skyelite-private-jets`, `slate`, `space-voyage`, `stellar-ai`, `sync-ai`, `targo-logistics-hero`, `taskly`, `taskora-saas-hero`, `terra-geo-map`, `transform-data`, `velorah`, `vitara`, `wealth-video-hero`, `web3-eos-hero`, `weblex-dark-hero`, `xportfolio-hero`, `yacht-club`

## Broken or unverified media

Result of one plain HTTPS request per asset on 2026-11-14. `dead` = the origin refused or the object is gone (all Mux streams answered 403 "Not Authorized"; two signed URLs have expired). `unverified` = the request failed in a way that may be specific to the machine that ran the check. Re-check with `scripts/check_assets.py` before relying on either list.

| slug | kind | state | HTTP | host |
| :--- | :--- | :--- | :--- | :--- |
| `3d-jack-portfolio` | img | dead | 404 | motionsites.ai |
| `acreage-farming` | img | dead | 404 | images.unsplash.com |
| `acreage-farming` | img | unverified | 401 | unsplash.com |
| `ai-automation-hero` | HLS | dead | 403 | stream.mux.com |
| `ai-designer-agency` | MP4 | dead | 403 | media.cleanshot.cloud |
| `ai-designer-agency` | HLS | dead | 403 | stream.mux.com |
| `ai-designer-portfolio` | font x2 | dead | 403 | assets.website-files.com |
| `bionova-biotech` | HLS x3 | dead | 403 | stream.mux.com |
| `clearinvoice-saas-hero` | HLS | dead | 403 | stream.mux.com |
| `codenest-coding-platform` | HLS | dead | 403 | stream.mux.com |
| `dark-portfolio-hero` | HLS | dead | 403 | stream.mux.com |
| `datacore-saas-hero` | HLS | dead | 403 | stream.mux.com |
| `datacore-saas-hero` | img | dead | 404 | customer-cbeadsgr09pnsezs.cloudflarestream.com |
| `digitwist-ai-builder` | HLS | dead | 403 | stream.mux.com |
| `ecovolta-v2` | HLS | dead | 403 | stream.mux.com |
| `focus-ai` | HLS | dead | 403 | stream.mux.com |
| `glassmorphism-agency-hero` | HLS | dead | 404 | customer-cbeadsgr09pnsezs.cloudflarestream.com |
| `investor-deck` | HLS x5 | dead | 403 | stream.mux.com |
| `liquid-glass-agency` | HLS x3 | dead | 403 | stream.mux.com |
| `mindloop-landing` | HLS | dead | 403 | stream.mux.com |
| `nexacore` | HLS | dead | 403 | stream.mux.com |
| `nike-premium-landing` | img x2 | unverified | 403 | github.com |
| `nike-premium-landing` | MP4 x2 | dead | 403 | pikaso.cdnpk.net |
| `nova-space-systems` | MP4 | dead | 403 | d8j0ntlcm91z4.cloudfront.net |
| `portfolio-cosmic` | HLS | dead | 403 | stream.mux.com |
| `power-ai` | font | unverified | ERR | api.fontshare.com |
| `pro-ai-deck` | HLS x4 | dead | 403 | stream.mux.com |
| `social-media-posts` | img | dead | 403 | media.cleanshot.cloud |
| `synapse-dark-hero` | HLS | dead | 403 | stream.mux.com |
| `urban-jungle` | HLS | dead | 403 | stream.mux.com |
| `viktor-portfolio` | img | unverified | 000 | picsum.photos |
| `yacht-club` | embed | unverified | 401 | player.vimeo.com |
