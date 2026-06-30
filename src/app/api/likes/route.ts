import { NextRequest, NextResponse } from "next/server";

let likesStore: Record<string, number> = {};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nftId = searchParams.get("nftId");

  if (!nftId) {
    return NextResponse.json(
      { error: "NFT ID is required" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    nftId,
    likes: likesStore[nftId] || 0,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nftId, userId } = body;

    if (!nftId) {
      return NextResponse.json(
        { error: "NFT ID is required" },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { error: "Sign in required" },
        { status: 401 }
      );
    }

    likesStore[nftId] = (likesStore[nftId] || 0) + 1;

    return NextResponse.json({
      success: true,
      nftId,
      likes: likesStore[nftId],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to like NFT" },
      { status: 500 }
    );
  }
}