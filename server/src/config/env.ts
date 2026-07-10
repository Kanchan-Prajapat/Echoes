import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "5000",

  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URI: process.env.MONGODB_URI!,

  JWT_SECRET: process.env.JWT_SECRET!,

   CLIENT_URL:
    process.env.CLIENT_URL ??
    "http://localhost:5173",

  JWT_EXPIRES_IN:
    process.env.JWT_EXPIRES_IN || "30d",

  CLOUDINARY_CLOUD_NAME:
    process.env.CLOUDINARY_CLOUD_NAME!,

  CLOUDINARY_API_KEY:
    process.env.CLOUDINARY_API_KEY!,

  CLOUDINARY_API_SECRET:
    process.env.CLOUDINARY_API_SECRET!,
};



 