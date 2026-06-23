#!/usr/bin/env node

/**
 * NFTs OnChain - Seed Data Script
 * 
 * This script populates the MongoDB database with sample NFT collections
 * for development and testing.
 * 
 * Usage:
 *   node scripts/seed.js
 * 
 * Make sure to:
 * 1. Create a .env.local file with MONGODB_URI
 * 2. Run this from the project root
 * 3. MongoDB must be running and accessible
 */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const NFTSchema = new mongoose.Schema({
  name: String,
  chain: String,
  category: String,
  supply: Number,
  launchYear: Number,
  description: String,
  officialX: String,
  officialWebsite: String,
  marketplaces: [String],
  likesCount: { type: Number, default: 0 },
  favoritesCount: { type: Number, default: 0 },
});

const NFT = mongoose.model("NFT", NFTSchema);

const SAMPLE_NFTS = [
  // Ethereum Collections
  {
    name: "Bored Ape Yacht Club",
    chain: "Ethereum",
    category: "PFP",
    supply: 10000,
    launchYear: 2021,
    description:
      "A collection of 10,000 unique Bored Ape NFTs living on the Ethereum blockchain.",
    officialX: "@BoredApeYC",
    officialWebsite: "https://boredapeyachtclub.com",
    marketplaces: ["OpenSea", "Blur"],
  },
  {
    name: "CryptoPunks",
    chain: "Ethereum",
    category: "PFP",
    supply: 10000,
    launchYear: 2017,
    description: "10,000 unique collectible characters with proof of ownership.",
    officialX: "@cryptopunksnft",
    officialWebsite: "https://cryptopunks.app",
    marketplaces: ["OpenSea"],
  },
  {
    name: "Azuki",
    chain: "Ethereum",
    category: "PFP",
    supply: 10000,
    launchYear: 2022,
    description: "A collection of 10,000 anime-inspired NFTs.",
    officialX: "@AzukiOfficial",
    officialWebsite: "https://www.azuki.com",
    marketplaces: ["OpenSea", "Blur"],
  },
  {
    name: "Pudgy Penguins",
    chain: "Ethereum",
    category: "PFP",
    supply: 8888,
    launchYear: 2021,
    description: "8,888 adorable Pudgy Penguins on Ethereum.",
    officialX: "@pudgypenguins",
    officialWebsite: "https://www.pudgypenguins.io",
    marketplaces: ["OpenSea", "Blur"],
  },

  // Solana Collections
  {
    name: "Magic Eden Collections",
    chain: "Solana",
    category: "Gaming",
    supply: 50000,
    launchYear: 2021,
    description: "Collections on Magic Eden marketplace on Solana.",
    officialX: "@MagicEden",
    officialWebsite: "https://www.magiceden.io",
    marketplaces: ["Magic Eden", "Tensor"],
  },
  {
    name: "Okay Bears",
    chain: "Solana",
    category: "PFP",
    supply: 10000,
    launchYear: 2022,
    description: "10,000 Okay Bears on Solana.",
    officialX: "@okay_bears",
    officialWebsite: "https://okayapefoundation.com",
    marketplaces: ["Magic Eden", "Tensor"],
  },

  // Bitcoin Collections
  {
    name: "Bitcoin Puppets",
    chain: "Bitcoin",
    category: "Art",
    supply: 2000,
    launchYear: 2023,
    description: "Bitcoin native inscriptions featuring puppets.",
    officialX: "@BitcoinPuppets",
    officialWebsite: "https://bitcoinpuppets.com",
    marketplaces: ["Unisat", "Gamma"],
  },

  // Cosmos Collections
  {
    name: "Celestians",
    chain: "Cosmos",
    category: "PFP",
    supply: 3000,
    launchYear: 2022,
    description: "3,000 unique Celestians NFTs on Cosmos.",
    officialX: "@CelestianNFT",
    officialWebsite: "https://celestians.com",
    marketplaces: ["Stargaze"],
  },

  // TON Collections
  {
    name: "TON Art Society",
    chain: "TON",
    category: "Art",
    supply: 5000,
    launchYear: 2023,
    description: "Art collection on The Open Network.",
    officialX: "@TONArtSociety",
    officialWebsite: "https://tonart.io",
    marketplaces: ["Getgems"],
  },

  // Polygon Collections
  {
    name: "Polygotchis",
    chain: "Polygon",
    category: "Gaming",
    supply: 100000,
    launchYear: 2023,
    description: "Virtual creatures on Polygon.",
    officialX: "@Polygotchis",
    officialWebsite: "https://polygotchis.io",
    marketplaces: ["OpenSea"],
  },

  // Additional collections for variety
  {
    name: "Doodles",
    chain: "Ethereum",
    category: "Art",
    supply: 10000,
    launchYear: 2021,
    description: "10,000 unique, customizable, playable characters.",
    officialX: "@doodles",
    officialWebsite: "https://doodles.app",
    marketplaces: ["OpenSea"],
  },
  {
    name: "Moonbirds",
    chain: "Ethereum",
    category: "PFP",
    supply: 10000,
    launchYear: 2022,
    description: "Proof of perp. 10,000 Moonbirds. 0x23581767a106ae21c074b2276D25e15C0ff0335d",
    officialX: "@moonbirds",
    officialWebsite: "https://www.moonbirds.xyz",
    marketplaces: ["OpenSea", "Blur"],
  },
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    if (!process.env.MONGODB_URI) {
      throw new Error(
        "MONGODB_URI environment variable is not defined. Check your .env.local file."
      );
    }

    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    console.log("🧹 Clearing existing NFT data...");
    await NFT.deleteMany({});
    console.log("✅ Cleared existing data");

    // Insert sample data
    console.log("📝 Inserting sample NFT data...");
    const result = await NFT.insertMany(SAMPLE_NFTS);
    console.log(`✅ Inserted ${result.length} NFT collections`);

    // Display summary
    console.log("\n📊 Database Summary:");
    console.log(`   Total NFTs: ${await NFT.countDocuments()}`);

    // Show sample data
    const samples = await NFT.find().limit(5);
    console.log("\n📋 Sample Collections:");
    samples.forEach((nft, i) => {
      console.log(
        `   ${i + 1}. ${nft.name} (${nft.chain}) - ${nft.supply} supply`
      );
    });

    console.log("\n✨ Database seeding complete!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  }
}

// Run the seed function
seedDatabase();

/**
 * To use this script:
 * 
 * 1. Create a `scripts` folder in your project root
 * 2. Save this file as `scripts/seed.js`
 * 3. Update package.json to add:
 *    "seed": "node scripts/seed.js"
 * 4. Run: npm run seed
 * 
 * The script will:
 * - Connect to your MongoDB database
 * - Clear any existing NFT data
 * - Insert 12 sample NFT collections
 * - Display a summary of the data
 * 
 * You can modify SAMPLE_NFTS to add more collections.
 * Remember to add collections to all supported chains!
 */
