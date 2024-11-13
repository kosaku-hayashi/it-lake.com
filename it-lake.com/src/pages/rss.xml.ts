import { getCollection } from 'astro:content';
import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context: { site: any; }) {
  const posts = (await getCollection('posts')).filter((post) => !post.data.noIndex);
  return rss({
    title: 'it-lake.com',
    description: 'it-lake.com',
    site: context.site,
    // stylesheet: '/rss/styles.xsl',
    items: posts.map((post) => {
      return {
        title: post.data.title,
        description: post.data.description,
        content: sanitizeHtml(parser.render(post.body)),
      }
    }),
    // items: await pagesGlobToRssItems(import.meta.glob('../content/**/*.mdx'))
  });
}