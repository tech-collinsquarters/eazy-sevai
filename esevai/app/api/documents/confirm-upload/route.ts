import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as { id: string }).id;
    const { fileName, fileKey, fileSize, fileType, documentType = "General" } = await req.json();

    if (!fileName || !fileKey) {
      return NextResponse.json({ message: "Filename and fileKey required" }, { status: 400 });
    }

    // 1. Save document to Prisma Database
    const document = await prisma.document.create({
      data: {
        userId,
        applicationId: undefined,
        fileName,
        fileType: fileType || "application/pdf",
        fileSize: fileSize || 0,
        fileUrl: fileKey, // We store the S3 Key here
        documentType,
        status: "uploaded",
        encrypted: true
      }
    });

    // 2. Notify n8n for WhatsApp confirmation
    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_FORM_WEBHOOK;
    if (n8nWebhookUrl) {
      fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: "document.uploaded",
          documentId: document.id,
          fileName: document.fileName,
          userId: userId,
          userName: session.user.name || "User",
          userEmail: session.user.email,
          timestamp: new Date().toISOString()
        })
      }).catch(err => console.error("Failed to notify n8n of document upload:", err));
    }

    return NextResponse.json({ success: true, document });
  } catch (error: any) {
    console.error("Confirm Upload Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
