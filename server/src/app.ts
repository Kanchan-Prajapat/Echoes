import express from "express";
import cors from "cors";

import { env } from "./config/env";

const app = express();

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Echoes Backend Running 🚀",
  });
});

export default app;