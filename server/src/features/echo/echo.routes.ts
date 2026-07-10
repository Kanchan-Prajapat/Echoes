import { Router } from "express";

import {
  createEchoController,
  getAllEchoesController,
  getEchoByIdController,
  updateEchoController,
  deleteEchoController,
  searchEchoesController,
  toggleFavoriteController,
  addMediaToEchoController,
  deleteMediaController,
  setCoverMediaController,
} from "./echo.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

/* -------------------------------- */
/* All Echo Routes Require Login */
/* -------------------------------- */

router.use(authenticate);

/* -------------------------------- */
/* Create */
/* -------------------------------- */

router.post(
  "/",
  createEchoController
);

/* -------------------------------- */
/* Get All */
/* -------------------------------- */

router.get(
  "/",
  getAllEchoesController
);

/* -------------------------------- */
/* Search */
/* -------------------------------- */

router.get(
  "/search",
  searchEchoesController
);

/* -------------------------------- */
/* Get One */
/* -------------------------------- */

router.get(
  "/:id",
  getEchoByIdController
);

/* -------------------------------- */
/* Update */
/* -------------------------------- */

router.patch(
  "/:id",
  updateEchoController
);

/* -------------------------------- */
/* Delete */
/* -------------------------------- */

router.delete(
  "/:id",
  deleteEchoController
);

/* -------------------------------- */
/* Favorite */
/* -------------------------------- */

router.patch(
  "/:id/favorite",
  toggleFavoriteController
);

/* -------------------------------- */
/* Cover */
/* -------------------------------- */

router.patch(
  "/:id/cover",
  setCoverMediaController
);

/* -------------------------------- */
/* Add Media */
/* -------------------------------- */

router.patch(
  "/:id/media",
  addMediaToEchoController
);

/* -------------------------------- */
/* Delete Media */
/* -------------------------------- */

router.delete(
  "/:id/media/:publicId",
  deleteMediaController
);

export default router;