import { defineCollection, z } from "astro:content";
// z -> zod schema

const products = defineCollection({
    schema: z.object({
        name: z.string(),
        img: z.string(),
        description: z.string(),
        quantity: z.number(),
        price: z.number(),
    })
})

export const collections = { products }