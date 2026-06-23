import { connectDB, Favorite, NFT } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user } = await auth();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    await connectDB();

    // Check if NFT exists
    const nft = await NFT.findById(id);
    if (!nft) {
      return NextResponse.json({ error: "NFT not found" }, { status: 404 });
    }

    // Check if already favorited
    const existingFavorite = await Favorite.findOne({
      userId: user.id,
      nftId: id,
    });

    if (existingFavorite) {
      return NextResponse.json(
        { error: "Already favorited" },
        { status: 409 }
      );
    }

    // Create favorite
    await Favorite.create({
      userId: user.id,
      nftId: id,
    });

    // Increment favorites count
    await NFT.findByIdAndUpdate(id, { $inc: { favoritesCount: 1 } });

    return NextResponse.json(
      { success: true, message: "Favorited" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Favorite NFT error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user } = await auth();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    await connectDB();

    // Remove favorite
    const result = await Favorite.findOneAndDelete({
      userId: user.id,
      nftId: id,
    });

    if (!result) {
      return NextResponse.json(
        { error: "Favorite not found" },
        { status: 404 }
      );
    }

    // Decrement favorites count
    await NFT.findByIdAndUpdate(id, { $inc: { favoritesCount: -1 } });

    return NextResponse.json({ success: true, message: "Removed from favorites" });
  } catch (error) {
    console.error("Remove favorite error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { user } = await auth();
    const { id } = await params;

    if (!user) {
      return NextResponse.json({ favorited: false });
    }

    await connectDB();

    const favorite = await Favorite.findOne({
      userId: user.id,
      nftId: id,
    });

    return NextResponse.json({ favorited: !!favorite });
  } catch (error) {
    console.error("Check favorite error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
