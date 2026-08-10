# DesignSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/DesignSection.tsx`. Server component, no props.

References: `design-desktop.png`, `design-mobile.png`.

## Layout

Warm-gray `#eeeceb`. Stack on mobile/tablet; at 1100+ use a horizontal split with blue left panel width 47.92% and gray right panel filling the rest. Desktop section is about 843 px high at 1425.

Blue panel: `#3950e6`, clipped/relative, grunge overlay centered/no-repeat, size `max(100%,2126px)`, opacity .55, overlay blend, rotated 180 degrees. Mobile minimum height 530 px, right margin 20 px, padding 20/50 px; tablet right margin 6.51vw, min-height 92.4vw, padding 5.21vw/10.42vw; wide no margin, auto height, padding `min(4.6875vw,90px)` horizontal and `min(6.25vw,120px)` vertical.

Heading `Beautiful by default.\nYours by design.` Dazzed 600 in `#eeeceb`; wide `clamp(64px,6.46vw,124px)`, line-height .92, tracking -.04em (92.0/84.7 px at 1425). Subcopy: `Anyone can build an app.\nNow anyone can make it beautiful too.` Dazzed 500, roughly `clamp(21px,1.667vw,32px)`, line-height 1.4, white.

Right panel uses 20 px/50 px mobile padding, 5.21/10.42vw tablet, and wide left/right about 81.6/66.8 px, vertical 89 px. Four links max 800 px with about 44.5 px gaps at desktop. Each has title, body, and circled arrow; title uses card display formula and body common Geist formula. Hover shifts the arrow right.

Content:

1. Seamlessly collaborate — `See every page at once. Leave notes, sketch ideas, and send instructions straight to AI — all on one board.`
2. Generate high-quality videos — `Describe a video, get one. Add it to any page — hero sections, onboarding screens, product previews.`
3. Get redesign recommendation — `Ask for design options, pick the one you want. AI shows previews before it touches anything.`
4. Control the design — `Set colors and fonts for your entire app from one place. Your entire app — updated everywhere at once.`
