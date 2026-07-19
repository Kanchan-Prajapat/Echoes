import mongoose from "mongoose";
import dotenv from "dotenv";

import MusicModel from "../src/features/music/music.model.js";

dotenv.config();

const music = [
  {
    title: "Happy",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "/cover/happy.jpg",
       url: "/music/happy.mp3",
    duration: 180,
    category: "Travel",
    tags: ["travel", "happy"],
    premium: false,
  },
  {
    title: "Love",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "/cover/love.jpg",
  url: "/music/love.mp3",
    duration: 195,
    category: "Nature",
    tags: ["nature", "sunset"],
    premium: false,
  },
  {
    title: "Sad",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "/cover/sad.jpg",
  url: "/music/sad.mp3",
    duration: 210,
    category: "Calm",
    tags: ["rain", "piano"],
    premium: false,
  },
  {
    title: "Chill",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "/cover/chill.jpg",
   url: "/music/chill.mp3",
    duration: 170,
    category: "Birthday",
    tags: ["birthday"],
    premium: false,
  }

];



async function seedMusic() {
  try {

    await mongoose.connect(process.env.MONGODB_URI!);

    console.log("MongoDB Connected");

    await MusicModel.deleteMany({});

    await MusicModel.insertMany(music);

    console.log("Music Seeded Successfully 🎵");

    process.exit(0);

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
}

seedMusic();

