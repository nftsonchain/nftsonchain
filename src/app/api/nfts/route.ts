import { connectDB, NFT } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const sort = searchParams.get("sort") || "name";

    await connectDB();

    // Build sort object
    let sortObj: any = {};
    switch (sort) {
      case "alphabetical":
        sortObj = { name: 1 };
        break;
      case "most-liked":
        sortObj = { likesCount: -1 };
        break;
      case "by-chain":
        sortObj = { chain: 1, name: 1 };
        break;
      default:
        sortObj = { name: 1 };
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Execute query
    const [results, total] = await Promise.all([
      NFT.find({}).sort(sortObj).skip(skip).limit(limit).lean(),
      NFT.countDocuments({}),
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
    console.error("Get NFTs error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
