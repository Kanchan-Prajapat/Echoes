import {
  Request,
  Response,
  NextFunction,
} from "express";

import multer from "multer";

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (
    err instanceof multer.MulterError &&
    err.code === "LIMIT_FILE_SIZE"
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Video size should be less than 50 MB.",
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message:
      err.message ||
      "Internal Server Error",
  });
}