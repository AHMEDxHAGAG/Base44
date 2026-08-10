# Output Plan

- Source URL: `https://base44.com/`
- Normalized origin: `https://base44.com`
- Normalized pathname: `/`
- App root: `.`
- Site key: `base44-com-cf167063`
- Page key: `root-8a5edab2`
- Destination route: `/` via `src/app/page.tsx`
- Artifact root: `docs/research/base44-com-cf167063/root-8a5edab2/`
- Screenshot root: `docs/design-references/base44-com-cf167063/root-8a5edab2/`
- Component root: `src/components/sites/base44-com-cf167063/root-8a5edab2/`
- Shared component root: `src/components/sites/base44-com-cf167063/shared/`
- Asset root: `public/sites/base44-com-cf167063/root-8a5edab2/`
- Downloader: `scripts/download-assets-base44-com-cf167063-root-8a5edab2.mjs`

## Collision and Preservation Check

- The only existing route is the untouched template scaffold at `/`; it is approved for replacement by the single-URL fresh-template routing rule.
- No existing site component namespace, research namespace, screenshot namespace, or public asset namespace collides with this plan.
- The pre-existing `package-lock.json` modification is unrelated and will be preserved.

## Shared Foundation Changes

- `src/app/layout.tsx`: replace scaffold metadata/fonts only where the target inspection proves it is appropriate for this single-site app.
- `src/app/globals.css`: preserve the scaffold's Tailwind/shadcn imports, then add Base44 tokens and global rules.
- `src/app/page.tsx`: replace the untouched placeholder with the assembled Base44 homepage.
- `src/components/sites/base44-com-cf167063/shared/`: store genuinely shared Base44 icons and types.
- `public/sites/base44-com-cf167063/root-8a5edab2/`: store downloaded homepage assets; no remote runtime asset dependencies.

