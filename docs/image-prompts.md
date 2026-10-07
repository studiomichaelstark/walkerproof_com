# Image plan and prompts (Google Flow)

All images are photographs for the site's photo areas (currently placeholders). Same look throughout so the page feels like one story.

## Format notes

- Generate **landscape images at 16:9** and **4:3** where Flow offers them. If a ratio is not offered, generate 16:9 and crop with CSS (`object-cover`). Leave the key subject inside the middle 70 percent so crops are safe.
- Never ask for text, logos, brand names, watermarks or readable labels in the image. Add words in the page, not in the picture.
- Export at 2400 px wide (1600 px for tiles), then convert to AVIF or WebP. Name files as listed below.
- Keep faces out of frame (hands, legs, backs, silhouettes). This avoids look-alike and model-release problems.

## Shared style block (paste at the start of every prompt)

> Documentary outdoor photography, natural overcast daylight, soft contrast, muted earthy colours (stone grey, moss green, warm sand), one accent of deep crimson red (#A60321) in a rain jacket or strap. Shallow depth of field, 35mm lens, fine film grain, realistic and unstyled, no text, no logos, no watermark, no people's faces.

## Where each image goes

| # | File name | Section | Ratio to generate | Shown as |
| --- | --- | --- | --- | --- |
| 1 | `hero-wet-trail.jpg` | `#hero`, wide image under the headline | 16:9 | 21:9 on desktop, 16:9 on phones |
| 2 | `topic-footwear.jpg` | `#topics`, large bento tile | 4:3 | about 3:2 |
| 3 | `topic-rain-gear.jpg` | `#topics`, small tile | 16:9 | about 2:1 |
| 4 | `topic-gear-care.jpg` | `#topics`, small tile | 16:9 | about 2:1 |
| 5 | `topic-hiking.jpg` | `#topics`, medium tile | 16:9 | about 2.2:1 |
| 6 | `topic-cold-weather.jpg` | `#topics`, medium tile | 16:9 | about 2.2:1 |
| 7 | `labels-water-beading.jpg` | `#labels`, beside the explainer text | 4:3 | 4:3 |
| 8 | `privacy-quiet-trail.jpg` | `#private` card | 4:3 | 4:3 |
| 9 | `guide-fallback.jpg` | Guide cards without their own image | 4:3 | 4:3 |
| 10 | `guide-wash-rain-jacket.jpg` | Hero of the first guide, "How to wash a rain jacket" | 16:9 | 16:9 |
| 11 | `og-share.jpg` | Social share image (Open Graph) | 16:9 | 1200x630 crop |

`#checklist`, `#faq` and `#newsletter` are text-only on purpose.

## Prompts (one per image)

**1. hero-wet-trail.jpg** (16:9)
> [style block] Wide shot of a narrow hiking trail winding up a green hillside in light rain, wet rocks and puddles reflecting the grey sky, a lone hiker seen from far behind in a crimson rain jacket on the left third of the frame, big empty sky and trail on the right for calm space, mist in the valley.

**2. topic-footwear.jpg** (4:3)
> [style block] Close-up of a pair of worn leather hiking boots standing on a wet slate rock, rain drops beading on the leather and laces, a puddle in front with a soft reflection, muddy sole edge visible, moss in the background out of focus.

**3. topic-rain-gear.jpg** (16:9)
> [style block] A crimson rain jacket hanging on a wooden hook outside a mountain hut under a roof edge, rain falling just beyond the eave, water drops running off the sleeve, grey stone wall behind.

**4. topic-gear-care.jpg** (16:9)
> [style block] Hands scrubbing the sole of a muddy hiking boot with a small brush over a wooden bench, a bowl of water, a cloth and a small tin of wax beside it, soft window light, tidy workshop feel.

**5. topic-hiking.jpg** (16:9)
> [style block] Two hikers walking away along a ridge path through low fog, seen from behind as small figures with backpacks, one in a crimson jacket, layered hills fading into grey mist, lots of negative space.

**6. topic-cold-weather.jpg** (16:9)
> [style block] Close-up of gloved hands holding a steaming metal cup beside a backpack on a frosty rock at dawn, frost crystals on grass, pale pink light on the horizon, breath visible in the cold air, wool texture visible.

**7. labels-water-beading.jpg** (4:3)
> [style block] Extreme macro of rain water beading on dark technical jacket fabric, perfectly round droplets on the surface with one patch where the fabric has darkened and soaked through, sharp focus on the droplets, creamy blurred background.

**8. privacy-quiet-trail.jpg** (4:3)
> [style block] A quiet forest path at early morning, soft light through tall trees, a wooden signpost with no readable text, dew on ferns, no people, no buildings, no devices, calm and private mood.

**9. guide-fallback.jpg** (4:3)
> [style block] Flat lay from above on a dark wet stone surface: one boot, a folded crimson rain jacket, a coiled laces and a small headlamp arranged neatly, rain drops scattered on the stone, even soft light, lots of breathing room around the objects.

**10. guide-wash-rain-jacket.jpg** (16:9)
> [style block] A crimson rain jacket laid flat on a wooden table next to a basin of soapy water and a soft sponge, a hand wringing the sponge, water drops on the sleeve, bright window light from the left, calm home setting.

**11. og-share.jpg** (16:9)
> [style block] Minimal composition: a crimson rain jacket on a hanger against a plain pale stone wall, a few raindrops on the shoulders, large empty area on the left for overlaid text, centered subject kept out of the outer 10 percent so it survives cropping.

## After generating

- Check every image for invented logos, garbled text on signs or zips, extra fingers, or impossible gear. Regenerate if you find any.
- Add descriptive `alt` text when the image goes in (for example "Wet leather hiking boots on a slate rock in the rain"). Decorative placeholders currently use `aria-hidden`.
- Tell me when the files are ready and I will wire them in with `astro:assets` (responsive sizes, AVIF/WebP, explicit width and height).
