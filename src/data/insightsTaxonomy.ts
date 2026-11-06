// How Insights is organised. Mirrors the Category, Content type and Tags fields on the Notion
// Editorial Calendar; change both together.

export const categories = [
  { name: 'AI basics', slug: 'ai-basics', blurb: 'Plain explanations of the ideas and words behind AI at work.' },
  { name: 'AI training', slug: 'ai-training', blurb: 'Helping teams learn AI on their own work, and checking that it lasts.' },
  { name: 'AI implementation', slug: 'ai-implementation', blurb: 'Building workflows with AI in the middle and a person checking the result.' },
  { name: 'AI adoption', slug: 'ai-adoption', blurb: 'Keeping new ways of working in use after the first month.' },
  { name: 'AI governance', slug: 'ai-governance', blurb: 'Rules for data, tools and accountability, written for Singapore businesses.' },
  { name: 'AI tools', slug: 'ai-tools', blurb: 'Choosing and rolling out Copilot, ChatGPT, Gemini and other tools.' },
] as const;

export type CategoryName = (typeof categories)[number]['name'];
export const categoryNames = categories.map((c) => c.name) as [CategoryName, ...CategoryName[]];
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const categoryByName = (name: string) => categories.find((c) => c.name === name)!;

// A topic page (/insights/topics/<slug>) is built only once its category holds this many pieces
// and has a written intro below. Until then the hub filters by topic without separate URLs.
export const MIN_CATEGORY_ITEMS = 5;
export const categoryIntros: Partial<Record<string, string>> = {};

// Type listings (/insights/blog, /insights/guides) stay out of search until they hold this many.
export const MIN_TYPE_ITEMS = 3;

export const types = {
  blog: { label: 'Blog', plural: 'Blog', href: '/insights/blog', blurb: 'Points of view and research on AI at work.' },
  guide: { label: 'Guide', plural: 'Guides', href: '/insights/guides', blurb: 'Step-by-step help with a decision or a rollout.' },
  glossary: { label: 'Glossary', plural: 'Glossary', href: '/insights/glossary', blurb: 'AI terms explained in plain English.' },
} as const;
