import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    customSlug: z.string(),
    updateDate: z.string(),
    description: z.string(),
    thumbnail: z.string().url(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postCollection,
};