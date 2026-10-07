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
- No animations. Light and dark theme, switchable by the visitor without storing anything.
- Each page section has its own id.
- Copy is English, short and clear.
- Affiliate links only with a visible disclosure.

## Brand Commitments
Name: Walkerproof. Assets in `/Users/michaelkonjevic/Documents/Kunden/Walkerproof.com/Logo/`: wordmark (`walkerproofLogo.svg`), round "wobble" badge (`wobble.svg`), favicon set. Palette from the owner (Adobe Color), by role: cream #F2E9D8 is the body background; red #A60321 is the accent colour only (buttons, highlighted words); sand #D9A577 is used sparingly; brown #8C5C32 and coral #D97B66 are not used. The dark theme uses a derived neutral near-black. Style reference: the HYLO running-shoe site (bold uppercase headlines, huge wordmark, photo-led split sections, outlined pill buttons, horizontal card rows), a direction rather than a template.

## Evidence on Hand
No photos yet (owner will supply them), no testimonials, no real guides published yet (one draft sample). Photo areas are placeholders until then.

## Product Principles
1. Clarity and simplicity over features.
2. Privacy is a product feature, never a trade-off.
3. Say it short; guides are the product, everything else gets out of their way.

## Accessibility & Inclusion
Semantic HTML, WCAG AA contrast in both themes, visible focus, alt text, works without JavaScript.
