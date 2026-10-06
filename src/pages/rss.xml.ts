import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getGuides, guideUrl } from '../lib/guides';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const guides = (await getGuides()).filter((g) => g.id.startsWith('en/'));
  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site!,
    items: guides.map((g) => ({
      title: g.data.title,
      description: g.data.description,
      pubDate: g.data.publishedAt,
      link: guideUrl(g),
    })),
  });
}
