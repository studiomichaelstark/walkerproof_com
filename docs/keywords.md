# Keyword review for walkerproof.com

Source: `Keywords.txt` (old list, 41 lines, 27 unique terms) checked against the product strategy in Notion (Walkerproof HQ):

1. Core now: walking, running and hiking in any weather (shoes, rain gear, gear care).
2. Gear on the go: headlamps, power banks, weatherproof electronics, light stoves.
3. Later: camping and glamping.

**No search volume or difficulty data was available.** Every priority below is a hypothesis from intent and fit. Check each term in a keyword tool or Search Console before writing, and record the numbers in the Notion Content-Pipeline (fields `Ziel-Keyword`, `Suchintention`, `Priorität`, `Slug`).

## 1. Audit of the old list

| Old term(s) | Verdict | Why / what to do |
| --- | --- | --- |
| waterproof shoes, waterproof sneakers | Keep as hub terms | Broad and competitive. Target through the Footwear hub and the pillar guides below, not through one thin page. |
| waterproof hiking shoes, waterproof walking shoes | Keep | Core ring 1. One pillar guide each, later a "best of" roundup (Phase 2, affiliate). |
| ... for men, ... for women (about 12 variants) | Merge | Same intent as the head term. Cover them as sections or filters inside one guide. Separate pages would be thin duplicates. Revisit when roundups exist. |
| how to waterproof shoes, how to waterproof leather shoes | Keep, high priority | Clear informational intent, fits gear care, good for list building. Pillar guide plus FAQ. |
| are leather shoes waterproof | Keep | Short question. FAQ now, guide section later. |
| should running shoes be waterproof? | Keep | FAQ now. Strong opinion piece later. |
| do you need waterproof golf shoes? | Adapt | Golf is off topic. Rewritten as "Do I need waterproof hiking shoes?" (in the FAQ). |
| vessi, vessi shoes, vessi waterproof shoes, sorel sneakers | Drop for Phase 1 | Brand navigation: people want the brand's own site. Possible later as honest brand reviews if there is a real affiliate fit. |
| non slip shoes, slip resistant shoes | Drop, adapt | Mostly work-shoe intent (kitchens, healthcare). Outdoor version: "grip on wet rock and mud" (see new list). |
| best walking shoes for women | Drop as is | Too broad and not waterproof-specific. Covered by "best waterproof walking shoes for women" in a later roundup. |
| best gore | Drop | Incomplete. If Gore-Tex was meant, use "Gore-Tex vs other waterproof membranes" (see new list). |
| bulletproof excuses to get out of work | Drop | Unrelated. |
| Duplicated blocks | Deduplicate | Several terms appeared twice. |

## 2. New keyword clusters (by ring and topic)

Format: keyword idea, intent, page type, slug, priority. Intent: I = informational, C = commercial. Priority is a hypothesis.

### Ring 1: footwear
| Keyword | Intent | Type | Slug | Prio |
| --- | --- | --- | --- | --- |
| waterproof vs water-resistant shoes | I | Guide | waterproof-vs-water-resistant-shoes | High |
| how to waterproof shoes | I | Guide | how-to-waterproof-shoes | High |
| how to waterproof leather boots | I | Guide | how-to-waterproof-leather-boots | High |
| why do my waterproof shoes leak | I | Guide | why-waterproof-shoes-leak | High |
| how to dry wet hiking boots | I | Guide | how-to-dry-wet-hiking-boots | Medium |
| waterproof hiking shoes vs trail runners | C | Guide | waterproof-hiking-shoes-vs-trail-runners | Medium |
| best waterproof hiking shoes (men / women as sections) | C | Roundup (Phase 2) | best-waterproof-hiking-shoes | Medium |
| how to waterproof suede | I | Guide | how-to-waterproof-suede | Low |
| grip on wet rock and mud (soles) | I | Guide | shoe-grip-wet-rock-mud | Low |

