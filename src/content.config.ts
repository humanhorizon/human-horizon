// Insights articles. Each file is written by the EA from an approved row on the Notion review board
// (Content > Editorial Calendar); edit the Notion page, not the file.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Human Horizon'),
    keyword: z.string(),
    topic: z.string(),
    audience: z.array(z.string()),
    notionPage: z.string().url(),
    publishedVersion: z.string(),
  }),
});

export const collections = { insights };
