import { z, defineCollection } from "astro:content"

const blogSchema = defineCollection({
  schema: z.object({
    title: z
      .string()
      .max(60, "For optimize SEO, please provide a tilte with 60 ch or less"),
    date: z.date(),
    author: z.enum(["Jhon Doe", "Jane Doe"]),
    description: z
      .string()
      .max(
        160,
        "For optimize SEO, please provide a description with 160 ch or less"
      ),
    draft: z.boolean().default(false),
  }),
})

export const collections = {
  blog: blogSchema
}
