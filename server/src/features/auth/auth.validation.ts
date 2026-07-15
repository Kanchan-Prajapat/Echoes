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

  onboardingCompleted: z
    .boolean()
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