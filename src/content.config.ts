import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/guides',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      description: z.string().max(160),
      topic: reference('topics'),
      author: reference('authors'),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      hasAffiliateLinks: z.boolean().default(false),
      translationKey: z.string(),
      draft: z.boolean().default(false),
    }),
});

const topics = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    url: z.url().optional(),
  }),
});

export const collections = { guides, topics, authors };
