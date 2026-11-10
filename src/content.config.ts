import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada artículo vive en src/content/blog/en/ o src/content/blog/es/.
// Si un artículo existe en ambos idiomas, usa el mismo translationKey en los dos.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
