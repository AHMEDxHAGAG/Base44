# Page topology — Base44 homepage

Source: `https://base44.com/` inspected 2026-08-10/11. The page is one long marketing route with a fixed header and eleven ordered regions.

| Order | Region | Desktop y / h at 1425 px inner width | Mobile y / h at 375 px inner width |
| --- | --- | --- | --- |
| fixed | Header | 0 / 85 | 0 / 54 |
| 1 | Hero | 0 / 900 | 0 / 866 |
| 2 | Stack | 900 / 831 | 866 / 1073 |
| 3 | Build | 1731 / 728 | 1939 / 1459 |
| 4 | Design | 2459 / 843 | 3398 / 1262 |
| 5 | Grow | 3302 / 916 | 4660 / 1478 |
| 6 | Testimonial | 4218 / 794 | 6138 / 1364 |
| 7 | Pricing | 5012 / 811 | 7502 / 1406 |
| 8 | FAQ | 5823 / 1596 | 8909 / 1938 |
| 9 | Sendoff | 7419 / 628 | 10847 / 679 |
| 10 | Footer | 8046 / 755 | 11526 / 1829 |

The maximum content width is 1920 px. Desktop sections use fluid side gutters capped at 90 px; at 1425 px the common gutter is about 67 px (`4.6875vw`). Tablet uses `5.21vw` (40 px at 768). Mobile uses 20 px except edge-to-edge media/card grids.

Primary reference captures:

- `original-desktop-1440.png` — 1425 × 8801 rendered page.
- `original-tablet-768.png` — 753 × 15219 rendered page.
- `original-mobile-390.png` — 375 × 13113 rendered page.
- Per-region desktop/mobile viewport captures live beside those files.

There is no smooth-scroll library. `html` has `scroll-behavior: auto`; no Lenis, Locomotive Scroll, or GSAP runtime was detected.
