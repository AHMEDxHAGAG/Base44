# Component inventory

| Component | File | Rendering | Responsibility |
| --- | --- | --- | --- |
| Header | `Header.tsx` | client | fixed responsive navigation, scroll state, desktop mega menus, mobile menu |
| HeroSection | `HeroSection.tsx` | client | headline, prompt shell, four asset states, autoplay/pause and manual tabs |
| StackSection | `StackSection.tsx` | server | two-column capability overview and collage |
| BuildSection | `BuildSection.tsx` | server | intro plus three responsive build cards |
| DesignSection | `DesignSection.tsx` | server | blue display panel plus linked feature list |
| GrowSection | `GrowSection.tsx` | server | intro and three cards over responsive image |
| TestimonialSection | `TestimonialSection.tsx` | server | quote, portrait, case-study CTA and three metrics |
| PricingSection | `PricingSection.tsx` | server | plan heading and two plan cards |
| FaqSection | `FaqSection.tsx` | client | single-open accessible accordion |
| SendoffSection | `SendoffSection.tsx` | server | blue final CTA with five-image collage |
| Footer | `Footer.tsx` | server | brand, social links, four navigation columns and copyright |
| Icons | shared `icons.tsx` | server-safe | brand mark, arrows, plus/minus, globe and social SVGs |

All route-specific files live under `src/components/sites/base44-com-cf167063/root-8a5edab2/`. Shared constants and icons live one directory above in `shared/`. Static assets are namespaced under `public/sites/base44-com-cf167063/root-8a5edab2/`.
