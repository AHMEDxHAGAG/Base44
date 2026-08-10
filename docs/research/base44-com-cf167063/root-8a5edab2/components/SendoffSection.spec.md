# SendoffSection component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/SendoffSection.tsx`. Server component, no props.

References: `sendoff-desktop.png`, `sendoff-mobile.png`.

Blue `#3950e6` full-width section, relative and clipped. Height is about 628 px desktop and 679 px mobile. Add the grunge overlay centered/no-repeat, size `max(100%,2126px)`, opacity .55, overlay blend, rotated 180 degrees.

Center headline `Go ahead.\nBuild it yourself.` in large white Dazzed 600 with tight line-height/tracking. The headline cluster is about 672 px wide desktop. Build a loose collage around/below it using all five local assets from `sections/sendoff/`; preserve their mixed dimensions, slight offsets, and cropped overflow from the source reference. Registration-square details echo the hero collage.

Final CTA is a circled arrow followed by a very large underlined `Start building` link in white. Use the original Base44 build URL. On pointer hover, shift arrow right and roll/translate the label subtly; do not disturb layout. Ensure the collage is decorative (`alt=""`) and the headline/CTA remain above it and keyboard accessible.
