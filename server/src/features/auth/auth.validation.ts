import { z } from "zod";

/* ---------------------------- */
/* Signup */
/* ---------------------------- */

export const signupSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(25, "Username cannot exceed 25 characters"),

  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

/* ---------------------------- */
/* Login */
/* ---------------------------- */

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

/* ---------------------------- */
/* Update Profile */
/* ---------------------------- */

export const updateProfileSchema = z.object({

  username: z
    .string()
    .trim()
    .min(3)
    .max(25)
    .optional(),

  bio: z
    .string()
    .max(250)
    .optional(),

  avatar: z
    .string()
    .optional(),

  dateOfBirth: z.coerce.date().optional(),

  gender: z.enum([
    "male",
    "female",
    "other",
    "prefer_not_to_say",
  ]).optional(),

  city: z
    .string()
    .max(100)
    .optional(),

});


export const changePasswordSchema = z.object({

  currentPassword: z
    .string()
    .min(6),

  newPassword: z
    .string()
    .min(6),

});