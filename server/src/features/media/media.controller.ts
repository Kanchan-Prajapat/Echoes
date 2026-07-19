import { Request, Response } from "express";
import { uploadMedia } from "./media.service.js";
import {
  successResponse,
  errorResponse,
} from "../../utils/apiResponse.js";

export async function uploadMediaController(
  req: Request,
  res: Response
) {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json(errorResponse("No media file provided."));
    }

    const media = await uploadMedia(req.file);

return res.status(200).json(
  successResponse(
    "Media uploaded successfully",
    media
  )
);

  } catch (error) {

  console.error("UPLOAD ERROR");

  console.error(error);

  return res.status(500).json(
    errorResponse("Upload failed.")
  );
}
}