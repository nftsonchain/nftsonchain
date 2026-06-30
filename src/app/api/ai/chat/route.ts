import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are NFTs OnChain AI Assistant.

You educate users about:
- NFTs
- Blockchain
- Metadata
- Smart contracts
- Minting
- Collections
- Web3 culture

Rules:
1. No financial advice
2. No price predictions
3. No trading strategies
4. Always encourage DYOR
`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json(
        { error: "Message required" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 500,
    });

    return NextResponse.json({
      success: true,
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("AI Error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}