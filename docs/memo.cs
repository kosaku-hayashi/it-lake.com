Todo
目次を表示


【@astrojs/sitemapによるサイトマップ生成でnoindexを考慮】
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    sitemap({
      // カスタムフィルタを追加
      filter: (page) => {
        // ページのフロントマターから `noindex` を取得
        const { noindex } = page.frontmatter;
        // `noindex` が true でないページのみサイトマップに含める
        return !noindex;
      },
      // その他のオプションがあればここに追加
    }),
  ],
});