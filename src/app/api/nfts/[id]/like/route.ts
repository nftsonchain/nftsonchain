import { connectDB, Like, NFT } from "@/lib/db";
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

    // Check if already liked
    const existingLike = await Like.findOne({
      userId: user.id,
      nftId: id,
    });

    if (existingLike) {
      return NextResponse.json(
        { error: "Already liked" },
        { status: 409 }
      );
    }

    // Create like
    await Like.create({
      userId: user.id,
      nftId: id,
    });

    // Increment likes count
    await NFT.findByIdAndUpdate(id, { $inc: { likesCount: 1 } });

    return NextResponse.json(
      { success: true, message: "Liked" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Like NFT error:", error);
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

    // Remove like
    const result = await Like.findOneAndDelete({
      userId: user.id,
      nftId: id,
    });

    if (!result) {
      return NextResponse.json(
        { error: "Like not found" },
        { status: 404 }
      );
    }

    // Decrement likes count
    await NFT.findByIdAndUpdate(id, { $inc: { likesCount: -1 } });

    return NextResponse.json({ success: true, message: "Unliked" });
  } catch (error) {
    console.error("Unlike NFT error:", error);
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
      return NextResponse.json({ liked: false });
    }

    await connectDB();

    const like = await Like.findOne({
      userId: user.id,
      nftId: id,
    });

    return NextResponse.json({ liked: !!like });
  } catch (error) {
    console.error("Check like error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
