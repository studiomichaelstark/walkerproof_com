---
name: Walkerproof
description: A gear-care publication set like outdoor sportswear branding, giant uppercase Inter on cream, one red accent, no tracking.
colors:
  cream: "#F2E9D8"
  ink: "#221D1B"
  red: "#A60321"
  sand: "#D9A577"
  night: "#171413"
  night-surface: "#211C1A"
typography:
  display:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 7.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  guide-title:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1rem + 5.4vw, 4.5rem)"
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
    lineHeight: 1.6
    letterSpacing: "0.03em"
  label-sm:
    fontFamily: "Inter Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.03em"
rounded:
  pill: "999px"
  none: "0"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  section: "clamp(3.5rem, 2rem + 6vw, 7rem)"
  wrap-max: "72rem"
components:
  button-solid:
    backgroundColor: "{colors.red}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "3rem"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.5rem"
    height: "3rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
  button-sm:
    typography: "{typography.label-sm}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 1rem"
    height: "2.5rem"
  field-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
  field-sand:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
---

# Design System: Walkerproof

## Overview

**Creative North Star: "The Trail-Wear Label"**

A gear-care publication set the way outdoor sportswear is branded: giant uppercase Inter on a cream page, centred, with one red accent and typographic lists where other sites would use colour blocks or card grids. The page is mostly cream and ink. Colour is rationed: red appears on the primary button, one highlighted word and hover, and the only coloured regions are one ink band and one sand band.

The system is quiet by construction. There is one typeface, no animation, no shadows, no gradients and no stored state. Hierarchy comes from scale and weight (800 uppercase against 400 body) and from hairline rules, not from decoration. Photography is not yet supplied, so photo areas are tone-on-tone placeholders carrying the round "wobble" mark. Style reference is the HYLO running-shoe site, as a direction rather than a template.

**Key Characteristics:**
- Centred editorial composition; text sections centre, the privacy split is the one asymmetric moment.
- Giant 800-weight uppercase Inter with tight tracking.
- Red is accent only; sand appears in one band (and as accent text in dark theme).
- Hairline rules and typographic lists instead of cards and colour blocks.
- Outlined pill buttons, one solid red.
- No motion, no cookies, no storage, no third-party requests.

## Colors

A cream-and-ink page with a single red voice, one sand band, and a neutral near-black dark theme.

### Primary
- **Walker Red** (`colors.red`): the accent and nothing else. Primary solid button, the single highlighted word in a hero headline, text selection background. Accent text in light theme only; in dark theme red is replaced by sand for text and links.

### Secondary
- **Dry Sand** (`colors.sand`): used sparingly. Background of the one checklist band; in dark theme the accent text and link colour; link colour on the ink band. Never a second accent on the cream page.

### Neutral
- **Paper Cream** (`colors.cream`): body background in light theme, text colour in dark theme and on the ink band.
- **Warm Ink** (`colors.ink`): body text in light theme, the ink band background, the outline button colour.
- **Night** (`colors.night`): dark-theme page ground, a neutral near-black.
- **Night Surface** (`colors.night-surface`): dark-theme placeholder and surface tone.
- Derived by `color-mix` in the stylesheet, not separate tokens: muted text (ink 70% over background), hairline rule (ink 22% over background), cream surface (cream 93% with ink 7%).

### Named Rules
**The Red-Is-Accent Rule.** Red marks the one action or the one word that matters on a screen. It is never a background field, never a section colour.
**The Two-Fields Rule.** Coloured regions are limited to the ink band and the sand band. A new surface uses cream, or reuses one of those two fields.
**The No-Brown-No-Coral Rule.** The owner's palette also holds a brown and a coral; both are deliberately unused and must stay out.

## Typography

**Display Font:** Inter Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Inter Variable, the same family. Self-hosted; no second family.

**Character:** One family doing every job. Weight and case carry the hierarchy: 800 uppercase for display and headings, 700 sentence case for card titles, 400 for reading text, 600 uppercase for labels and navigation.

### Hierarchy
- **Display** (800, clamp(2.5rem, 1rem + 7.4vw, 6rem), 0.94, -0.035em, uppercase, balanced): home hero and newsletter headline.
- **Guide title** (800, clamp(2.25rem, 1rem + 5.4vw, 4.5rem), 0.94, -0.035em, uppercase): the h1 of a guide page. An intentional step below Display, because guide titles are long sentences; it is applied as an inline override on the display class.
- **Headline** (800, clamp(1.875rem, 1.1rem + 3.4vw, 3.5rem), 1, -0.03em, uppercase): section headings and the typographic topic list rows.
- **Title** (700, 1.375rem, 1.15, -0.02em): guide card titles, author name.
- **Lead** (400, clamp(1.125rem, 1rem + 0.5vw, 1.375rem), 1.45, max 38rem): one-sentence intros under headlines.
- **Body** (400, 1.0625rem, 1.6): running text; guide prose uses the typography plugin with 800 headings.
- **Label** (600, 0.9375rem, 0.03em, uppercase): buttons, form labels.
- **Label small** (600, 0.8125rem, 0.03em, uppercase): the small button (`.btn-sm`) only. An intentional step of the ramp for secondary actions such as "All guides". Navigation and counts use the 0.875rem utility size at 600 uppercase.

