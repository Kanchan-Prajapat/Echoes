import mongoose, { Schema } from "mongoose";

const MusicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    artist: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      index: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    cover: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Music",
  MusicSchema
);