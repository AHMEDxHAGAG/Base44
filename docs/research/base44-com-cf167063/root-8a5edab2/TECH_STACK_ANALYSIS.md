# Source stack analysis

The inspected production page is a client-rendered React marketing site delivered as hashed Vite-style bundles (`/assets/app-*.css` and `/assets/root-*.css`). The DOM uses Tailwind utility classes plus a small family of `br-*` hooks. No Next.js data payload was observed on the source page.

Observed runtime and implementation traits:

- React disclosure/tab behavior with accessible ARIA attributes.
- Tailwind-like arbitrary values and min-width breakpoints.
- Local Dazzed display fonts and Geist body/UI font.
- Native scrolling; no GSAP/Lenis/Locomotive dependency.
- Responsive `<picture>` for the Grow background.
- Lazy-loaded grunge texture applied as an overlay after intersection.
- Analytics tags are source-site infrastructure and are intentionally excluded from the clone.

The local implementation targets the repository's Next.js 16.3 App Router, React 19, Tailwind v4, and strict TypeScript scaffold. It uses Server Components by default and narrow client boundaries for the three interactive regions.
