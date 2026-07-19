import { Response } from "express";

import { AuthRequest } from "../../middleware/auth.middleware.js";

import { generateAIInsight } from "./ai.service.js";
import { saveAIInsight } from "./ai.repository.js";

import { findEchoById } from "../echo/echo.repository.js";

export async function generateInsightController(
  req: AuthRequest,
  res: Response
) {
  try {
    const owner = req.user!.id;
    const echoId = req.params.echoId;

    const echo = await findEchoById(echoId, owner);

    if (!echo) {
      return res.status(404).json({
        success: false,
        message: "Echo not found.",
      });
    }

    const ai = await generateAIInsight(echo);

    const updatedEcho = await saveAIInsight(
      echoId,
      owner,
      ai
    );

    return res.status(200).json({
      success: true,
      message: "AI insight generated successfully.",
      data: updatedEcho,
    });

  } catch (error: any) {
    console.error("========== AI ERROR ==========");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}