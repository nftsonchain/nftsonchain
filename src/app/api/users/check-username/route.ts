import { connectDB, User } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Username parameter required" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ username });

    return NextResponse.json({
      available: !existingUser,
      username,
    });
  } catch (error) {
    console.error("Check username error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
