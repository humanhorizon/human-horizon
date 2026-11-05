// Copy for each industry and team page lives in pages/industries/<slug>.ts and pages/teams/<slug>.ts.
// A page is built only once its file exists.
// Outcomes only: never the method. Goes through the hh-growth-editor EDIT pass before it is shown to YJ.
import type { FaqItem } from '../components/Faq.astro';
import type { Workflow } from './site';

export type SegmentPage = {
  seoTitle: string;
  description: string;
  kicker: string;
  title: string;
  lead: string;
  painsTitle: string;
  pains: { title: string; body: string }[];
  people: { title: string; body: string };
  changesTitle: string;
  useCases: Workflow[];
  start: { title: string; body: string };
  faqTitle: string;
  faq: FaqItem[];
  close: { title: string; sub: string };
};

const bySlug = (mods: Record<string, { default: SegmentPage }>) =>
  Object.fromEntries(Object.entries(mods).map(([path, m]) => [path.split('/').pop()!.replace(/\.ts$/, ''), m.default]));

export const industryPages: Record<string, SegmentPage> = bySlug(import.meta.glob('./pages/industries/*.ts', { eager: true }));
export const teamPages: Record<string, SegmentPage> = bySlug(import.meta.glob('./pages/teams/*.ts', { eager: true }));
