Todo
インポートしたスタイルシートで記事の見出しにのみスタイルを適用する
https://docs.astro.build/ja/guides/styling/#%E5%A4%96%E9%83%A8%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB



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


これからmarkdown形式の画像を、特定のAstroコンポーネントに書き換える作業をしていただきます。
元の文字列と変換後の期待結果を下記に示すので、この通りにお願いします。
また、説明等は不要なので、変換結果のみ提示してください。それでは準備はよろしいですか？

【Markdown形式の画像】
![raspberrypi-imager](https://it-lake.com/wp-content/uploads/2022/11/raspberrypi-imager.jpg)

【変換結果】
<Image src="https://it-lake.com/wp-content/uploads/2022/11/raspberrypi-imager.jpg" alt="raspberrypi-imager"/>