import mongoose from "mongoose";
import dotenv from "dotenv";

import MusicModel from "../src/features/music/music.model.js";

dotenv.config();

const music = [
  {
    title: "Summer Memories",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "",
       url: "https://example.com/audio/golden-sunset.mp3",
    duration: 180,
    category: "Travel",
    tags: ["travel", "happy"],
    premium: false,
  },
  {
    title: "Golden Sunset",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "",
  url: "https://example.com/audio/golden-sunset.mp3",
    duration: 195,
    category: "Nature",
    tags: ["nature", "sunset"],
    premium: false,
  },
  {
    title: "Rain Piano",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "",
  url: "https://example.com/audio/rain-piano.mp3",
    duration: 210,
    category: "Calm",
    tags: ["rain", "piano"],
    premium: false,
  },
  {
    title: "Birthday Joy",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "",
   url: "https://example.com/audio/rain-piano.mp3",
    duration: 170,
    category: "Birthday",
    tags: ["birthday"],
    premium: false,
  },
  {
    title: "Ocean Breeze",
    artist: "Echoes Originals",
    album: "Echoes",
    cover: "",
    url: "https://example.com/audio/rain-piano.mp3",
    duration: 205,
    category: "Nature",
    tags: ["ocean"],
    premium: false,
  },
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

