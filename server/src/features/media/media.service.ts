import { UploadApiResponse } from "cloudinary";
import streamifier from "streamifier";

import cloudinary from "../../config/cloudinary.js";
import { UploadedMedia } from "./media.types.js";

export async function uploadMedia(
  file: Express.Multer.File
): Promise<UploadedMedia> {
  const resourceType = file.mimetype.startsWith("video")
    ? "video"
    : "image";

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `echoes/${resourceType}s`,
        resource_type: resourceType,

        use_filename: false,
        unique_filename: true,
        overwrite: false,

        quality: "auto",
        fetch_format: "auto",
      },

      (error: unknown, result?: UploadApiResponse) => {
        if (error) {
          return reject(error);
        }

        if (!result) {
          return reject(new Error("Upload failed."));
        }

        resolve({
          url: result.secure_url,
          publicId: result.public_id,
          type: resourceType,
        });
        
      }
    );

    streamifier
      .createReadStream(file.buffer)
      .pipe(uploadStream);
  });
}