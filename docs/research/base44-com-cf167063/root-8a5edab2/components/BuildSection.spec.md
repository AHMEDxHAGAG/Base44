# BuildSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/BuildSection.tsx`. Server component, no props.

References: `build-desktop.png`, `build-mobile.png`.

## Intro

Heading `What will\nyou build?` (allow a single line from 768). Style `clamp(40px,3.96vw,76px)`, line-height 1.05, tracking -.04em. Body: `Whatever you're imagining, you can\nuse vibe coding to build it on Base44.` Geist `clamp(16px,1.25vw,24px)`, line-height 1.25, max `min(45.9vw,882px)`.

Intro uses 20 px mobile gutters/top 50; from 768 uses 5.21vw gutters and 10.42vw top; from 1100 uses capped 90 px gutters and 120 px top.

## Cards

One column mobile/tablet, three columns from 1100, gap 25 px mobile / 3.12vw tablet / 21 px wide. Wide margin above cards is `min(4.4271vw,85px)` and bottom padding `min(6.0417vw,116px)`. At 1425 each card is about 461 × 393.

Cards: cream `#f9f7f4`, 10 px orange bottom border, no side/top border, mobile min-height `clamp(330px,91.67vw,436px)`, wide `clamp(360px,27.6vw,530px)`. Padding 30/33/38 mobile; `clamp(20px,1.5625vw,30px)` wide. Title Dazzed `clamp(28px,2.5vw,48px)`, line-height 1.08. Copy uses common Geist body formula. Dark CTAs use 10 px radius, height `clamp(40px,2.55vw,49px)`, horizontal padding `clamp(18px,1.46vw,28px)`.

Content:

- Apps: `Turn any idea into a fully functional app — with backend, auth, payments, and hosting already built in. No setup, no engineers, no waiting.` CTA `Build an app`.
- Websites: `Build a website for any need. AI-generated design, custom domain, built-in SEO tools — ready to go live from day one.` CTA `Build a website with AI`.
- AI agents: `Create a 24/7 agent that connects to your tools, takes real action, and works while you sleep. No integration headaches.` CTA `Create an AI agent`.

At 1100+ card hover changes cream to `#ff6a00` in 200 ms. CTA hover changes to `#433f3f`; label rolls vertically using a duplicated label track.
