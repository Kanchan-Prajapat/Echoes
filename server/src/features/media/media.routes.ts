import { Router } from "express";

import upload from "../../middleware/upload.js";
import { uploadMediaController } from "./media.controller.js";

const router = Router();

/*
 * POST /api/media/upload
 */

router.post(
  "/upload",

  upload.single("media"),

  uploadMediaController
);

export default router;