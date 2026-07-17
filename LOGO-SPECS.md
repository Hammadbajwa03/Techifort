# Techifort — Logo Asset Specs (for Graphic Designer)

**Project:** Techifort website  
**Date:** July 2026  
**Contact use:** Export assets for web (navbar, footer, hero, favicon)

---

## Brand mark currently in use

| File on site | Current size | Notes |
|--------------|--------------|--------|
| `techifort-mark.png` | 604 × 604 px | Primary mark used across the site |
| `favicon-32.png` | 32 × 32 px | Browser tab icon |
| `favicon.svg` | 32 × 32 viewBox | Placeholder “Tf” — replace with real mark if possible |
| `techifort-logo.png` | 379 × 506 px | **Not used** on the live site yet |
| `techifort-logo@2x.png` | 758 × 1012 px | **Not used** on the live site yet |

---

## Where the logo appears & display sizes

All sizes below are **on-screen (CSS)** sizes. For Retina/HiDPI screens, export at **2×–3×** those values (see Recommended Exports).

| # | Placement | Display size | Description |
|---|-----------|--------------|-------------|
| 1 | **Navbar** (all pages) | **40 × 40 px** (mobile) / **44 × 44 px** (tablet+) | Square brand mark only; wordmark “Techifort” is text beside it |
| 2 | **Footer** | Same as navbar — **40 × 40** / **44 × 44** | Same mark component |
| 3 | **Page intro splash** (site load) | **112 × 112 px** (mobile) / **128 × 128 px** (tablet+) | Large centered mark |
| 4 | **Homepage hero — core orb** | Mark roughly **52–92 px** (scales with viewport) | Mark inside a circular glowing core (~72–128 px circle) |
| 5 | **Favicon** (browser tab) | **32 × 32 px** | Small icon |
| 6 | **Apple touch / app icon** | Target **180 × 180 px** | Currently falls back to the main mark |

---

## Recommended exports (please deliver these)

Please export **transparent PNG** (and **SVG** for the mark if available). Prefer square crop for the mark, centered, with a little padding so it doesn’t clip.

### A) Primary brand mark (required)

| Asset name | Size | Format | Purpose |
|------------|------|--------|---------|
| `techifort-mark.svg` | Vector (square artboard) | SVG | Best quality — scales everywhere |
| `techifort-mark.png` | **1024 × 1024 px** | PNG-24, transparent | Main web mark (replaces current 604×604) |
| `techifort-mark-512.png` | **512 × 512 px** | PNG-24, transparent | Fallback / lighter weight |

### B) Favicons (required)

| Asset name | Size | Format | Purpose |
|------------|------|--------|---------|
| `favicon-32.png` | **32 × 32 px** | PNG | Browser tab |
| `favicon-48.png` | **48 × 48 px** | PNG | Optional sharper tabs |
| `apple-touch-icon.png` | **180 × 180 px** | PNG | iOS / Apple home screen |
| `favicon.ico` | Multi: 16, 32, 48 | ICO | Optional legacy browsers |

### C) Full logo / wordmark (optional — not wired yet)

If you also design a horizontal lockup (icon + “Techifort” wordmark as one image):

| Asset name | Suggested size | Format | Notes |
|------------|----------------|--------|-------|
| `techifort-logo-horizontal.svg` | Vector | SVG | Preferred |
| `techifort-logo-horizontal.png` | Width **1200 px** (height proportional) | PNG transparent | 2× web use |
| `techifort-logo-horizontal@2x.png` | Width **2400 px** | PNG transparent | Retina |

---

## Quick checklist for delivery

- [ ] Square mark at **1024 × 1024** PNG (transparent)
- [ ] Same mark as **SVG** (if possible)
- [ ] Favicon **32 × 32** PNG
- [ ] Apple icon **180 × 180** PNG
- [ ] Optional: horizontal full logo SVG/PNG
- [ ] Keep safe margin inside the square (mark not touching edges)
- [ ] No baked-in drop shadows if possible (site adds glow in CSS)
- [ ] Works on **dark** backgrounds (hero/nav over dark) and **light** backgrounds (footer/scrolled nav)

---

## Color context (site)

- Brand blue: `#2563EB`
- Deep blue: `#1E3A8A`
- Light blue accent: `#60A5FA`
- Dark background (hero): `#0B1120`

Mark should remain clear on both dark and light UI.

---

## Summary for designer (one line)

**Deliver one sharp square mark (1024×1024 PNG + SVG) plus 32×32 and 180×180 favicons; largest UI use is ~128px, navbar is ~44px.**
