import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    description: z.string(),
    cover: z
        .union([
          image(),
          z.string(),
        ])
        .optional(),         // オプションに設定
    tags: z.array(z.string()),
    updateDate: z.string().optional(),
    showSideToc: z.boolean(),
    noIndex: z.boolean(),
  }),
});

export const collections = {
  posts: postCollection,
};