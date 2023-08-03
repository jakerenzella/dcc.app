// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

const papersCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    authors: z.array(z.string()),
    title: z.string(),
    year: z.string(),
    url: z.string(),
    doi: z.string(),
    abstract: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'papers': papersCollection,
};