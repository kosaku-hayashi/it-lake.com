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


【親コンポーネント側で定義したスタイルを子に適用する】
// 親
<Sidebar class="sidebar" />

<style>
.sidebar {
  flex: 1;
  background-color: #ffffff;
  padding: 1rem;
  /* border-left: 0px solid #eaeaea; */
  box-sizing: border-box;
}

// 子
---
const { class: className, ...rest } = Astro.props;
---

<aside class={className} {...rest} style="display: flex; flex-direction: column; gap:80px">