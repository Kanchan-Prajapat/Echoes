import express from "express";
import cors from "cors";
import mediaRoutes from "./features/media/media.routes";
import { env } from "./config/env";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/media", mediaRoutes);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Echoes Backend Running 🚀",
  });
});

app.use(errorHandler);
export default app;