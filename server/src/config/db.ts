import mongoose from "mongoose";
import dns from "dns";
import { env } from "./env.js";

dns.setDefaultResultOrder("ipv4first");

export async function connectDB() {
  try {

    await mongoose.connect(env.MONGODB_URI);

    console.log("🟢 MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
}