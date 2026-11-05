import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';

// The Insights index stays out of the sitemap (and is noindex) until its first article is published.
const hasArticles = readdirSync(new URL('./src/content/insights', import.meta.url)).some((f) => f.endsWith('.md'));

export default defineConfig({
  site: 'https://humanhorizon.io',
  integrations: [sitemap({ filter: (page) => hasArticles || !page.includes('/insights') })],
});
