import { Schema, model } from "mongoose";

const musicSchema = new Schema(
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

    album: {
      type: String,
      default: "",
      trim: true,
    },
    cover: {
      type: String,
      default: "",
    },

    url: {
      type: String,
      required: true,
    },

    previewUrl: {
      type: String,
      default: "",
    },

    duration: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      default: "General",
    },

    tags: {
      type: [String],
      default: [],
    },

    premium: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const MusicModel = model(
  "Music",
  musicSchema
);

export default MusicModel;