### Named Rules
**The One Family Rule.** Inter only. Differentiate with weight, size and case, never with a second face.
**The Loud-Headline Rule.** Headlines are uppercase 800 with negative tracking; body copy is never uppercase.

## Layout

Centred editorial column. Content sits in a 72rem wrap with 1.25rem gutters, widening to 2.5rem from 48rem. Sections breathe on a fluid vertical pad of clamp(3.5rem, 2rem + 6vw, 7rem); consecutive cream sections drop their top pad so rhythm stays even. Hero, topics, guides, checklist and newsletter are centred; the privacy section is a two-column split (placeholder left, text right) from 48rem, stacked below. The latest-guides row is a three-column grid from 48rem with 2rem gaps. Every section carries its own id and a labelled heading. Header is a centred wordmark above a centred, wrapping nav row; the footer is an ink band with a full-width wordmark.

## Elevation & Depth

Flat. There are no shadows, gradients or blurs. Depth is conveyed by tonal bands (cream, ink, sand), 1px hairline rules (`--line`), and tone-on-tone placeholders. Hover is a fill or colour change, never a lift. There is no animation anywhere.

### Named Rules
**The Flat-Always Rule.** No box-shadows and no motion. A state change is an instant colour swap.

## Shapes

Two shapes only: fully rounded pills (999px) for every button and the email input, and hard right angles for everything else (placeholders, bands, notes, rules). Placeholders are rectangles at 16:9 / 21:9 (hero), 4:3 (guide card) or filling a split half. The wobble mark, a round scalloped badge with footprints, sits cropped off the bottom-right corner of each placeholder at 46% width, in a tone barely lighter or darker than the placeholder ground.

## Components

### Buttons
- **Shape:** pill (999px), 2px border, min-height 3rem, padding 0.7rem 1.5rem, uppercase 600 at 0.9375rem.
- **Primary (solid):** red fill and border, cream text. Hover turns transparent with the context colour border and text.
- **Outline (default):** transparent, ink border and text. Hover fills with ink and flips text to cream. Inside the ink band it inverts to cream; inside the sand band the solid button becomes ink with sand text.
- **Small:** 2.5rem high, 0.8125rem, for secondary actions.
- **Focus:** 3px outline in the accent text colour with 3px offset (cream on ink band, ink on sand band).

### Topic list (signature)
A typographic list instead of cards: full-width rows between hairlines, headline-size topic name on the left, small uppercase guide count on the right, name turns accent on hover.

### Guide card (home)
Placeholder at 4:3, title (Title style), then a muted small line of topic and date. No border, no fill; whole card is one link that turns accent on hover. On list pages a guide is a hairline-topped row with title, muted description and meta.

### Photo placeholder
Tone-on-tone rectangle with a 1px hairline border and the wobble mark cropped at the corner. Marked `aria-hidden`. Replaced by real photography when supplied.

### Inputs / Fields
Email input is a pill with a 2px current-colour border, transparent background, 3rem minimum height, placeholder at 70% opacity. Paired with the solid button in a row from 40rem. Disabled state is 75% opacity with a not-allowed cursor; the button reads "Opening soon" until the newsletter is live.

### Navigation
Centred row of uppercase 600 links at 0.875rem with wide tracking (0.025em) and 1.75rem gaps, hover turns accent, current page carries `aria-current`. A theme toggle sits at the end of the row as an underlined text button ("Dark mode" / "Light mode"). It is revealed only when JavaScript runs, stores nothing and holds for the current page view.

## Do's and Don'ts

### Do:
- **Do** keep red to the primary button, one highlighted headline word and hover.
- **Do** build lists as typographic rows between hairlines before reaching for cards.
- **Do** centre text sections and keep leads to 38rem.
- **Do** use 800 uppercase with negative tracking for every display and section heading.
- **Do** swap sand in for red as accent text in the dark theme (`--accent-text`, `--link`).
- **Do** keep every section id'd and labelled, and keep contrast at WCAG AA in both themes.

### Don't:
- **Don't** use brown (#8C5C32) or coral (#D97B66); they are in the owner's palette but out of the system.
- **Don't** fill a section with red or add a third coloured band.
- **Don't** add animation, transitions, shadows, gradients, cookies, localStorage or third-party requests.
- **Don't** add a second typeface.
- **Don't** replace a placeholder with an illustrative stock image; wait for supplied photography.
