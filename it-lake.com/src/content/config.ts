import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    updateDate: z.string(),
    showSideToc: z.boolean(),
    noIndex: z.boolean(),
  }),
});

export const collections = {
  posts: postCollection,
};