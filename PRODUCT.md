# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Broad outdoor community (hikers and trekkers, beginners to experienced), mostly reading on phones and laptops while planning trips or after one. Confirmed with the owner. Job: learn how to care for gear so it lasts, choose what works, and get a short checklist.

## Product Purpose
Walkerproof is a simple, fast, privacy-first English content site with short practical guides on gear care, footwear, rain gear, cold weather and hiking. Success: guides get read, readers subscribe to the newsletter, the free gear-care checklist gets requested.

## Positioning
Two claims together, confirmed by the owner: care and longevity (keep gear working, repair, buy less) and honest, tracker-free publishing (no cookies, no third-party requests, clear affiliate disclosure).

## Operating Context
Static Astro site on Cloudflare, hosted from the owner's GitHub repo; content is Markdown in `src/content/guides/en/`. Operated from Germany (GDPR, TDDDG, imprint required). Newsletter via Brevo double opt-in (not built yet).

## Capabilities and Constraints
- No cookies, no localStorage, no third-party requests, no embeds. Fonts self-hosted.
- Only one font family: Inter.
- Subtle micro-animations only (scroll reveal, hover lift, button press) and smooth scrolling, all switched off for visitors who prefer reduced motion. Light and dark theme, switchable by the visitor without storing anything.
- Each page section has its own id.
- Copy is English, short and clear.
- Affiliate links only with a visible disclosure.

## Brand Commitments
Name: Walkerproof. The logo files in `/Users/michaelkonjevic/Documents/Kunden/Walkerproof.com/Logo/` are not used on the page for now; the header shows "Walkerproof" as plain text. The favicon set is still used. Visual direction (revision 3, owner's decision): copy the structure, colours, width and motion of the DesignLab template (designlab.framer.website): black ground, white light-weight type, lime #DDFF00 for primary actions, orange/amber glow, glass cards. The earlier cream/red palette is retired. Inter stays the only font (the reference uses Instrument Sans). Dark is the default; a light theme exists behind the toggle. 

## Evidence on Hand
No photos yet (owner will supply them), no testimonials, no real guides published yet (one draft sample). Photo areas are placeholders until then.

## Product Principles
1. Clarity and simplicity over features.
2. Privacy is a product feature, never a trade-off.
3. Say it short; guides are the product, everything else gets out of their way.

## Accessibility & Inclusion
Semantic HTML, WCAG AA contrast in both themes, visible focus, alt text, works without JavaScript.
