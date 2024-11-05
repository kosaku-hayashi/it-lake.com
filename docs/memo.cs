Todo
<ul><li>の点を消す
タグページを作成して、PostCardのタグをリンクする
タグ間に余白をいれる
公開日と更新日を示すマークを表示
サムネイル画像クリックでもページ遷移するように
サイドバーを作成する（簡単なプロフィール タグ 月次アーカイブ 追従する記事の目次）


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