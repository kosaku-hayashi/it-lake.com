// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://it-lake.com",
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'slack-dark',
      wrap:false, // 水平スクロールを防止するために行末で折り返す
    },
  },
});