import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    nftId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NFT",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Compound index for unique likes per user per NFT
likeSchema.index({ userId: 1, nftId: 1 }, { unique: true });

export const Like = mongoose.models.Like || mongoose.model("Like", likeSchema);
