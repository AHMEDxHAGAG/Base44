# Layout architecture

`src/app/page.tsx` remains a Server Component and renders the page shell in the source order documented in `PAGE_TOPOLOGY.md`. Only Header, Hero, and FAQ cross client boundaries.

Each section owns its internal responsive layout and uses a shared `base44-page` ancestor for font/color variables. Static copy stays in source markup for strong first paint and semantic fidelity. Local assets are rendered through `next/image` when dimensions or fill semantics are stable; small SVG icons remain inline.

The page uses mobile-first layout rules:

- 0–767 px: 20 px gutters, stacked cards/columns, 54 px fixed header.
- 768–1099 px: `5.21vw` gutters and expanded tablet spacing; 76 px header.
- 1100–1430 px: wide section compositions but compact header navigation.
- 1431 px and above: 85 px header with full primary navigation and mega menus.
- 1920 px and above: content/spacing caps stop further expansion.

Avoid global selectors outside `.base44-page` except the root reset and font variables. The original content should remain usable if scripts are disabled; only menu/tab/accordion state enhancement depends on client JavaScript.
