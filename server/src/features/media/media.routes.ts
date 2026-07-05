import { Router } from "express";

import upload from "../../middleware/upload";
import { uploadMediaController } from "./media.controller";

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