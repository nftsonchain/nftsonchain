import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    likedNFTs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
    favoriteNFTs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "NFT",
      },
    ],
  },
  { timestamps: true }
);

// Create unique index on username
userSchema.index({ username: 1 }, { unique: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema);
