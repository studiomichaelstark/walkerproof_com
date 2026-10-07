# walkerproof.com

Static, privacy-first English content site. Astro + TypeScript (strict) + Tailwind CSS.

## Setup

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Scripts

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Dev server (drafts are visible in dev only) |
| `pnpm check` | `astro check` (types, content schema) |
| `pnpm build` | Static build to `dist/` |
| `pnpm preview` | Serve `dist/` locally |

## Content workflow

1. Notion (Walkerproof HQ) holds planning and status.
2. Add `src/content/guides/en/<slug>.md`. The slug matches the Notion Content-Pipeline.
3. Frontmatter: `title` (max 70), `description` (max 160), `topic`, `author`, `publishedAt`, `translationKey`, optional `updatedAt`, `hero`, `heroAlt`, `hasAffiliateLinks`, `draft`.
4. `draft: true` guides never render in production.
5. Open a pull request. Never push to `main`.

Topics: `src/content/topics/*.yaml`. Authors: `src/content/authors/*.yaml`.

## Design

- Style follows the DesignLab template (designlab.framer.website): black ground, light-weight white type, lime primary buttons, orange glow, glass cards, floating pill navigation with an active state.
- One font: Inter (variable, self-hosted via Fontsource). Tokens live in `src/styles/global.css`.
- Dark is the default. The header toggle switches to a light theme for the current page view only. Nothing is stored (no cookie, no localStorage), so it resets on navigation.
- Motion lives in `src/scripts/motion.ts`: smooth scroll (Lenis), fade-up reveal (`data-reveal`), hover lift (`data-lift`), parallax columns (`data-parallax`), sticky steps (`data-steps`), a hero demo and a CSS marquee. Libraries are bundled with the site (no CDN, no cookies). Everything is off when the visitor prefers reduced motion.
- Photo areas are glass placeholders with a warm glow until real photos exist (see `docs/image-prompts.md`).
- The logo files are not used on the page yet; the header shows "Walkerproof" as text.
- Every page section has its own `id`.

## i18n

Locale `en` only, no URL prefix. A new locale gets a prefix (`/de/`): add it to `astro.config.mjs`, create `src/content/guides/de/`, and link versions with the same `translationKey`.

## Deployment

Cloudflare Workers with static assets, connected to this GitHub repo (Workers Builds). Config: `wrangler.jsonc` (serves `dist/`, uses `404.html` for unknown paths). Node version: `.node-version`.

Cloudflare build settings: build command `pnpm run build`, deploy command `npx wrangler deploy`, production branch `main`. Pull request branches get preview builds. No adapter needed.

## Privacy

No cookies, no localStorage, no third-party requests, self-hosted fonts (Fontsource). Optional Cloudflare Web Analytics: set `PUBLIC_CF_BEACON_TOKEN` (see `.env.example`). Enabling it loads `static.cloudflareinsights.com`; update the privacy policy first.

## TODOs

- Newsletter backend (form is disabled until `NEWSLETTER_OPEN` in `src/lib/site.ts` is set to true): `NewsletterForm` posts to `/api/newsletter`, which does not exist yet. Implement a Cloudflare Pages Function that calls the Brevo double opt-in API (`POST /v3/contacts/doubleOptinConfirmation`), then redirects to `/newsletter/confirm/`. The Brevo confirmation template redirects to `/newsletter/welcome/`. Keep the API key in a Cloudflare secret.
- Privacy policy is a DRAFT: get it legally reviewed before launch.
- Link `/legal/affiliate-disclosure/` once affiliate links exist.
- Replace placeholder author bio, About text, checklist content, and the lead magnet delivery.
- Confirm the current Cloudflare deployment path for walkerproof.com (DNS is on Cloudflare; nothing was serving when checked).
- Delete the sample guide when real content exists.
