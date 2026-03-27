import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export const BUCKET_NAME = process.env.AWS_BUCKET_NAME || "eazy-sevai-documents";

export async function getUploadPresignedUrl(fileName: string, contentType: string, userId: string) {
  // Generate a distinct UUID to avoid timing issues with Date.now()
  const fileId = uuidv4();
  const key = `uploads/${userId}/${fileId}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    ContentType: contentType,
    Metadata: {
      userId: userId
    }
  });

  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });
  
  return { signedUrl, fileKey: key };
}

export async function getDownloadPresignedUrl(fileKey: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: fileKey,
  });

  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 900 });
  return signedUrl;
}
