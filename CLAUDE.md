# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A static, no-build landing page for **loofahvn.com** — a B2B site for WINVN INT Co., LTD selling private-label natural loofah products to Amazon sellers and eco retailers. There is no framework, no bundler, no package manager, and no test suite. Changes are made directly to the three source files.

## Architecture

Three files do everything:

| File | Role |
|------|------|
| `index.html` | Single-page layout — all sections (hero, trust bars, products, how-it-works, RFQ form, footer) |
| `styles.css` | All styling — custom properties for brand colors/typography, mobile-first responsive |
| `app.js` | All interactivity — IIFE, no dependencies, vanilla JS only |
| `i18n.js` | EN ↔ VI language toggle — text-node swap via a normalized-English → Vietnamese dictionary |

Both `app.js` and `i18n.js` are loaded as plain `<script>` tags at the bottom of `index.html`. They are IIFEs with no module system.

**Field Journal (blog)**: `blog.html` (listing) + `article.html` (detail, `?slug=`) + `blog.js` + `blog.css`. `blog.js` fetches published articles from the loofahvn CRM public API (`GET {apiBase}/api/v1/public/articles?workspace=...`, configured via `window.LOOFAH_BLOG_CONFIG`); when unconfigured or unreachable it renders the embedded `SEED` entries (mirrors `src/scripts/seed-articles.ts` in the loofahvn repo). Blog pages load `blog.js` + `i18n.js` but NOT `app.js` (its menu/carousel code assumes index.html DOM). `serve.json` disables `npx serve` clean-URLs so `article.html?slug=` keeps its query string locally.

## Key Patterns

**i18n**: `i18n.js` snapshots English text from the DOM on load, then swaps fragments to Vietnamese using a hardcoded `DICT` object. Matching is whitespace- and quote-normalized. When adding new visible text in `index.html`, add the corresponding EN→VI entry to `DICT` in `i18n.js`.

**Shipment carousel** (`app.js`): Reads slide count and viewport width at init. On resize the visible count (`1` mobile / `3` desktop) is set once at load — it does not re-evaluate on resize. `goTo()` calculates `offsetWidth + 16px gap` from the first slide.

**RFQ form**: Purely client-side — submit hides the form and shows `#rfqSuccess`. No backend. Wire up a real endpoint when one exists.

**Smooth scroll**: Custom eased scroll (`easeInOutCubic`) that accounts for sticky header height + 14px buffer. `behavior:'instant'` is intentional to prevent the browser's own smooth-scroll from fighting the JS animation.

## Developing

Open `index.html` directly in a browser, or use any static file server:

```
npx serve .
# or
python -m http.server 8080
```

No build step. No `npm install`. Edit → refresh.

## Brand Constants

- Primary green: `#3f6b4d`  
- Accent amber: `#e8a23d`  
- Domain: `https://loofahvn.com/`  
- Contact: `henry.nguyen@loofahvn.com`

## Asset Locations

- Product photos: `products/` — named by SKU type (e.g. `rect-dish.jpg`, `bath-glove.jpg`)
- Hero/proof/shipment images: `images/` — all `.webp` except the logo (`.jpg`/`.png`)
- Shipment carousel images: `images/shipment-1.webp` … `shipment-6.webp`
