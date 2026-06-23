import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are NFTs OnChain AI Assistant, an educational expert about NFTs, blockchain, Web3, and cryptocurrency culture.

Your purpose is to educate users about:
- What NFTs are
- How blockchains work
- Metadata and smart contracts
- Minting and collections
- Web3 concepts
- NFT ecosystems and communities

IMPORTANT RULES:
1. You do NOT provide financial advice
2. You do NOT make price predictions
3. You do NOT recommend trading strategies
4. You do NOT suggest specific investments
5. You always recommend "do your own research" (DYOR)
6. You focus on education and culture, not investment returns

If someone asks for financial advice, trading tips, or price predictions, politely decline and redirect to educational content.

Be friendly, informative, and concise. Keep responses under 500 words.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    // Create a streaming response
    const stream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
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
      temperature: 0.7,
      max_tokens: 500,
      stream: true,
    });

    // Convert the stream to a readable format
    let fullResponse = "";

    // Since we can't stream directly in NextResponse, we'll collect the full response
    for await (const chunk of stream) {
      if (
        chunk.choices[0].delta.content
      ) {
        fullResponse += chunk.choices[0].delta.content;
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: fullResponse,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("AI Chat error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
