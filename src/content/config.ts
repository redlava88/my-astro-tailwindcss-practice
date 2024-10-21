import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const enblog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/blog/en" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const zhblog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/blog/zh-cn" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    url: z.string(),
  }),
});

const authors = defineCollection({
  loader: file("src/content/authors/authors.json"),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    age: z.number(),
    nationality: z.string(),
    genre: z.array(z.string()),
  }),
});

export const collections = { enblog, zhblog, authors };
