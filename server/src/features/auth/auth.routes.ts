import { Router } from "express";

import {
  signupController,
  loginController,
  meController,
  updateProfileController,
} from "./auth.controller.js";

import {
  authenticate,
} from "../../middleware/auth.middleware.js";

const router = Router();

/* -------------------------------- */
/* Public Routes */
/* -------------------------------- */

// Register User
router.post(
  "/signup",
  signupController
);

// Login User
router.post(
  "/login",
  loginController
);

/* -------------------------------- */
/* Protected Routes */
/* -------------------------------- */

// Get Current User
router.get(
  "/me",
  authenticate,
  meController
);

// Update Profile
router.patch(
  "/profile",
  authenticate,
  updateProfileController
);

export default router;