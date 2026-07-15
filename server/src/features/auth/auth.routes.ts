import { Router } from "express";

import {
  signupController,
  loginController,
  meController,
  updateProfileController,
  changePasswordController,
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
  "/me",
  authenticate,
  updateProfileController
);

router.patch(
  "/change-password",
  authenticate,
  changePasswordController
);

export default router;