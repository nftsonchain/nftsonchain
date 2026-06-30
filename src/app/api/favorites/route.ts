import { NextRequest, NextResponse } from "next/server";

let favoritesStore: Record<string, string[]> = {};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "User ID is required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    userId,
    favorites: favoritesStore[userId] || [],
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nftId, userId } = body;

    if (!nftId || !userId) {
      return NextResponse.json(
        { error: "NFT ID and User ID required" },
        { status: 400 }
      );
    }

    if (!favoritesStore[userId]) {
      favoritesStore[userId] = [];
    }

    if (!favoritesStore[userId].includes(nftId)) {
      favoritesStore[userId].push(nftId);
    }

    return NextResponse.json({
      success: true,
      favorites: favoritesStore[userId],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to save favorite" },
      { status: 500 }
    );
  }
}