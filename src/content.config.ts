import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
    description: z.string().optional(),
    toc: z.boolean().optional().default(false),
    // posts use either `tag` or `tags` — normalise both to an array
    tag: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.union([z.string(), z.array(z.string())]).optional(),
  }),
  // Derived field: merge tag/tags into a single array accessible as entry.data.allTags
})

export const collections = { posts }
