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

const experimentCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    isDraft: z.boolean(),
    pubDate: z.date().transform((str) => new Date(str).toDateString()),
    description: z.string(),
    author: z.string(),
    GIFthumbnail: image(),
    thumbnail: image(),
    alt: z.string(),
    category: z.string(),
    meta: z.array(z.object({
      type: z.string(),
      experiment: z.string()
    })).optional(),
  })
});

const bookCollection = defineCollection({
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
    projectYear: z.number().optional(),
    description: z.string(),
    roleSummary: z.string(),
    roles: z.array(z.string()),
    team: z.array(z.object({
      name: z.string(),
      position: z.string()
    })).optional(),
    processes: z.array(z.object({
      src: image(),
      header: z.string(),
      activities: z.array(z.string())

    })),
    thumbnail: image(),
    alt: z.string(),
    category: z.array(z.string()),
    technology: z.string(),
    isLocked: z.boolean(),
    cta: z.string(),
    deliverables: z.array(z.string()),
    carousel: z.array(z.object({
      src: image(),
      caption: z.string(),
    })),
    hero: image(),
    introduction: z.array(z.string()),
    objectives: z.array(z.string().optional()),
    productVision: z.string().optional(),
    problems: z.array(z.string()).optional(),
    goals: z.array(z.string()).optional(),
    challenges: z.array(z.string()).optional(),
    solutions: z.array(z.string()).optional(),
    results: z.array(z.string()).optional(),
    threeDModel: z.string().optional(),
    impact: z.array(z.object({
      header: z.string(),
      subheader: z.string(),
      description: z.string()
    })).optional(),
    website: z.string().optional(),
    homepage: z.string().optional(),
    mockups: z.array(image(), image()).optional()
  })
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    blogs: blogCollection,
    portfolio: portfolioCollection,
    experiments: experimentCollection,
    books: bookCollection
  };