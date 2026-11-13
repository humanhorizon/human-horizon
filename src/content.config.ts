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
    // Stacked logo for the tall tile on case study cards.
    logoStacked: z.string().optional(),
    about: z.string(),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    summary: z.string(),
    // Short line under the title on case study cards.
    subtitle: z.string(),
    tools: z.array(z.string()).default([]),
    services: z.array(z.enum(['implement', 'train', 'adopt'])).default([]),
    industry: z.string(),
    teams: z.array(z.string()).default([]),
    workflows: z.array(z.object({
      team: z.string(),
      name: z.string(),
      // Result label for the header, after the %: e.g. "less time sourcing a product".
      result: z.string(),
      // One line each, under the workflow name.
      summary: z.object({ before: z.string(), now: z.string() }),
      before: z.string(),
      after: z.string(),
      // Which staff own this work, e.g. Procurement staff, and where their time goes now.
      staff: z.string(),
      people: z.string(),
      // Time in working minutes (8-hour day), so the bars and the % change compare like with like.
      time: z.object({ before: z.string(), after: z.string(), beforeMinutes: z.number(), afterMinutes: z.number(), unit: z.string() }),
      humans: z.number().int().min(1),
      agents: z.number().int().min(1),
    })).min(1),
    // The team then and now: who did the work before, then the staff (first) and AI assistants after.
    team: z.object({
      then: z.array(z.object({ role: z.string(), did: z.string() })),
      now: z.array(z.object({ role: z.string(), does: z.string() })),
      assistants: z.array(z.object({ name: z.string(), does: z.string() })).default([]),
    }).optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    publish: z.boolean().default(false),
    // Shown on the About page. Set from the Featured box on the Notion row.
    featured: z.boolean().default(false),
    notionPage: z.string().url(),
  }),
});

export const collections = { insights, glossary, caseStudies };
