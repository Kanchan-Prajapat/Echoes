import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 5000,

  CLIENT_URL:
    process.env.CLIENT_URL ??
    "http://localhost:5173",

  MONGODB_URI:
    process.env.MONGODB_URI ?? "",

  CLOUDINARY_CLOUD_NAME:
    process.env.CLOUDINARY_CLOUD_NAME ?? "",

  CLOUDINARY_API_KEY:
    process.env.CLOUDINARY_API_KEY ?? "",

  CLOUDINARY_API_SECRET:
    process.env.CLOUDINARY_API_SECRET ?? "",
};