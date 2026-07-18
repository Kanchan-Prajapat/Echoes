import { z } from "zod";

const musicSchema = z.object({
  id: z.string(),

  title: z.string(),

  artist: z.string(),

  cover: z.string(),

  url: z.string(),

  duration: z.number(),

  source: z.enum([
    "echoes",
    "uploaded",
  ]),
});

const mediaSchema = z.object({
  url: z.string(),
  publicId: z.string(),
  type: z.enum(["image", "video"]),
});

export const createEchoSchema = z.object({
  title: z.string().min(1).max(120),
  description: z.string().max(5000).optional(),
  date: z.coerce.date(),
  location: z.string().max(150).optional(),
  mood: z.string().max(50).optional(),
  weather: z.string().max(50).optional(),
  tags: z.array(z.string()).optional(),

  media: z.array(mediaSchema),

  coverMediaId: z.string().optional(),

  music: musicSchema.optional(),
});

export const updateEchoSchema =
  createEchoSchema.partial();


