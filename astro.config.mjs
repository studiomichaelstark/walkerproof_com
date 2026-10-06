// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static output. Deploy: Cloudflare Pages (git integration), build command `npm run build`, output dir `dist`.
export default defineConfig({
  site: 'https://walkerproof.com',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/legal/affiliate-disclosure/') && !page.includes('/newsletter/') })],
  vite: { plugins: [tailwindcss()] },
});
