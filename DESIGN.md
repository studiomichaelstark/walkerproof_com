---
name: Walkerproof
description: Gear-care guides in outdoor-sportswear clothing, with giant uppercase Inter on full-bleed colour fields.
colors:
  red: "#a60321"
  cream: "#f2e9d8"
  sand: "#d9a577"
  coral: "#d97b66"
  night: "#1c1211"
  ink-dark: "#2a1816"
  surface-light: "#faf5ea"
  surface-dark: "#271917"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.1rem + 3.4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.5vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.03em"
rounded:
  none: "0"
  pill: "999px"
spacing:
  rail-gap: "16px"
  gutter-sm: "20px"
  gutter-md: "40px"
  section: "clamp(3.5rem, 2rem + 6vw, 7rem)"
components:
  button-solid:
    backgroundColor: "{colors.ink-dark}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 24px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 24px"
    height: "48px"
  button-small:
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
    height: "40px"
  field-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.cream}"
  field-coral:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink-dark}"
  field-sand:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink-dark}"
  field-panel:
    backgroundColor: "{colors.night}"
    textColor: "{colors.cream}"
  photo-placeholder:
    backgroundColor: "{colors.coral}"
    rounded: "{rounded.none}"
  email-input:
    backgroundColor: "transparent"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
    height: "48px"
---

# Design System: Walkerproof

## Overview

**Creative North Star: "The Trailhead Banner"**

A gear-care publication that dresses like outdoor sportswear: giant uppercase Inter at weight 800, and full-bleed colour fields that each own a whole section. The page reads as a stack of banners (red, coral, sand, near-black), separated by the cream paper they sit on. There is one typeface, no motion, and no tracking, and the system leans on scale and colour instead of ornament.

Density is low and the type is loud. Headlines are uppercase and tightly set; everything around them is plain body copy, hairline rules, and outlined pills. Guides are the product, so chrome stays small (header, nav, a theme toggle) and the colour fields do the branding.

The build refuses the cream-blog-with-serif default and the uniform card grid. Rows of tiles and guides scroll sideways as rails instead.

**Key Characteristics:**
- Committed colour: red is a full-bleed field, not an accent.
- One family (Inter Variable); hierarchy comes from size and weight 800 vs 400.
- Outlined pill buttons, hairline rules, square-cornered image areas.
- Flat and still: no shadows, no animation, no gradients.
- Photo areas are placeholders: the wobble mark tone-on-tone on a colour field.
- Light and dark themes, switched per page view with nothing stored.

## Colors

Four saturated fields plus cream paper and warm near-black; the owner's palette, used flat.

