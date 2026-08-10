# StackSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/StackSection.tsx`. Server component, no props.

References: `stack-desktop.png`, `stack-mobile.png`.

## Content

Heading: `The whole stack.\nNo setup slowdown.`

Body: `Ship something real with vibe coding — without touching a server, wiring up a payment provider, or configuring a database. It's all already there.`

Links in order: Backend and storage, built in; One-click integrations; Stay on brand with custom domain; Easily keep track of analytics; Get paid directly through Base44; Enterprise-grade security. Preserve the inspected source destinations where available and add a circled-right-arrow icon.

## Layout

- Cream/white-neutral surface, max width 1920.
- Mobile: 20 px gutters, 16 px top/30 px bottom, 50 px gap. Stack heading/copy/image then link list. Collage is local `sections/stack/collage.webp`, natural 1060 × 496.
- Tablet: 40 px gutters and 80 px vertical padding; major blocks separated by about 120 px. Heading is about 60/64 px; body 22/29.9 px; image 530 × 248 at 768.
- Wide (1100+): minimum height `min(58.33vw,1120px)`, horizontal layout, side gutter `min(4.6875vw,90px)`, gap `min(4.375vw,84px)`. At 1425: left column 517 px, right 697 px; image 393 × 184.
- Heading uses the common Dazzed display formula. Body uses Geist common body formula. Link labels use Dazzed roughly `clamp(26px,2.5vw,48px)` and 2 px horizontal rules; desktop rows are 52 px high with 20 px gaps.
- On pointer hover, arrow shifts right 4–6 px in 200 ms; label remains readable with no layout shift.
