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

    viewCount: {
    type: Number,
    default: 0,
},

aiCaption: {
    type: String,
    default: "",
},

aiGeneratedAt: {
  type: Date,
},

aiModel: {
  type: String,
  default: "",
},

aiInsight: {
    type: String,
    default: "",
},

aiTags: {
    type: [String],
    default: [],
},

music: {
  id: {
    type: String,
    default: "",
  },

  title: {
    type: String,
    default: "",
  },

  artist: {
    type: String,
    default: "",
  },

  cover: {
    type: String,
    default: "",
  },

  url: {
    type: String,
    default: "",
  },

  duration: {
    type: Number,
    default: 0,
  },

  source: {
    type: String,
    enum: [
      "echoes",
      "uploaded",
    ],
    default: "echoes",
  },
},
  },
  {
    timestamps: true,
  }
);

echoSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
transform: (_doc: any, ret: any) => {
  ret.id = ret._id.toString();
  delete ret._id;
}
});

export default mongoose.model(
  "Echo",
  echoSchema
);