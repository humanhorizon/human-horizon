// Loads Insights articles and glossary terms and shapes them for cards, listings and related links.
import { getCollection, type CollectionEntry } from 'astro:content';
import { categoryByName, types } from '../data/insightsTaxonomy';

export type Article = CollectionEntry<'insights'>;
export type Term = CollectionEntry<'glossary'>;

export interface Card {
  href: string;
  type: 'blog' | 'guide' | 'glossary';
  typeLabel: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  // Which cover artwork to draw: the piece's position in its list, so neighbours never match.
  art: number;
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-SG', { day: 'numeric', month: 'long', year: 'numeric' });

export async function getArticles() {
  return (await getCollection('insights')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTerms() {
  return (await getCollection('glossary')).sort((a, b) => a.data.term.localeCompare(b.data.term, 'en'));
}

export const articleCard = (a: Article, i = 0): Card => ({
  href: `/insights/${a.id}`,
  type: a.data.type,
  typeLabel: types[a.data.type].label,
  category: a.data.category,
  categorySlug: categoryByName(a.data.category).slug,
  title: a.data.title,
  description: a.data.description,
  date: a.data.updated ?? a.data.date,
  tags: a.data.tags,
  art: i,
});

export const termCard = (t: Term, i = 0): Card => ({
  href: `/insights/glossary/${t.id}`,
  type: 'glossary',
  typeLabel: types.glossary.label,
  category: t.data.category,
  categorySlug: categoryByName(t.data.category).slug,
  title: t.data.term,
  description: t.data.short,
  date: t.data.updated ?? t.data.date,
  tags: t.data.tags,
  art: i,
});

// Related reading: same category scores 2, each shared tag scores 1; newest first on a tie.
export function related(self: Card, pool: Card[], n = 3) {
  return pool
    .filter((c) => c.href !== self.href)
    .map((c) => ({ c, score: (c.category === self.category ? 2 : 0) + c.tags.filter((t) => self.tags.includes(t)).length }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.c.date.valueOf() - a.c.date.valueOf())
    .slice(0, n)
    .map((x) => x.c);
}

// First letter for the A to Z index; digits and symbols group under '#'.
export const letterOf = (term: string) => (/^[a-z]/i.test(term) ? term[0].toUpperCase() : '#');
