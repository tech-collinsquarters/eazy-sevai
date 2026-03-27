import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDownloadPresignedUrl } from "@/lib/s3";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { searchParams } = new URL(req.url);
    const documentId = searchParams.get("id");

    if (!documentId) {
      return NextResponse.json({ message: "Document ID required" }, { status: 400 });
    }

    // Verify ownership and get file details
    const document = await prisma.document.findUnique({
      where: { id: documentId },
    });

    if (!document) {
      return NextResponse.json({ message: "Document not found" }, { status: 404 });
    }

    if (document.userId !== userId) {
      return NextResponse.json({ message: "Unauthorized access to document" }, { status: 403 });
    }

    // Generate specific S3 download URL
    const signedUrl = await getDownloadPresignedUrl(document.fileUrl);

    // Redirect user to the secure URL
    return NextResponse.redirect(signedUrl);

  } catch (error: any) {
    console.error("Download URL Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
