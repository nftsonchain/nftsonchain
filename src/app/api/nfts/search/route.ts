import { connectDB, NFT } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q");
    const chain = searchParams.get("chain");
    const category = searchParams.get("category");
    const marketplace = searchParams.get("marketplace");
    const launchYear = searchParams.get("launchYear");
    const supplyRange = searchParams.get("supplyRange");
    const sort = searchParams.get("sort") || "name";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");

    await connectDB();

    // Build filter object
    const filter: any = {};

    if (query) {
      filter.$text = { $search: query };
    }

    if (chain && chain !== "All Chains") {
      filter.chain = chain;
    }

    if (category) {
      filter.category = category;
    }

    if (marketplace) {
      filter.marketplaces = { $in: [marketplace] };
    }

    if (launchYear) {
      filter.launchYear = parseInt(launchYear);
    }

    if (supplyRange) {
      switch (supplyRange) {
        case "under-1k":
          filter.supply = { $lt: 1000 };
          break;
        case "1k-5k":
          filter.supply = { $gte: 1000, $lt: 5000 };
          break;
        case "5k-10k":
          filter.supply = { $gte: 5000, $lt: 10000 };
          break;
        case "10k+":
          filter.supply = { $gte: 10000 };
          break;
      }
    }

    // Build sort object
    let sortObj: any = {};
    switch (sort) {
      case "alphabetical":
        sortObj = { name: 1 };
        break;
      case "most-liked":
        sortObj = { likesCount: -1 };
        break;
      case "chain":
        const chainOrder = {
          Cosmos: 0,
          Bitcoin: 1,
          Ethereum: 2,
          Solana: 3,
          TON: 4,
        };
        // Note: MongoDB doesn't support ordering by array values directly
        // This is a simplified sort by chain first
        sortObj = { chain: 1, name: 1 };
        break;
      default:
        sortObj = { name: 1 };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute query
    const [results, total] = await Promise.all([
      NFT.find(filter).sort(sortObj).skip(skip).limit(limit).lean(),
      NFT.countDocuments(filter),
    ]);

    return NextResponse.json({
      results,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Search NFTs error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
