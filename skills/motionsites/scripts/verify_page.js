#!/usr/bin/env node
/*
Load a built page in a real browser and report the problems these designs are prone to.

Usage:
    node scripts/verify_page.js <url> [out-dir]

    url      a page served over http(s), e.g. http://localhost:5173 (serve single
             files with `python -m http.server` rather than opening file://)
    out-dir  where screenshots go (default: ./verify-out)

Needs Playwright with a Chromium it can launch (`require('playwright')`).
It does not install anything. Without Playwright it exits with code 2.

What it does, at 1440x900, 1280x620 (short) and 390x844 (phone):
  - scrolls through the page first, so in-view reveals and lazy videos have run
  - saves a screenshot per viewport, plus a full-page one at desktop size
  - checks: horizontal overflow, console errors, failed requests, broken images,
    fonts that failed to load, videos that are not playing, glass elements whose
    backdrop blur is missing, and glass elements sitting inside a filtered ancestor
Then two extra passes at desktop size: reduced motion on, and all video requests
blocked, each with a screenshot so the fallbacks can be looked at.

Exit code: 0 when the checks ran (read the WARN lines), 2 if they could not run.
*/
const path = require('path');
const fs = require('fs');

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'short', width: 1280, height: 620 },
  { name: 'phone', width: 390, height: 844 },
];
const MEDIA = /\.(mp4|webm|m3u8|mov)(\?|$)/i;

async function settle(page) {
  await page.waitForTimeout(2500);
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(window.innerHeight * 0.8));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 180));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 1500));
  });
}

function inspect() {
  const out = {};
  const root = document.documentElement;
  out.overflow = root.scrollWidth - window.innerWidth;
  out.h1 = document.querySelectorAll('h1').length;
  out.brokenImages = [...document.images]
    .filter((i) => i.complete && i.naturalWidth === 0 && i.currentSrc)
    .map((i) => i.currentSrc);
  out.fontsFailed = [...document.fonts].filter((f) => f.status === 'error').map((f) => f.family);
  out.fontsLoaded = [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family))];
  out.videos = [...document.querySelectorAll('video')].map((v) => {
    const r = v.getBoundingClientRect();
    return {
      src: (v.currentSrc || v.src || '').split('/').pop().slice(0, 60),
      playing: !v.paused && v.currentTime > 0,
      everPlayed: v.played.length > 0,
      broken: Boolean(v.error) || v.networkState === 3,
      rendered: r.width > 0 && getComputedStyle(v).display !== 'none',
      inView: r.bottom > 0 && r.top < window.innerHeight,
    };
  });
  const glass = [...document.querySelectorAll('[class*="liquid-glass"], [class*="backdrop-blur"]')];
  out.glassCount = glass.length;
  out.glassNoBlur = 0;
  out.glassInFilter = 0;
  for (const el of glass) {
    const cs = getComputedStyle(el);
    const bf = cs.backdropFilter || cs.webkitBackdropFilter || 'none';
    if (bf === 'none') out.glassNoBlur += 1;
    for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
      if (getComputedStyle(p).filter !== 'none') { out.glassInFilter += 1; break; }
    }
  }
  return out;
}

async function pass(browser, url, vp, opts, outDir) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    reducedMotion: opts.reducedMotion ? 'reduce' : 'no-preference',
  });
  const page = await context.newPage();
  const errors = [];
  const failed = [];
  page.on('console', (m) => {
    if (m.type() !== 'error') return;
    const text = m.text();
    if (opts.blockVideo && /Failed to load resource/.test(text)) return;   // caused by this pass itself
    errors.push(text.slice(0, 200));
  });
  page.on('pageerror', (e) => errors.push(String(e).slice(0, 200)));
  page.on('requestfailed', (r) => {
    const why = (r.failure() || {}).errorText || '';
    // Chromium aborts and re-requests media with a Range header; that is normal.
    if (MEDIA.test(r.url()) && /ERR_ABORTED/.test(why)) return;
    if (opts.blockVideo && MEDIA.test(r.url())) return;
    failed.push(`${why} ${r.url().slice(0, 120)}`);
  });
  if (opts.blockVideo) await context.route((u) => MEDIA.test(u.toString()), (r) => r.abort());
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await settle(page);
  const info = await page.evaluate(inspect);
  const shot = path.join(outDir, `${opts.label || vp.name}.png`);
  await page.screenshot({ path: shot });
  if (opts.fullPage) await page.screenshot({ path: path.join(outDir, `${vp.name}-full.png`), fullPage: true });
  await context.close();
  return { info, errors, failed, shot };
}

