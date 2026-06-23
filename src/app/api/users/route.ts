import { connectDB, User } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const PRESET_AVATARS = [
  "avatar-1",
  "avatar-2",
  "avatar-3",
  "avatar-4",
  "avatar-5",
  "avatar-6",
  "avatar-7",
  "avatar-8",
];

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { userId, email, username } = await req.json();

    // Validate required fields
    if (!userId || !email || !username) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ clerkId: userId });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Check username uniqueness
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 409 }
      );
    }

    // Assign random avatar
    const randomAvatar =
      PRESET_AVATARS[Math.floor(Math.random() * PRESET_AVATARS.length)];

    // Create user
    const newUser = await User.create({
      clerkId: userId,
      email,
      username,
      avatar: randomAvatar,
      likedNFTs: [],
      favoriteNFTs: [],
    });

    return NextResponse.json(
      {
        success: true,
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create user error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
