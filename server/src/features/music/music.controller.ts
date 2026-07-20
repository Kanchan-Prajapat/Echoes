import { Request, Response } from "express";
import { searchMusic } from "./music.service.js";
import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";
export async function searchMusicController(
  req: Request,
  res: Response
) {
  try {

    const q = String(req.query.q || "");

    const music = await searchMusic(q);

    return res.json(
      successResponse(
        "Music fetched successfully.",
        music
      )
    );

  } catch (error: any) {

    return res.status(500).json(
      errorResponse(
        error.message
      )
    );

  }
}