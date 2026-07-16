import { z } from "zod";

export const createUserSchema = z.object({

  username: z
    .string()
    .min(3)
    .max(25),

  email: z
    .string()
    .email(),

  password: z
    .string()
    .min(8),

});

export const updateProfileSchema = z.object({

  username: z
    .string()
    .trim()
    .min(3)
    .max(25),

  avatar: z
    .string()
    .optional(),

  bio: z
    .string()
    .max(250)
    .optional(),

  dateOfBirth: z.string(),

  gender: z
    .enum([
      "male",
      "female",
      "other",
      "prefer_not_to_say",
    ])
    .optional(),

  city: z
    .string()
    .trim()
    .max(50)
    .optional(),

});