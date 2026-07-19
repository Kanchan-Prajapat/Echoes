import app from "./app.js";

import { connectDB } from "./config/db.js";

import { env } from "./config/env.js";

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