### Ring 1: rain gear
| Keyword | Intent | Type | Slug | Prio |
| --- | --- | --- | --- | --- |
| how to wash a rain jacket | I | Guide | how-to-wash-a-rain-jacket | High |
| how to re-waterproof a rain jacket | I | Guide | how-to-re-waterproof-a-rain-jacket | High |
| what is DWR | I | Guide | what-is-dwr | Medium |
| waterproof vs water-resistant jacket | I | Guide | waterproof-vs-water-resistant-jacket | Medium |
| hydrostatic head explained (mm ratings) | I | Guide | hydrostatic-head-explained | Medium |
| Gore-Tex vs other waterproof membranes | I/C | Guide | gore-tex-vs-other-membranes | Medium |
| how to fix a leaking rain jacket (seams) | I | Guide | fix-leaking-rain-jacket | Low |
| rain pants for hiking | C | Guide | rain-pants-for-hiking | Low |

### Ring 1: gear care, cold weather, hiking
| Keyword | Intent | Type | Slug | Prio |
| --- | --- | --- | --- | --- |
| how to clean hiking boots | I | Guide | how-to-clean-hiking-boots | Medium |
| how to dry gear after a rainy hike | I | Guide | dry-gear-after-rain | Medium |
| how to get the smell out of hiking shoes | I | Guide | smelly-hiking-shoes | Low |
| what to wear hiking in the rain | I | Guide | what-to-wear-hiking-in-rain | High |
| how to layer for cold-weather hiking | I | Guide | layering-cold-weather-hiking | Medium |
| rainy day hike checklist | I | Lead magnet | gear-care-checklist | High (exists) |

### Ring 2: gear on the go
| Keyword | Intent | Type | Slug | Prio |
| --- | --- | --- | --- | --- |
| IPX ratings explained (IPX4 vs IPX7) | I | Guide | ipx-ratings-explained | Medium |
| waterproof headlamp for hiking | C | Guide / roundup | waterproof-headlamp-for-hiking | Medium |
| is my power bank waterproof | I | Guide | is-my-power-bank-waterproof | Medium |
| waterproof power bank for hiking | C | Roundup (Phase 2) | waterproof-power-bank-hiking | Low |
| how to protect electronics in the rain | I | Guide | protect-electronics-in-rain | Medium |
| can you use a camping stove in the rain | I | Guide | camping-stove-in-rain | Low |

### Ring 3 (later)
re-waterproof a tent, waterproof tents, portable power stations for camping, glamping basics. Do not build yet.

## 3. FAQ on the home page

The old list gave five usable questions; they were rewritten for the current products and extended with ring 2 questions. They live in `src/lib/faq.ts` and also feed the `FAQPage` structured data.

| Question on the page | Based on |
| --- | --- |
| What is the difference between waterproof and water-resistant? | new, supports the head terms |
| Do I need waterproof hiking shoes? | "do you need waterproof golf shoes?" (re-aimed) |
| Should running shoes be waterproof? | old list |
| Are leather shoes waterproof? | old list |
| How do I waterproof shoes? | old list ("how to waterproof (leather) shoes") |
| How do I know when my rain jacket needs re-proofing? | new, ring 1 rain gear |
| What does IPX4 or IPX7 mean on a headlamp? | new, ring 2 |
| Can I use a power bank in the rain? | new, ring 2 |

Answers are general-knowledge summaries, kept short and hedged. Re-check them against the full guides when those are written, and keep the visible text and the structured data identical.

## 4. What it takes to actually rank

- The home page now carries real text (explainer, topic descriptions, FAQ), but **rankings come from the guides**. There is no published guide yet, only a draft sample.
- Write the six "High" guides first: waterproof-vs-water-resistant-shoes, how-to-waterproof-shoes, how-to-waterproof-leather-boots, why-waterproof-shoes-leak, how-to-wash-a-rain-jacket, how-to-re-waterproof-a-rain-jacket, plus what-to-wear-hiking-in-rain.
- Each guide: answer in the first paragraph, one H1 matching the target keyword, 800 to 1500 words of useful content, a short FAQ, links to its topic hub and two related guides. Slugs must match the Notion Content-Pipeline.
- Do not publish thin variant pages (men / women / brand). Use sections.
- After launch, use Search Console impressions and positions (fields exist in the pipeline) to decide what to update.
