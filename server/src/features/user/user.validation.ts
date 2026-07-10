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
    .min(3)
    .max(25)
    .optional(),

  avatar: z
    .string()
    .optional(),

  bio: z
    .string()
    .max(250)
    .optional(),

  onboardingCompleted:
    z.boolean().optional(),

});