import { getCollection, type CollectionEntry } from 'astro:content';

export type Guide = CollectionEntry<'guides'>;

/** Drafts are visible in dev only, never in production builds. */
export async function getGuides(): Promise<Guide[]> {
  const guides = await getCollection(
    'guides',
    ({ data }) => import.meta.env.DEV || !data.draft,
  );
  return guides.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

/** Entry ids look like `en/my-slug`: first folder is the language. */
export function guideLang(guide: Guide): string {
  return guide.id.split('/')[0] ?? 'en';
}

export function guideSlug(guide: Guide): string {
  return guide.id.split('/').slice(1).join('/');
}

export function guideUrl(guide: Guide): string {
  const lang = guideLang(guide);
  return `${lang === 'en' ? '' : `/${lang}`}/guides/${guideSlug(guide)}/`;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
