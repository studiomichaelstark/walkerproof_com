---
name: Walkerproof
description: Plain-English waterproof gear guides on a black, glass-and-glow stage with lime pill actions.
colors:
  lime: "#ddff00"
  lime-hover: "#f0ff70"
  on-lime: "#000000"
  orange: "#ff9a1f"
  orange-hot: "#ff4d00"
  glow-amber: "#ffb000"
  black-ground: "#000000"
  surface-dark: "#0f0f0f"
  ink-dark: "#ffffff"
  soft-dark: "rgba(255, 255, 255, 0.8)"
  muted-dark: "rgba(255, 255, 255, 0.62)"
  line-dark: "rgba(255, 255, 255, 0.14)"
  glass-a-dark: "rgba(255, 255, 255, 0.1)"
  glass-b-dark: "rgba(255, 255, 255, 0.03)"
  paper-light: "#f4f4ef"
  surface-light: "#ffffff"
  ink-light: "#0a0a0a"
  line-light: "rgba(10, 10, 10, 0.14)"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1rem + 5.4vw, 5.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1rem + 3.4vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  xs: "4px"
  panel: "16px"
  card: "28px"
  pill: "999px"
spacing:
  gap: "16px"
  gutter-sm: "16px"
  gutter-md: "32px"
  section: "clamp(4rem, 2rem + 7vw, 8.5rem)"
  container: "1600px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.on-lime}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.lime-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "48px"
  button-white:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.on-lime}"
    rounded: "{rounded.pill}"
    padding: "10px 24px"
    height: "48px"
  card-glass:
    backgroundColor: "{colors.glass-a-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.card}"
  card-orange:
    backgroundColor: "{colors.orange-hot}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.card}"
    padding: "24px"
  nav-pill:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.pill}"
    padding: "8px 24px"
  nav-link:
    textColor: "{colors.soft-dark}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  input-pill:
    backgroundColor: "transparent"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "8px 20px"
---

# Design System: Walkerproof

## Overview

**Creative North Star: "The Night Trailhead"**

A black stage with one warm light source. Content sits on frosted glass panels, actions are lime pills, and a single orange glow (the sun coming up behind a wet ridge) is the only large colour field. The build follows the owner's decision to copy the structure, colours, width and motion of the DesignLab template, with Inter as the sole typeface. It is a content site: guides come first, the stage dresses them.

Density is airy. Sections breathe on a fluid vertical rhythm, the container is very wide (1600px), and type is large, light and tight. Depth comes from translucency, hairline borders and one radial glow, not from shadows. Motion is quiet: reveal, lift, press, parallax, a sticky step sequence, all off under `prefers-reduced-motion`. Dark is the default; a light theme exists behind a storage-free toggle and keeps the same structure with white glass on warm paper.

Photo areas are warm-glow glass placeholders until the owner supplies photography; they are a stand-in, not a final image language.

