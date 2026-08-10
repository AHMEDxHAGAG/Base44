# GrowSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/GrowSection.tsx`. Server component, no props.

References: `grow-desktop.png`, `grow-mobile.png`.

## Intro

Surface is cream below 1100 and warm-gray `#eeeceb` at 1100+. Side gutters are 20 px mobile, 5.21vw tablet, and capped 90 px wide. Vertical intro pad is 50 px mobile, 10.42vw tablet, and capped 120 px wide. At 1425 the intro is about 312 px high.

Eyebrow heading: `Built-in marketing tools to grow after you ship`, Dazzed 500, `clamp(20px,1.667vw,32px)`, line-height 1.4. Main statement: `Base44 doesn't stop when you publish your creation. You can also grow your business right from within the platform.`, Dazzed 600, about `clamp(30px,2.5vw,48px)`, line-height 1.08, max about 800 px.

## Stage and cards

Stage is relative, about 604 px high wide. Responsive `<picture>`: `sections/grow/grow-bg.webp` at 1100+, `grow-bg-tablet.webp` below. Image fills with object-cover. Three cream cards sit over it; wide container has about 20 px outer inset and 20 px gaps, each about 435 × 456 at 1425. Below 1100 cards stack vertically over/with the tall tablet background, matching the mobile reference.

Cards are links with comfortable 30–40 px padding, Dazzed titles and Geist copy. Preserve content exactly:

- SEO/GEO dashboard — `Get found where people are actually looking – on Google, ChatGPT, Gemini and more. Run a scan, get a prioritized fix list, and let AI apply the fixes.`
- Social presence — `Base44 reads what you build, picks the right social platforms, and generates ready-to-post content – in your voice.`
- App analytics — `Track traffic, sales, customize your dashboard, and measure the actions that matter most in your Base44 app.`

Each card has a small functional-style line icon and a circled arrow. Hover may shift the arrow and subtly warm the card; do not introduce new colors or depth.
