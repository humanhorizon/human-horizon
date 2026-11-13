// Exports every built page for the Notion Website Sitemap: H1 text, URL, meta title, meta description,
// section, last updated and, for Insights pieces, the Editorial Calendar page it came from.
// Run after `npm run build`, at the moment of a push:
//   node scripts/sitemap-export.mjs [YYYY-MM-DD]   (push date, Singapore; defaults to today)
// A page's Last updated moves to the push date only when its visible text changed since the last
// export (tracked in sitemap-state.json, committed with the push). Articles and glossary terms use
// their own updated or publish date. Prints JSON rows for the EA to write to Notion.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const statePath = join(root, 'sitemap-state.json');
const pushDate = process.argv[2] ?? new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Singapore' });
const site = 'https://humanhorizon.io';

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});
const decode = (s) => s.replace(/&amp;|&#38;/g, '&').replace(/&#39;|&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
const pick = (html, re) => decode(html.match(re)?.[1] ?? '');

// Frontmatter of the content files, so Insights pages carry their own dates and Notion link.
const front = {};
for (const [kind, prefix] of [['insights', '/insights/'], ['glossary', '/insights/glossary/']]) {
  const dir = join(root, 'src/content', kind);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    const fm = readFileSync(join(dir, f), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const get = (k) => fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?`, 'm'))?.[1]?.trim();
    front[prefix + f.replace(/\.md$/, '')] = { date: get('updated') ?? get('date'), notion: get('notionPage'), type: get('type') ?? 'glossary' };
  }
}

const section = (path) => {
  if (path === '/') return 'Home';
  const top = path.split('/')[1];
  return { 'what-we-do': 'What we do', industries: 'Industries', teams: 'Teams', insights: 'Insights', privacy: 'Legal', terms: 'Legal' }[top] ?? 'Company';
};

const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : {};
const next = {};
const rows = walk(dist).map((file) => {
  const html = readFileSync(file, 'utf8');
  const path = '/' + relative(dist, file).replace(/index\.html$/, '').replace(/\/$/, '');
  const url = path === '/' ? `${site}/` : `${site}${path}/`; // matches the canonical, which ends in a slash
  const body = html.split(/<body[^>]*>/)[1] ?? html;
  const text = body.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const hash = createHash('sha1').update(text).digest('hex').slice(0, 16);
  const fm = front[path];
  const prev = state[path];
  const lastUpdated = fm?.date ?? (prev && prev.hash === hash ? prev.lastUpdated : pushDate);
  next[path] = { hash, lastUpdated };
  return {
    // The page's H1 as search engines read it; a kicker inside the H1 is joined to the headline with a colon.
    h1: pick(html, /<h1[^>]*>([\s\S]*?)<\/h1>/).replace(/<\/span>\s*/g, ': ').replace(/<[^>]+>/g, '').replace(/(\s*:\s*)+/g, ': ').replace(/\s+/g, ' ').trim(),
    url,
    metaTitle: pick(html, /<title>([^<]*)<\/title>/),
    metaDescription: pick(html, /<meta name="description" content="([^"]*)"/),
    section: section(path),
    lastUpdated,
    notionPage: fm?.notion ?? null,
    changed: !prev || prev.hash !== hash,
  };
}).sort((a, b) => a.url.localeCompare(b.url));

writeFileSync(statePath, JSON.stringify(next, null, 2) + '\n');
const gone = Object.keys(state).filter((p) => !next[p]);
console.log(JSON.stringify({ pushDate, rows, removed: gone.map((p) => site + p) }, null, 2));
