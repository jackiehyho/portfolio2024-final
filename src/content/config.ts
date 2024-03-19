// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      isDraft: z.boolean(),
      pubDate: z.date().transform((str) => new Date(str).toDateString()),
      description: z.string(),
      author: z.string(),
      thumbnail: image(),
      alt: z.string(),
      category: z.string()
    })
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    isDraft: z.boolean(),
    pubDate: z.date().transform((str) => new Date(str).toDateString()),
    projectDuration: z.string(),
    description: z.string(),
    author: z.string(),
    thumbnail: image(),
    alt: z.string(),
    category: z.string(),
    technology: z.string(),
    isLocked: z.boolean(),
    cta: z.string(),
    deliverables: z.array(z.string())

  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    blogs: blogCollection,
    portfolio: portfolioCollection,
  };