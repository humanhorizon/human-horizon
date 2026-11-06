// Insights articles and glossary terms. Each file is written by the EA from an approved row on the
// Notion review board (Content > Editorial Calendar); edit the Notion page, not the file.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categoryNames } from './data/insightsTaxonomy';

const common = {
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string().default('Human Horizon'),
  keyword: z.string(),
  category: z.enum(categoryNames),
  tags: z.array(z.string()).max(3).default([]),
  audience: z.array(z.string()),
  notionPage: z.string().url(),
  publishedVersion: z.string(),
};

const insights = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/insights' }),
  schema: z.object({
    ...common,
    title: z.string(),
    seoTitle: z.string().optional(),
    type: z.enum(['blog', 'guide']),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/glossary' }),
  schema: z.object({
    ...common,
    term: z.string(),
    seoTitle: z.string().optional(),
    // One or two sentences: shown on the A to Z index and as the first line of the term page.
    short: z.string(),
    related: z.array(z.string()).default([]),
    sources: z.array(z.string().url()).default([]),
  }),
});

export const collections = { insights, glossary };
