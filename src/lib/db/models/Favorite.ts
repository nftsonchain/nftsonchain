import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema(
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

// Compound index for unique favorites per user per NFT
favoriteSchema.index({ userId: 1, nftId: 1 }, { unique: true });

export const Favorite =
  mongoose.models.Favorite || mongoose.model("Favorite", favoriteSchema);
