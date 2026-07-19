import { Router } from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { generateInsightController } from "./ai.controller.js";

const router = Router();

router.post(
  "/insight/:echoId",
  authenticate,
  generateInsightController
);

export default router;