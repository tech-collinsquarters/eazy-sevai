import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const body = await req.json();

    const { eventUri, inviteeUri } = body;

    // Store the basic consultation details.
    const consultation = await prisma.consultation.create({
      data: {
        userId,
        status: "scheduled",
        zoomJoinUrl: eventUri, // Temp storing event reference
        consultantNotes: `Invitee URI: ${inviteeUri}`,
      },
    });

    return NextResponse.json({ success: true, consultation });
  } catch (error: unknown) {
    console.error("Consultation create error:", error);
    return NextResponse.json({ error: "Failed to create consultation" }, { status: 500 });
  }
}
