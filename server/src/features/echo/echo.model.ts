import mongoose, { Schema } from "mongoose";

const mediaSchema = new Schema(
  {

    
    url: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
  },
  {
    _id: false,
  }
);

const echoSchema = new Schema(
  {

    owner: {
  type: Schema.Types.ObjectId,
  ref: "User",
  required: true,
},

    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    description: {
      type: String,
      default: "",
      maxlength: 5000,
    },

    date: {
      type: Date,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    mood: {
      type: String,
      default: "",
    },

    weather: {
      type: String,
      default: "",
    },

    tags: [
      {
        type: String,
      },
    ],
  

    favorite: {
      type: Boolean,
      default: false,
    },

    media: [mediaSchema],

    coverMediaId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

echoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();

    delete ret._id;
  },
});

export default mongoose.model(
  "Echo",
  echoSchema
);