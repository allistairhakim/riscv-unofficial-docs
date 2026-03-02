import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const instructions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/instructions" }),
  schema: z.object({
    name: z.string(),
    fullname: z.string().optional(),
    inst: z.string().optional(),
    format: z.string().optional(),
    description: z.string(),
    encoding: z.enum(["R", "I", "S", "B", "U", "J"]).optional(),
    opcode: z.string().optional(),
    funct3: z.string().optional(),
    funct7: z.string().optional(),
    funct12: z.string().optional(),
    operation: z.string().optional(),
    exampleusage: z.string().optional(),
    notes: z.array(z.string()).optional(),
  }),
});

export const collections = { instructions };
