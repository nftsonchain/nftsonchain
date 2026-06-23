import { connectDB, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const user = await User.findOne({ clerkId: id })
      .select("-likedNFTs -favoriteNFTs")
      .lean();

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { user: authUser } = await auth();

    if (!authUser || authUser.id !== id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { username } = await req.json();

    await connectDB();

    // If username is being updated, check uniqueness
    if (username) {
      const existingUser = await User.findOne({
        username,
        clerkId: { $ne: id },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "Username already taken" },
          { status: 409 }
        );
      }
    }

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      { ...(username && { username }) },
      { new: true }
    ).select("-likedNFTs -favoriteNFTs");

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Update user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
