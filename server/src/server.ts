import app from "./app";

import { connectDB } from "./config/db";

import { env } from "./config/env";

async function startServer() {
  await connectDB();

  app.listen(env.PORT, () => {
    console.log("");

    console.log(
      "🚀 Echoes Server Started"
    );

    console.log(
      `🌍 http://localhost:${env.PORT}`
    );

    console.log("");
  });
}

startServer();