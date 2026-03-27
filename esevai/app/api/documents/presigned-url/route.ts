import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getUploadPresignedUrl } from "@/lib/s3";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || !(session.user as any).id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { fileName, contentType } = await req.json();

    if (!fileName || !contentType) {
      return NextResponse.json({ message: "Filename and contentType required" }, { status: 400 });
    }

    // Generate secure upload URL
    const { signedUrl, fileKey } = await getUploadPresignedUrl(fileName, contentType, userId);
    
    // Return both the URL and the key so the client can save the key to the database after uploading
    return NextResponse.json({ uploadUrl: signedUrl, fileKey });
  } catch (error: any) {
    console.error("Presigned URL Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
