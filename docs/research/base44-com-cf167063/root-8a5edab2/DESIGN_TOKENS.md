# Design tokens

## Color

| Token | Value | Use |
| --- | --- | --- |
| ink | `#1e1e24` | display and body foreground |
| near-black | `#252525` | dark controls and footer text |
| button | `#312f2f` | primary button fill |
| button-hover | `#433f3f` | desktop CTA hover |
| cream | `#f9f7f4` | page background, cards |
| warm-gray | `#eeeceb` | split section, blue-panel display text |
| metric-gray | `#e2ded7` | testimonial metric blocks |
| border | `#d9d5ce` | separators and prompt framing |
| muted | `#6d6a67` | secondary labels |
| blue | `#3950e6` | design/sendoff panels and Superagents link |
| orange | `#ff6a00` | brand disc, card hover, pricing |
| action-orange | `#ff773c` | prompt send control |
| white | `#ffffff` | surfaces and inverse text |

The hero dot grid is a 13 × 13 px tile with one `1.5px` `#d8d7d6` square at the tile origin. Blue imagery uses `grunge-cover.webp`, centered/no-repeat, sized `max(100%, 2126px)`, opacity `.55`, `mix-blend-mode: overlay`; the design and sendoff instances are rotated 180 degrees.

## Typography

- Display: Dazzed, local weights 400/500/600. Large headings use weight 600 and tracking near `-0.04em`.
- Body/UI: Geist variable, weight 100–900. Most copy is weight 400; controls use 500.
- Hero at 1425 px: 92.77/97.41 px, weight 600, tracking `-0.04em`.
- Section display formula: `clamp(40px, 3.96vw, 76px)`, line-height `1.05`, tracking `-0.04em`.
- Card display formula: `clamp(28px, 2.5vw, 48px)`, line-height `1.08`, tracking `-0.0208em`.
- Body formula: `clamp(16px, 1.25vw, 24px)`, line-height `1.25`, tracking `-0.01em`.
- FAQ answer: `clamp(16px, .9375vw, 18px)`, line-height `1.44`.

## Geometry and motion

- Breakpoints: 768 px (tablet), 1100 px (wide layout), 1431 px (desktop primary navigation).
- Common desktop section vertical pad: `min(6.25vw, 120px)`; 89 px at 1425.
- Button radius: 10 px for section CTAs, 6 px for header CTA, 8 px prompt.
- Header background transition: 300 ms; becomes white when scrollY is greater than 20.
- Card/CTA hover: 200 ms ease-out.
- FAQ height: 400 ms cubic-bezier(.22, 1, .36, 1); copy opacity 300 ms ease-out.
- Hero image reveal: clip-path 360 ms cubic-bezier(.22, 1, .36, 1), staggered by 50 ms.
- Respect `prefers-reduced-motion` by disabling nonessential transitions and autoplay.
