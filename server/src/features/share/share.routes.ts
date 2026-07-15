import { Router } from "express";

import {
  createShareController,
  getSharedEchoController,
} from "./share.controller.js";

import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();

/* ----------------------------- */
/* Create Share Link */
/* ----------------------------- */

router.post(
  "/:echoId",
  authenticate,
  createShareController
);
/* ----------------------------- */
/* Public Shared Echo */
/* ----------------------------- */

router.get(
  "/:token",
  getSharedEchoController
);

export default router;