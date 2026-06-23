import { connectDB, Submission, NFT } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const submission = await Submission.findById(id).lean();

    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(submission);
  } catch (error) {
    console.error("Get submission error:", error);
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
    const { status, rejectionReason } = await req.json();

    // This endpoint should be admin-only
    // For now, we're not implementing full admin authentication
    // but this is a placeholder for admin functionality

    if (!status || !["approved", "rejected", "pending"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    await connectDB();

    const submission = await Submission.findById(id);

    if (!submission) {
      return NextResponse.json(
        { error: "Submission not found" },
        { status: 404 }
      );
    }

    // If approving, create NFT
    if (status === "approved" && submission.status !== "approved") {
      const newNFT = await NFT.create(submission.nftData);
      submission.createdNFTId = newNFT._id;
    }

    submission.status = status;
    if (rejectionReason) {
      submission.rejectionReason = rejectionReason;
    }

    await submission.save();

    return NextResponse.json(submission);
  } catch (error) {
    console.error("Update submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
