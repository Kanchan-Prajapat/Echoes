import { Router } from "express";
import { searchMusicController } from "./music.controller.js";

const router = Router();

router.get(
  "/search",
  searchMusicController
);

export default router;