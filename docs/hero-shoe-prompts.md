# Hero shoe prompts (Google Flow)

Goal: two shoes with transparent background for the home hero. They take turns lifting (step cycle), animated in `src/scripts/motion.ts`.

## How the reference photos are used

- `W+NIKE+ACG+ZEGAMA+TRAIL (1).avif`: side view, toe points right, inner (medial) side with text print. This is a **left** shoe.
- `W+NIKE+ACG+ZEGAMA+TRAIL.avif`: side view, toe points left, outer (lateral) side with the swoosh. Also a left shoe. Mirrored horizontally it becomes the **right** shoe with its outer side, toe pointing right.
- `W+NIKE+ACG+ZEGAMA+TRAIL (2).avif`: close-up from above in the target perspective (shoe tipped up, seen from above and slightly from the front). Used only for the camera angle, never as the shoe itself.

Both shoes point to the upper right (direction of travel). That is what makes the animation read as a step.

## Shared settings

| Setting | Value |
| --- | --- |
| Canvas | 1:1, 2048 x 2048 (if Flow offers no 1:1, use 4:3 and keep the shoe centred) |
| Background | transparent (PNG with alpha) |
| Framing | whole shoe visible, shoe fills about 85 percent of the canvas, centred |
| Shadow | none (the site adds its own) |
| Output | `shoe-right.png` and `shoe-left.png` |

Generate the right shoe first. Add its result as an extra reference image for the left shoe so angle, scale and light match.

## Prompt 1: right shoe

Attach: reference photo `TRAIL.avif` (toe left, swoosh) and `TRAIL (2).avif` (perspective).

> Use the first attached photo as the exact product and the second attached photo only as the camera perspective. Create one photorealistic product render of the RIGHT shoe: take the shoe from the first photo and mirror it horizontally so the toe points to the right and the outer side with the swoosh faces the camera. Show it in the perspective of the second photo: viewed from above and slightly from the front, the shoe tipped upward about 25 to 30 degrees with the toe pointing to the upper right, forefoot lifted and heel lower, as if pushing off mid-stride. The whole shoe must be visible. Keep the design exactly as in the photos: white knit upper with perforations, laces and lace cage, pull loop at the heel, cream midsole, orange outsole with lugs, all panels and proportions. Do not invent any new text, logos or details. Soft neutral studio light from the upper left, gentle rim light, sharp focus, realistic materials. Isolated on a fully transparent background, PNG with alpha channel, no floor, no shadow, no reflection, no gradient. Square 1:1 canvas, shoe centred and filling about 85 percent of the frame.

## Prompt 2: left shoe

Attach: reference photo `TRAIL (1).avif` (toe right, inner side), `TRAIL (2).avif` (perspective) and the finished right shoe from prompt 1 (for matching angle and scale).

> Use the first attached photo as the exact product, the second only as the camera perspective, and the third (the right shoe I already generated) as the reference for angle, scale, lighting and framing. Create one photorealistic product render of the LEFT shoe, toe pointing to the right, inner side with the printed text facing the camera. Same perspective as the right shoe: viewed from above and slightly from the front, tipped upward about 25 to 30 degrees with the toe pointing to the upper right, forefoot lifted and heel lower. The whole shoe must be visible. Keep the design exactly as in the photos and do not invent any new text, logos or details. Same soft studio light from the upper left, same sharpness and colour. Isolated on a fully transparent background, PNG with alpha channel, no floor, no shadow, no reflection, no gradient. Square 1:1 canvas, shoe centred and filling about 85 percent of the frame.

## If the background is not really transparent

Some generators draw a checkerboard or a white background instead of real alpha. Then generate again with this sentence instead of the transparency line:

> Plain flat pure white background (#FFFFFF), no floor, no shadow, no gradient.

Give me the files and I cut them out locally (macOS Vision subject mask), trim them tight, and wire them in. Dropping `shoe-left.png` and `shoe-right.png` into `src/assets/hero/` is all the site needs.

## Rights

The shoe is a third-party product with its logos. Before the images go live, check the affiliate programme's rules (many allow their own product creatives, few allow AI-edited ones) and consider a plain colourway of a brand that explicitly supplies hero assets.
