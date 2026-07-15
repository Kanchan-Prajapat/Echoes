import { z } from "zod";

export const createEchoSchema = z.object({

  title: z.string().min(1).max(120),

description: z.string().max(5000).optional(),

  date: z.coerce.date(),

location: z.string().max(150).optional(),

mood: z.string().max(50).optional(),

weather: z.string().max(50).optional(),

  tags: z.array(z.string()).optional(),

});

export const updateEchoSchema =
  createEchoSchema.partial();