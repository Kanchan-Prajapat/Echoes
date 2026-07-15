import mongoose, { Schema } from "mongoose";

const shareSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },

    echoId: {
      type: Schema.Types.ObjectId,
      ref: "Echo",
      required: true,
    },

   owner: {
  type: Schema.Types.ObjectId,
  ref: "User",
  required: true,
},

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Share",
  shareSchema
);