### Primary
- **Walker Red** (#a60321): the hero and newsletter field, selection highlight, scrollbar thumb, light-theme link and focus colour. Cream text sits on it.

### Secondary
- **Trail Coral** (#d97b66): a secondary full field (topic tiles, placeholders) and, in dark theme, the link and focus colour.
- **Dry Sand** (#d9a577): the checklist field and alternating tile/placeholder fields. Dark ink on top.

### Neutral
- **Paper Cream** (#f2e9d8): light-theme page ground, text on red and on the dark panel, mark ink on red-adjacent surfaces.
- **Raised Cream** (#faf5ea): light-theme surface role.
- **Night Bark** (#1c1211): dark-theme page ground and the privacy/footer panel in light theme.
- **Warm Panel** (#271917): dark-theme surface and panel.
- **Bark Ink** (#2a1816): body text in light theme, and text on coral and sand.
- Muted text and hairline rules are mixes of ink into the ground (68% and 22% in oklab), so they follow the theme.

### Named Rules
**The Field Rule.** Colour lives in full-bleed regions that own a section. Each field sets its own text, button, link, and mark colours; children inherit them. Never lay a small coloured patch on top of another field.
**The Brown Rule.** The owner's brown (#8C5C32) is deliberately unused. Do not introduce it.
**The Ink-On-Warm Rule.** Cream text goes only on red and night fields; Bark Ink goes on coral and sand.

## Typography

**Display Font:** Inter Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Inter Variable (same)

**Character:** Sportswear-poster Inter: heavy, uppercase, negatively tracked at the top of the scale, then plain and readable for prose. Weight and size contrast carry all hierarchy.

### Hierarchy
- **Display** (800, clamp(2.5rem, 1rem + 7.4vw, 6rem), 0.94, uppercase, -0.035em): hero and newsletter headings.
- **Headline** (800, clamp(1.875rem, 1.1rem + 3.4vw, 3.5rem), 1.0, uppercase, -0.03em): section headings; also guide article h2 via prose.
- **Title** (700, 1.375rem, 1.15, -0.02em): tile names (uppercased on topic tiles) and guide titles on cards.
- **Lead** (400, clamp(1.125rem, 1rem + 0.5vw, 1.375rem), 1.45, max 38rem): the sentence under a heading.
- **Body** (400, 1.0625rem, 1.6): prose.
- **Label** (600, 0.9375rem, +0.03em, uppercase; 0.8125rem on small): buttons, nav (0.875rem), form labels.

### Named Rules
**The One Family Rule.** Inter only. Do not add a second face; change weight or size instead.
**The Shout Once Rule.** Uppercase 800 is for display, headline, tile names, nav and buttons. Body, leads, and metadata stay sentence case.

## Layout

Content column is 72rem max, centred, with 1.25rem gutters (2.5rem from 48rem up). Sections use a fluid vertical pad of clamp(3.5rem, 2rem + 6vw, 7rem). Full-bleed fields sit outside the column; their content re-enters it via the wrap. Split sections (privacy, checklist) are a two-column grid from 48rem, a colour/placeholder half against a text half with 3rem to 5rem padding, alternating sides. On mobile they stack.

Horizontal rails (topics, guides) are flex rows with a 1rem gap and scroll-snap; items are min(78vw, 19rem) wide. The topics rail bleeds to the viewport edge but its first tile aligns to the content column (rail-bleed, via padding-inline-start max(2.5rem, (100% - 72rem)/2 + 2.5rem)). Rails are keyboard-focusable. The hero mark is cropped by the field edge and sits bottom-right on desktop, below the copy on mobile. Header is a thin bar with a hairline bottom rule; nav wraps to its own row on mobile.

## Elevation & Depth

Flat. There are no shadows. Depth is tonal and by cropping: colour fields against paper, and the oversized mark clipped by field edges. Hairline rules (22% ink mix) separate sections and cards.

### Named Rules
**The Flat Rule.** Surfaces do not lift. State is shown by colour inversion, never by shadow or motion.

## Shapes

Two shapes only: pills (999px) for every button and text input, and square corners (0) for all image areas, tiles, and fields. Borders are 2px, in the current text colour, on buttons and inputs; 1px hairlines for rules. Photo areas are square-cornered, overflow hidden, with the wobble mark (70% wide, offset right and below, cropped) in the field's mark ink, so it reads tone-on-tone. Topic tiles are 4:5, guide image areas 4:3.

## Components

### Buttons
- **Shape:** full pill (999px), 2px border in the field's button colour, min-height 3rem (2.5rem small).
- **Solid:** fill is the field's button colour, text the field's inverse; padding 0.7rem 1.5rem, label type (uppercase, 600, +0.03em).
- **Outline:** transparent with a 2px border.
- **Hover:** solid and outline invert (fill swaps). No transition, no movement.
- **Focus:** 3px outline in the link colour, 3px offset; cream on red and panel fields.

### Topic tile
A 4:5 colour field linking to a topic, cycling coral, sand, red; title top-left in uppercase Title type, with the cropped wobble mark in tone-on-tone at bottom right.

### Guide item
Home: 4:3 colour placeholder, Title-type name, small muted line "Topic · date". Archive card: top hairline, 1.5rem vertical padding, title that underlines on hover, muted description and meta.

### Inputs / Fields
Email input is a pill with a 2px current-colour border, transparent ground, inherited text, 5 (1.25rem) horizontal padding, min-height 3rem; placeholder at 70% opacity. Label above in uppercase label type. Disabled (signup not yet open): 75% opacity, not-allowed cursor.

### Navigation
Uppercase 600 small type with +tracking, no underline at rest, underline on hover; current page is marked with aria-current. The theme toggle is a small outline pill, shown only with JavaScript; it flips the theme for the current view and stores nothing.

### Wobble Mark (signature)
The round wobble badge as an inline SVG filled with currentColor/mark ink. It is the hero graphic, the stand-in for photos, and the footer wordmark partner. Always cropped by a container edge when oversized.

## Do's and Don'ts

### Do:
- **Do** give each section one full-bleed field (red, coral, sand, or night) and let its tokens style the children.
- **Do** set display and headline in Inter 800 uppercase with negative tracking.
- **Do** use pill buttons with 2px borders; invert on hover.
- **Do** keep ink-on-warm pairings: cream on red and night, Bark Ink on coral and sand.
- **Do** keep placeholders as the wobble mark on a colour field until real photos exist.
- **Do** keep visible 3px focus outlines in both themes.

### Don't:
- **Don't** use the brown (#8C5C32).
- **Don't** add a second typeface, shadows, gradients, or animation.
- **Don't** round image areas or tiles.
- **Don't** replace rails with a uniform card grid.
- **Don't** store the theme choice (no cookie, no localStorage).