**Key Characteristics:**
- Black ground, white Inter at weight 300, sentence case, tight tracking.
- Lime (#ddff00) is the only action colour; black text on it.
- Glass cards: 10% to 3% white gradient, 1px border, 28px corners.
- One orange glow family for the hero orb, CTA cards and photo placeholders.
- Floating pill navigation with a lime active dot.
- Dark by default, light by toggle, no stored preference.

## Colors

A near-monochrome black and white field with a lime action colour and an orange glow reserved for warmth and calls to action.

### Primary
- **Signal Lime** (#ddff00): primary buttons, the active-nav dot, focus ring, text selection, icon discs on the why-cards, the "Free" badge, accent text in dark theme. Text on lime is always black (#000000). Hover lightens to #f0ff70.

### Secondary
- **Ember Orange** (#ff9a1f) and **Hot Ember** (#ff4d00): the orange CTA cards (radial from orange at the bottom through hot ember to near-black), list bullets in the offer card.
- **Glow Amber** (#ffb000): the hero orb's hot centre only, fading through #ff7a00 and #c2300a into transparent.

### Neutral
- **Stage Black** (#000000): dark page ground. **Panel Black** (#0f0f0f): solid dark panels and the nav pill (at 80% opacity).
- **Ink White** (#ffffff) for text on dark, with Soft (80%) for body and Muted (62%) for meta text. **Hairline** (white 14%) for every border and divider.
- **Glass Fill** (white 10% to 3%, 145deg) for cards.
- Light theme: **Warm Paper** (#f4f4ef) ground, **Pure White** (#ffffff) surface, **Ink Black** (#0a0a0a) text with 82% and 62% tints, hairline at ink 14%. In light theme glass becomes white 95% to 70% with a soft drop shadow, and accent text becomes ink with a lime underline because lime on paper is illegible.

### Named Rules
**The Lime Is For Doing Rule.** Lime marks the thing to press or the current place. It never decorates headings, backgrounds or large areas.

**The One Glow Rule.** Orange appears as a radial glow (orb, CTA card, placeholder corner), never as a flat fill and never on text.

**The Token Rule.** New colours come from the custom properties in `global.css`; do not hardcode a new palette value.

## Typography

**Display Font:** Inter Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Inter Variable
**Label/Mono Font:** none; Inter is the only family.

**Character:** One family, differentiated by weight and scale. Light (300) large type reads as calm and editorial against the black; weight 500 appears only on buttons and small badges.

### Hierarchy
- **Display** (300, clamp 2.75rem to 5.5rem, 1.02, -0.035em): hero headline and footer sign-off.
- **Headline** (300, clamp 2.125rem to 3.75rem, 1.05, -0.03em): section titles, balanced wrapping.
- **Title** (400, clamp 1.5rem to 2rem, 1.15, -0.02em): card titles, step titles, definition terms.
- **Lead** (400, clamp 1.0625rem to 1.25rem, 1.55, soft ink, max 40rem): section intros.
- **Body** (400, 1.0625rem, 1.6): running text; prose guides cap at about 65ch and use weight 300 headings.
- **Label** (500, 0.9375rem; 0.875rem in small buttons): buttons, nav links, form labels. Small meta (0.875rem, muted) for counts, dates, step numerals.

### Named Rules
**The Light Weight Rule.** Large type is 300 and sentence case. Uppercase display and heavy weights are not part of this system.

## Layout

A single wide container (max 100rem, padding 16px, 32px from 48rem) holds every section. Sections stack with a fluid vertical pad of clamp(4rem, 2rem + 7vw, 8.5rem); after the hero, sections drop their top pad so rhythm comes from one value. Grids use a 16px gap. Anchored sections each carry an id and a 6rem scroll margin to clear the floating nav.

Compositions in use: a two-column hero (1fr and 1.2fr) with the glow visual; a marquee strip; a centred intro followed by a sticky two-column steps block (list left, cross-fading visual right, 190vh tall on large screens); a four-up card row (sm: 2 columns, lg: 4); a three-column masonry with offset column tops and parallax drift; a split definition list; a three-up guide card grid; a 1.7fr / 1fr offer and newsletter pair; a 1fr / 2fr FAQ with sticky heading; a large footer sign-off with a stacked link list. Below 64rem the sticky steps collapse to stacked cards with inline placeholders; parallax is off below 48rem.

## Elevation & Depth

Depth is translucency, not shadow. Glass cards sit on the black with a gradient fill and a hairline; the nav pill adds a 14px backdrop blur. The only glow is the orange radial family. In light theme glass cards gain a faint drop shadow (0 18px 40px -28px at 25% black) because translucency alone does not separate white from paper. The hero panel uses a Tailwind `shadow-2xl` that is barely visible on black.

### Named Rules
**The Flat Stage Rule.** No drop shadows in dark theme beyond the hero panel; separate surfaces with hairline and glass fill.

## Shapes

Soft and round. Cards, placeholders and CTA cards use 28px corners (1.75rem). Anything that can be pressed or navigated is a full pill (999px): buttons, nav, nav links, form input, count badges, badge chips. The hero mock window uses 16px, and the focus ring radius is 4px. Borders are always 1px hairline. The sticky topics heading sits on a 24px rounded translucent black plate with blur so it stays legible over scrolling images.

## Components

### Buttons
- **Shape:** full pill (999px), minimum height 48px (40px small), padding about 10px by 24px, weight 500.
- **Primary (lime):** lime fill, black text. Hover lightens to #f0ff70.
- **Outline:** transparent with a hairline border; hover brightens the border to full ink.
- **White:** white fill, black text, used on orange cards and the newsletter submit.
- **Press:** scale to 0.96 for 120ms, return with the shared ease.

### Cards / Containers
- **Glass card:** 28px, hairline border, gradient fill; why-cards add a cursor-following lime spotlight (12% lime, 18rem radius) and a 6px hover lift.
- **Orange card:** 28px, radial orange-to-black gradient, white text, white button. Used for the why-row CTA, the "Gear on the go" tile and the newsletter.
- **Placeholder:** 28px dark glass with a warm glow in the lower right; tones shift the glow to lime or blue. Carries topic text over a bottom black gradient with a pill count badge.

### Inputs / Fields
- Pill field, 48px minimum height, 1px current-colour border, transparent fill, placeholder at 55% opacity. Focus uses the global 3px lime outline. Disabled state drops to 70% opacity with a not-allowed cursor.

### Navigation
- A floating pill pinned 12px from the top: wordmark as plain text in Inter 500 at 1.5rem on the left, links centre, theme toggle and a small lime checklist button right. Links are 40px-high pills in soft ink; hover and current page get a glass fill, and the current page adds a hairline ring and a 6px lime dot. Below 48rem links collapse into a "Menu" disclosure that opens a rounded glass list.

### FAQ Accordion
- Native details elements as stacked glass pills (28px), 1.125rem question, plus icon that rotates 45 degrees when open, answer at soft ink capped at prose width.

### Marquee and Sticky Steps
- The marquee scrolls a doubled list of topic names at 40s linear, paused on hover, edge-masked, and becomes a scrollable row under reduced motion. The steps block highlights one glass step at a time (others show title only, muted) and cross-fades a large numeral over a placeholder.

### Motion
- Lenis smooth scroll (lerp 0.1). Reveal: fade plus 20px rise over 0.7s with ease (0.22, 1, 0.36, 1), optional stagger of 0.08s. Hover lift 6px over 0.3s. All of it, and the hero chip demo, is off under `prefers-reduced-motion`; a CSS fail-safe reveals content after 3s if scripts fail.

## Do's and Don'ts

### Do:
- **Do** keep Inter as the only family, light (300) for large type, sentence case.
- **Do** make every primary action a lime pill with black text.
- **Do** build surfaces from glass fill, a 1px hairline and 28px corners.
- **Do** use orange only as a radial glow behind or inside a card.
- **Do** read colours from the custom properties and keep both themes working.
- **Do** give every section an id and keep motion transform and opacity only.

### Don't:
- **Don't** reintroduce the retired cream, red, sand, brown or coral palette.
- **Don't** put lime on large fills, headings or light-theme text; use ink with a lime underline there.
- **Don't** add cookies, storage, trackers or third-party requests, including for the theme toggle.
- **Don't** use a logo image in the header; the wordmark is plain text.
- **Don't** treat the placeholder glow panels as final art; swap in photography when it arrives.

**Not canonized (defects the build carries):** hardcoded one-off hexes in the hero board and its "You" chip (#3b82f6, #ffae00, #22c55e, #27ae60) bypass the token rule; the global lime focus ring has weak contrast on the light-theme paper; the sticky topics heading uses a hardcoded black plate that does not follow the theme.