function report(title, r, opts = {}) {
  const lines = [];
  const warn = (t) => lines.push(`  WARN  ${t}`);
  const ok = (t) => lines.push(`  ok    ${t}`);
  const { info } = r;
  if (info.overflow > 1) warn(`page is ${info.overflow}px wider than the viewport (horizontal scroll)`);
  else ok('no horizontal overflow');
  if (r.errors.length) warn(`${r.errors.length} console error(s): ${r.errors.slice(0, 3).join(' | ')}`);
  else ok('console clean');
  if (r.failed.length) warn(`${r.failed.length} failed request(s): ${r.failed.slice(0, 3).join(' | ')}`);
  if (info.brokenImages.length) warn(`${info.brokenImages.length} broken image(s): ${info.brokenImages.slice(0, 3).join(', ')}`);
  if (info.fontsFailed.length) warn(`fonts failed to load: ${[...new Set(info.fontsFailed)].join(', ')}`);
  else ok(`fonts loaded: ${info.fontsLoaded.join(', ') || '(none declared via @font-face)'}`);
  if (info.h1 !== 1) warn(`${info.h1} <h1> elements (expected exactly 1)`);
  const vids = info.videos.filter((v) => v.rendered);
  if (!opts.blockVideo && !opts.reducedMotion) {
    // Videos on screen must be playing. Videos further down may be paused or lazy, so only
    // a load failure counts against them.
    const stuck = vids.filter((v) => (v.inView ? !v.playing : v.broken));
    if (stuck.length) warn(`${stuck.length} of ${vids.length} video(s) not working: ${stuck.map((v) => v.src + (v.broken ? ' [failed to load]' : ' [on screen but not playing]')).join(', ')}`);
    else if (vids.length) ok(`${vids.length} video(s): those on screen are playing, none failed to load`);
  } else if (opts.reducedMotion) {
    const moving = vids.filter((v) => v.playing).length;
    if (moving) warn(`${moving} video(s) still playing with reduced motion on`);
    else ok('no video playing with reduced motion on');
  }
  if (info.glassCount) {
    if (info.glassNoBlur) warn(`${info.glassNoBlur} of ${info.glassCount} glass element(s) compute backdrop-filter: none (see patterns.md section 4)`);
    else ok(`${info.glassCount} glass element(s) have a backdrop blur`);
    if (info.glassInFilter) warn(`${info.glassInFilter} glass element(s) sit inside an ancestor with a CSS filter, which stops them blurring the page behind (patterns.md section 9)`);
  }
  console.log(`\n${title}  ->  ${r.shot}`);
  console.log(lines.join('\n'));
}

(async () => {
  const [url, outArg] = process.argv.slice(2);
  if (!url || !/^https?:\/\//.test(url)) {
    console.log('Usage: node scripts/verify_page.js <http(s) url> [out-dir]');
    process.exit(2);
  }
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch (e) {
    console.log('Playwright is not available here, so the page cannot be checked automatically. ' +
      'Say so in your closing note instead of implying it was verified.');
    process.exit(2);
  }
  const outDir = path.resolve(outArg || 'verify-out');
  fs.mkdirSync(outDir, { recursive: true });
  let browser;
  try {
    browser = await chromium.launch();
  } catch (e) {
    console.log(`Could not launch Chromium: ${String(e).split('\n')[0]}`);
    process.exit(2);
  }
  try {
    for (const vp of VIEWPORTS) {
      const r = await pass(browser, url, vp, { fullPage: vp.name === 'desktop' }, outDir);
      report(`${vp.name} ${vp.width}x${vp.height}`, r);
    }
    const rm = await pass(browser, url, VIEWPORTS[0], { reducedMotion: true, label: 'reduced-motion' }, outDir);
    report('reduced motion', rm, { reducedMotion: true });
    const bv = await pass(browser, url, VIEWPORTS[0], { blockVideo: true, label: 'video-blocked' }, outDir);
    report('video requests blocked', bv, { blockVideo: true });
    console.log(`\nScreenshots are in ${outDir}. Look at them: text over bright footage, cut-off sections ` +
      'on the short viewport and the two fallback states are judged by eye, not by this script.');
  } catch (e) {
    console.log(`Could not check ${url}: ${String(e).split('\n')[0]}`);
    console.log('Is the page being served at that address?');
    await browser.close();
    process.exit(2);
  }
  await browser.close();
  process.exit(0);
})();
