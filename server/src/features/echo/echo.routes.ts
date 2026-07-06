import { Router } from "express";

import {
  createEchoController,
  getAllEchoesController,
  getEchoByIdController,
  updateEchoController,
  addMediaToEchoController,
  deleteEchoController,
  deleteMediaController,
  toggleFavoriteController,
  searchEchoesController,
  setCoverMediaController,
} from "./echo.controller.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Echo Routes
|--------------------------------------------------------------------------
*/

// Create Echo
router.post("/", createEchoController);

// Get All Echoes
router.get("/", getAllEchoesController);

// Search Echoes
router.get("/search", searchEchoesController);

// Get Echo By ID
router.get("/:id", getEchoByIdController);

// Update Echo
router.patch("/:id", updateEchoController);

// Add Media to Echo
router.patch( "/:id/media", addMediaToEchoController);

router.delete("/:id/media/:publicId", deleteMediaController);

// Delete Echo
router.delete("/:id", deleteEchoController);

router.patch( "/:id/cover", setCoverMediaController);

// Toggle Favorite
router.patch( "/:id/favorite", toggleFavoriteController);

export default router;