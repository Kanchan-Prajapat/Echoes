import { z } from "zod";

export const createMusicSchema = z.object({
  title: z
    .string()
    .min(2, "Title is required"),

  artist: z
    .string()
    .min(2, "Artist is required"),

  album: z
    .string()
    .optional(),

  cover: z
    .string()
    .url()
    .optional(),

  url: z
    .string()
    .url("Audio URL is required"),

  previewUrl: z
    .string()
    .url()
    .optional(),

  duration: z
    .number()
    .positive(),

  category: z
    .string()
    .default("General"),

  tags: z
    .array(z.string())
    .optional(),

  premium: z
    .boolean()
    .optional(),
});

export const updateMusicSchema =
  createMusicSchema.partial();