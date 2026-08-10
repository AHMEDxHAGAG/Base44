# HeroSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/HeroSection.tsx`. Client component, no props.

References: `hero-desktop.png`, `hero-mobile.png`, and the three full-page reference captures.

## Surface and type

- Minimum height is one viewport: 900 px in the 1425 × 900 capture, about 866 px at 375 × 844.
- Full section uses the 13 px dotted background token on `#f9f7f4`, clipped horizontally.
- Desktop content top padding is `9.375vw` and bottom `4.1667vw`; max width 1920. Mobile clears the 54 px header and uses compact top padding.
- H1: `Every builder needs a base`, centered, one line on desktop. Dazzed 600, `clamp(46px, 6.51vw, 125px)`, line-height 1.05, tracking -.04em. At 1425 it is 92.77/97.41 px. Mobile wraps to three centered lines.
- Subcopy: `Build your own apps, websites, products and AI agents on Base44 using your\nown words. Get ahead — and make sure it stays that way.` Geist 400, `clamp(17px,1.46vw,28px)`, desktop 20.8/28.9 px, centered, max about 719 px.

## Prompt shell

Centered white rounded rectangle, desktop width `min(38.5417vw,740px)` (549 px at 1425) and about 151 px high; mobile fills available width. The body is a textarea-like visual field and the bottom row contains: plus icon with `aria-label="More options"`, Build disclosure, voice button, and 40 px square orange send button. Use original sample prompt text; rotate among:

- `An admin dashboard to manage my customers...`
- `A reporting dashboard with charts for my business...`
- `A gaming platform with leaderboards and tournaments...`
- `An online store for my handmade goods...`

## Tabs and stage

Tabs appear about 45 px below the prompt, centered, Dazzed 14/21 weight 600: Apps, Websites, Games, Tools. The active label is bracketed (`[Websites]` visual treatment) while inactive labels are muted and separated with tiny square dots.

The stage begins about 45 px below tabs, is 188.5 px high at desktop, and overflows the viewport horizontally. Render six local images per state with their source aspect ratios, mixed narrow/wide widths, 8 px gaps, and black 4–8 px corner registration squares. Mobile uses the same horizontal collage concept at a smaller scale. Use `object-fit: cover` and do not distort assets.

Asset directories: `hero/apps`, `hero/websites`, `hero/games`, `hero/tools`; each contains six files in numbered/source order. Autoplay advances states on a short interval. A small stage-corner button toggles Pause/Play and updates its accessible label. Manual tab selection restarts the timer. Transition images with clip-path over 360 ms cubic-bezier(.22,1,.36,1), staggered 0/50/100/150/200/250 ms. Disable interval and decorative motion for reduced-motion.
