# PricingSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/PricingSection.tsx`. Server component, no props.

References: `pricing-desktop.png`, `pricing-mobile.png`.

## Layout

Neutral background. Wide wrapper uses capped 90 px side and 120 px vertical padding, horizontal split: left about 387 px and right about 656 px. At 1425 section height is about 811 px. Mobile stacks heading, cards, and enterprise prompt with 20 px gutters and 50–80 px section rhythm.

Heading `Choose\nyour plan`, Dazzed 600 using the common section display formula. Subheading `Built for where you are, and where you're going.` uses common Geist body style.

Right column contains two cards separated by about 24 px. Free card is white; paid card is `#ff6a00`. Wide cards are at least about 276/285 px high and use 29–30 px padding. On desktop each card uses a left price/action column and right bullet column; stack internally on narrow screens. Bullets use local `sections/pricing/check.svg`.

## Exact content

Free: `Start for free`; `$0/mo`; CTA `Start Building`; label `Get access to:`; bullets `All core features`, `Built-in integrations`, `Authentication system`, `Database functionality`.

Paid: `Paid plans from`; `$16/mo`; note `*Billed annually`; CTA `See all plans`; body `Upgrade as you go for more credits, more features, and more support.`; bullets `Unlimited number of apps`, `In-app code edits`, `AI model select`, `Free custom domain`.

Below cards: `Looking for enterprise solutions?` plus button/link `Contact sales`. Buttons match the dark 10 px-radius CTA pattern and rolling-label hover treatment.
