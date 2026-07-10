import { z } from "zod";

export const createEchoSchema = z.object({

  title: z.string().min(1).max(120),

  description: z.string().optional(),

  date: z.coerce.date(),

  location: z.string().optional(),

  mood: z.string().optional(),

  weather: z.string().optional(),

  tags: z.array(z.string()).optional(),

});

export const updateEchoSchema =
  createEchoSchema.partial();