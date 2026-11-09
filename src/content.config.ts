import { defineCollection } from 'astro:content';
import { z} from 'astro/zod';
import { glob } from 'astro/loaders';

// The language is the folder: posts/en -> English (default), posts/pt -> Portuguese.
// A file with the same name in both folders gets the same slug, so the two versions link to each other.
const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/en' }),
  schema: postSchema,
});

const blogPt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts/pt' }),
  schema: postSchema,
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.url().optional(),
    repo: z.url().optional(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, blogPt, projects };
