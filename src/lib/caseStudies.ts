// Case studies: published ones in a build, drafts too while running the dev server so they can be reviewed.
import { getCollection, type CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'caseStudies'>;
export type CaseWorkflow = CaseStudy['data']['workflows'][number];

export async function getCaseStudies() {
  return (await getCollection('caseStudies'))
    .filter((c) => c.data.publish || import.meta.env.DEV)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Case studies tagged with an industry or team slug, for the "in practice" block on that page.
export async function caseStudiesFor(kind: 'industries' | 'teams', slug: string) {
  return (await getCaseStudies()).filter((c) => (kind === 'industries' ? c.data.industry === slug : c.data.teams.includes(slug)));
}

// Featured case studies for the About page.
export async function getFeatured() {
  return (await getCaseStudies()).filter((c) => c.data.featured);
}
