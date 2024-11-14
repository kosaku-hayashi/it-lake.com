// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://it-lake.com",
  integrations: [mdx(),sitemap({
    filter: (page) =>
      page !== 'https://it-lake.com/posts/csharptest/' &&
      page !== 'https://it-lake.com/posts/mdx-test/',
      // lastmod: new Date('2022-02-24'),
  })],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'slack-dark',
      wrap:false, // 水平スクロールを防止するために行末で折り返す
    },
  },
});