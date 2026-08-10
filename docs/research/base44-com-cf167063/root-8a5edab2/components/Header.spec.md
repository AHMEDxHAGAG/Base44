# Header component spec

Target: `src/components/sites/base44-com-cf167063/root-8a5edab2/Header.tsx`. This is a client component with no props.

References: `header-desktop.png`, `header-mobile.png`, `header-product-menu-desktop.png`, `header-use-cases-menu-desktop.png`, `header-resources-menu-desktop.png`, and `header-mobile-menu.png`.

## Layout

- Fixed at `inset-x: 0; top: 0; z-index: 50`; max inner width 1920.
- Height/gutters: 54/20 px mobile, 76/34 px from 768, 85/40 px from 1431.
- Inline brand mark: 94 × 22 mobile, 111 × 26 from 768.
- Full primary nav only at 1431+. Brand/nav group gap 39 px; nav item gap 32 px. Dazzed 16/24 weight 500.
- Right group is globe control then a dark “Start building” link. CTA is 38 px visual height, 6 px radius, `#312f2f`, white 14 px label.
- Header background changes from transparent to white when `scrollY > 20`, transition 300 ms.

## Desktop disclosures

Product, Use Cases, and Resources are buttons with chevrons and `aria-expanded`. Open panels begin immediately below the 85 px header, span the page width, use white, and have 40–74 px horizontal gutters. The Product panel is about 541 px high at 1585 px inner width and uses two ruled columns.

Product links: Base44 for Developers — “Deploy anything directly from your IDE or AI agent”; Templates Marketplace — “Explore and customize ready-made apps from the community.”; Roadmap — “Get a preview of what's coming next.”; Changelog — “See what's new and track our latest updates.”; Superagents — “AI agents that connect to your tools, run 24/7, and are ready in minutes”; Integrations — “Discover integrations that plug right into your app.”; Features — “Explore everything our platform has to offer.”

Use Cases: Productivity; Education; Entertainment; Health & Wellness; E-commerce & Retail; Finance; Product Marketing; Business Intelligence & Analytics; Marketing & Sales Automation; HR & Recruitment; Dev Productivity; Operations; See all categories.

Resources: Docs & FAQs — “Get answers and find step-by-step guides.”; Blog — “Explore insights and best practices for every step of your build.”; Base44 Education — “Partner with Base44 to help students create and innovate.”; Discord Community — “Where builders connect, ask questions, and trade ideas.”; Hire a partner — “Find expert Base44 partners to power your build.”

Only one panel opens at a time. Close on Escape, outside/close-overlay click, or second click. Restore focus when dismissed.

## Compact/mobile sheet

Below 1431 show Start building and hamburger. On open, replace the header controls with brand + close icon and render a fixed white sheet. Rows are 74–75 px with 2 px dark rules, Dazzed 24 px/1.2, and 20 px side gutters. Order: Product, Use Cases, Resources, Pricing, Enterprise, Superagents (blue), English with globe. The underlying page is dimmed `rgba(0,0,0,.3)` and body scrolling is locked. Rows with children are disclosure controls.

Use semantic nav/button/link elements, visible focus rings, Escape support, and `aria-controls`/`aria-expanded`.
