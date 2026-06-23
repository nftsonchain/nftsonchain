import mongoose from "mongoose";

const nftSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    chain: {
      type: String,
      required: true,
      enum: [
        "Ethereum",
        "Solana",
        "Bitcoin",
        "Cosmos",
        "TON",
        "XRP",
        "Polygon",
        "Base",
        "Cardano",
        "Arbitrum",
        "Optimism",
        "Avalanche",
        "BNB",
      ],
    },
    category: {
      type: String,
      enum: ["PFP", "Art", "Gaming", "Anime", "Meme", "Utility"],
    },
    supply: {
      type: Number,
      required: true,
    },
    launchYear: {
      type: Number,
      required: true,
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
    marketplaces: [
      {
        type: String,
        enum: [
          "OpenSea",
          "Blur",
          "Magic Eden",
          "Tensor",
          "Gamma",
          "Unisat",
          "Stargaze",
          "Getgems",
          "XRP Cafe",
          "Rarible",
          "SuperRare",
        ],
      },
    ],
    likesCount: {
      type: Number,
      default: 0,
    },
    favoritesCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// Create text index for search
nftSchema.index({ name: "text", description: "text", chain: "text" });

export const NFT = mongoose.models.NFT || mongoose.model("NFT", nftSchema);
