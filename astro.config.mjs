import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Read the Insights and glossary frontmatter so the sitemap leaves out pages that are noindex
// (an empty hub, a type listing below its minimum, an empty glossary) and carries a real lastmod.
const MIN_TYPE_ITEMS = 3; // keep in step with src/data/insightsTaxonomy.ts
const read = (dir) => {
  const base = new URL(`./src/content/${dir}/`, import.meta.url);
  return readdirSync(base).filter((f) => f.endsWith('.md')).map((f) => {
    const fm = readFileSync(new URL(f, base), 'utf8').split('---')[1] ?? '';
    const get = (k) => fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?`, 'm'))?.[1]?.trim();
    return { slug: f.replace(/\.md$/, ''), type: get('type'), lastmod: get('updated') ?? get('date') };
  });
};
const articles = read('insights');
const terms = read('glossary');
const hidden = new Set([
  ...(articles.length ? [] : ['/insights']),
  ...(articles.filter((a) => a.type === 'blog').length >= MIN_TYPE_ITEMS ? [] : ['/insights/blog']),
  ...(articles.filter((a) => a.type === 'guide').length >= MIN_TYPE_ITEMS ? [] : ['/insights/guides']),
  ...(terms.length ? [] : ['/insights/glossary']),
  '/contact/thanks',
]);
const lastmod = new Map([
  ...articles.map((a) => [`/insights/${a.slug}`, a.lastmod]),
  ...terms.map((t) => [`/insights/glossary/${t.slug}`, t.lastmod]),
]);
const path = (url) => new URL(url).pathname.replace(/\/$/, '') || '/';

// Articles are paced one a day by date (src/lib/insights.ts), so a piece dated after today is not built yet.
// Links to it from other pages render as plain text until its date, instead of pointing at a missing page.
const todaySgt = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Singapore' });
const unpublished = new Set(articles.filter((a) => (a.lastmod && readDate(a.slug) > todaySgt)).map((a) => `/insights/${a.slug}`));
function readDate(slug) {
  const fm = readFileSync(new URL(`./src/content/insights/${slug}.md`, import.meta.url), 'utf8').split('---')[1] ?? '';
  return (fm.match(/^date:\s*"?([0-9-]+)/m)?.[1] ?? '');
}
// An /insights/<slug> link to a piece with no file yet (held back or not approved) is treated the same way.
const listings = new Set(['blog', 'guides', 'glossary', 'topics']);
const known = new Set(articles.map((a) => a.slug));
const isMissingArticle = (href) => {
  const m = href.match(/^\/insights\/([^/]+)$/);
  return !!m && !listings.has(m[1]) && !known.has(m[1]);
};
function unlinkUnpublished() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.flatMap((child) => {
      if (child.type === 'element' && child.tagName === 'a') {
        const href = String(child.properties?.href ?? '').replace(/[#?].*$/, '').replace(/\/$/, '');
        if (unpublished.has(href) || isMissingArticle(href)) return child.children ?? [];
      }
      walk(child);
      return [child];
    });
  };
  return walk;
}

export default defineConfig({
  site: 'https://humanhorizon.io',
  markdown: { rehypePlugins: [unlinkUnpublished] },
  integrations: [sitemap({
    filter: (page) => !hidden.has(path(page)),
    serialize: (item) => {
      const d = lastmod.get(path(item.url));
      return d ? { ...item, lastmod: new Date(d).toISOString() } : item;
    },
  })],
});
