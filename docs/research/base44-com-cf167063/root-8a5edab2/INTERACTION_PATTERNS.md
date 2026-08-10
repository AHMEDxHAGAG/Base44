# Interaction patterns

## Header

At `scrollY <= 20` the fixed header is transparent; at `scrollY > 20` it gains a white background. The transition is 300 ms. Desktop navigation appears only when the viewport is at least 1431 px. Product, Use Cases, and Resources are disclosure buttons with one full-width white panel open at a time; clicking the close hit-area or another disclosure closes/replaces it. Product shows seven feature links in a two-column ruled grid, Use Cases shows twelve categories plus “See all categories,” and Resources shows five descriptive links.

Below 1431 px the header uses a hamburger. The mobile panel is a fixed white sheet with Product, Use Cases, Resources, Pricing, Enterprise, Superagents, and language rows separated by 2 px rules. The underlying page is dimmed. Escape and the close button dismiss the sheet; body scrolling is locked while it is open.

## Hero

Apps, Websites, Games, and Tools select one of four six-image asset sets. Autoplay advances periodically; the stage control toggles an `aria-label` between “Pause animation” and “Play animation.” Manual selection resets the timer. Images reveal using a staggered clip-path transition (360 ms, 50 ms increments). Reduced-motion users see immediate changes and no automatic advance.

The prompt field is a visual marketing control: the placeholder rotates among sample prompts; “More options,” Build, voice, and send are buttons with accessible labels. Local clone actions may be non-navigating, but their focus/pressed/expanded semantics must remain correct.

## Cards and links

At 1100 px and wider, Build cards transition from cream to orange on hover in 200 ms. Dark CTAs transition to `#433f3f`; their duplicate-label track translates upward by 50% for a rolling-label effect. Ruled list arrows translate slightly right on hover. There is no hover-only content.

## FAQ

The first question is expanded initially. Only one answer may be open. Buttons expose `aria-expanded` and target a labelled `role=region`; closed regions are inert/hidden. Height animates with CSS grid rows from `0fr` to `1fr` over 400 ms using cubic-bezier(.22,1,.36,1), while answer opacity changes over 300 ms.

## Scroll behavior

Native scrolling is used. The fixed header remains visible through every section. No section entrance animation or scroll hijacking is required. External marketing links can keep the source URLs.
