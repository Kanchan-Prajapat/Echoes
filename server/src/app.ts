import express from "express";
import cors from "cors";
import mediaRoutes from "./features/media/media.routes.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/errorHandler.js";
import echoRoutes from "./features/echo/echo.routes.js";
import authRoutes from "./features/auth/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(
  "/api/auth",
  authRoutes
);


app.use("/api/media", mediaRoutes);
app.use("/api/echo", echoRoutes);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Echoes Backend Running 🚀",
  });
});

app.use(errorHandler);
export default app;