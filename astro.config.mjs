// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/** @type {Record<string, { lang: string; url: string }[]>} 
*/
const alternates = {};
const pairs = {
  'https://samb.fyi/': 'https://samb.fyi/pt/',
  'https://samb.fyi/projects/': 'https://samb.fyi/pt/projects/',
  'https://samb.fyi/services/': 'https://samb.fyi/pt/services/',
  'https://samb.fyi/stack/': 'https://samb.fyi/pt/stack/',
  'https://samb.fyi/contact/': 'https://samb.fyi/pt/contact/',
  'https://samb.fyi/blog/': 'https://samb.fyi/pt/blog/',
  'https://samb.fyi/blog/data-mapper/': 'https://samb.fyi/pt/blog/data-mapper/',
  'https://samb.fyi/blog/fomo-ai/': 'https://samb.fyi/pt/blog/fomo-ai/',
};
for (const [en, pt] of Object.entries(pairs)) {
  const links = [
    { lang: 'en-US', url: en },
    { lang: 'pt-BR', url: pt },
    { lang: 'x-default', url: en },
  ];
  alternates[en] = links;
  alternates[pt] = links;
}



// https://astro.build/config
export default defineConfig({
  site: 'https://samb.fyi',
  integrations: [sitemap({
     serialize(item) {
        item.links = alternates[item.url] ?? item.links;
        return item;
     },
    })],
  vite: {
    plugins: [tailwindcss()]
  }
});