import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },
    nftData: {
      name: {
        type: String,
        required: true,
      },
      chain: {
        type: String,
        required: true,
      },
      category: {
        type: String,
      },
      supply: {
        type: Number,
      },
      launchYear: {
        type: Number,
      },
      description: {
        type: String,
      },
      officialX: {
        type: String,
      },
      officialWebsite: {
        type: String,
      },
      marketplaces: [String],
    },
    rejectionReason: {
      type: String,
    },
    createdNFTId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NFT",
    },
  },
  { timestamps: true }
);

export const Submission =
  mongoose.models.Submission ||
  mongoose.model("Submission", submissionSchema);
