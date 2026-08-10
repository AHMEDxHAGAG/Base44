# TestimonialSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/TestimonialSection.tsx`. Server component, no props.

References: `testimonial-desktop.png`, `testimonial-mobile.png`.

## Content

Author label: `Yoav Hornung\nFounder of Veo`.

Quote: `“I don't need to do all the cumbersome stuff—hiring a frontend engineer, a backend engineer, a product manager and a designer—everything is in my control now.”`

Metrics: `10K+` / `users`; `100%` / `conversion in 6 weeks`; `10x` / `faster time to market`. CTA: `Read full story`.

## Layout

Use the neutral page surface and capped 90 px wide gutters/120 px vertical rhythm. Desktop section is about 794 px high. Quote occupies the upper left/middle and uses Dazzed 600 `clamp(43px,3.958vw,76px)`, line-height roughly `clamp(46px,4.17vw,80px)`, tracking -.04em. Author is Dazzed 500 `clamp(20px,1.667vw,32px)`.

Portrait `sections/testimonial/yoav-hornung-v2.jpg` is a cropped 232 × 248 block at the upper right on desktop, with grunge overlay. Mobile places the portrait in the quote flow without covering copy.

Desktop metrics form three bottom-aligned gray blocks (`#e2ded7`) with equal widths around 421 px and 15 px gaps; heights step down approximately 386, 304, and 223 px. Values use the large display formula; labels use Dazzed `clamp(20px,1.667vw,32px)`. The Read full story link is aligned at the far right above the metric row. Mobile stacks the metrics in source order and preserves the stepped visual through varied heights, with no horizontal overflow.
