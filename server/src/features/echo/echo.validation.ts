import { z } from "zod";

const mediaSchema = z.object({
  url: z.string().url("Invalid media URL"),

  publicId: z.string().min(1, "Public ID is required"),

  type: z.enum(["image", "video"]),
});

export const createEchoSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(120, "Title cannot exceed 120 characters"),

  description: z
    .string()
    .max(5000)
    .optional()
    .default(""),

  date: z.coerce.date(),

  location: z.string().optional().default(""),

  mood: z.string().optional().default(""),

  weather: z.string().optional().default(""),

  favorite: z.boolean().optional().default(false),

  tags: z.array(z.string()).optional().default([]),

  media: z
    .array(mediaSchema)
    .min(1, "At least one media item is required"),

  coverMediaId: z.string().optional().default(""),
});

export const updateEchoSchema =
  createEchoSchema.partial();

export type CreateEchoInput =
  z.infer<typeof createEchoSchema>;

export type UpdateEchoInput =
  z.infer<typeof updateEchoSchema>;