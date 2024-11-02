【三項演算子の書き方】
---
const visible = true;
---

{ visible && < p > 表示されます </ p >}
visible ? < p > 表示されます </ p > : < p > こっちは表示されません！</ p >


【TSでコンポーネントのpropsを型定義】
---
export interface Props
{
    title: string;
	body: string;
	href: string;
}

const { href, title, body } = Astro.props;
---

【ドメイン直下の / blogディレクトリにページを生成したい場合】
// astro.config.mjs
const subfolder = '/blog/'
export default defineConfig({
  base: subfolder,
  outDir: `./ dist${ subfolder}`,
});


【タグの設定を外部ファイル化して、タグの名前とID名（スラッグ）を別で管理することでurlと表示名を分岐】
export const tagsData = [
  { tagName: "HTML", tagSlug: "html" },
  { tagName: "マーケティング", tagSlug: "marketing" },
];