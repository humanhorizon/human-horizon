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

// Case studies. Built only when publish is true, which the EA sets once the Notion row has both
// Client approved and Approve to publish ticked. Drafts show in dev only.
const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: z.object({
    client: z.string(),
    website: z.string().url().optional(),
    logo: z.string().optional(),
    about: z.string(),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    summary: z.string(),
    tools: z.array(z.string()).default([]),
    industry: z.string(),
    teams: z.array(z.string()).default([]),
    results: z.array(z.object({ value: z.string(), label: z.string() })).min(1).max(3),
    workflows: z.array(z.object({
      team: z.string(),
      name: z.string(),
      outcome: z.string(),
      before: z.string(),
      after: z.string(),
      people: z.string(),
      // Time the work took before and after, shown as two bars to scale.
      time: z.object({ before: z.string(), after: z.string(), beforeMinutes: z.number(), afterMinutes: z.number() }),
    })).min(1),
    // The team as it works now: the people first, then the AI assistants alongside them.
    team: z.object({
      people: z.string(),
      assistants: z.array(z.object({ name: z.string(), does: z.string() })).default([]),
    }).optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    publish: z.boolean().default(false),
    notionPage: z.string().url(),
  }),
});

export const collections = { insights, glossary, caseStudies };
