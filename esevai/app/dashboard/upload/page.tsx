"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, UploadCloud, Loader2 } from "lucide-react";

export default function DocumentUploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState("General");
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError("");
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setIsUploading(true);
    setError("");

    try {
      // 1. Get presigned URL
      const presignRes = await fetch("/api/documents/presigned-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
        }),
      });

      if (!presignRes.ok) {
        throw new Error("Failed to get upload URL");
      }

      const { uploadUrl, fileKey } = await presignRes.json();

      // 2. Upload to S3 directly
      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { "Content-Type": file.type },
        body: file,
      });

      if (!uploadRes.ok) {
        throw new Error("Failed to upload file to S3");
      }

      // 3. Confirm upload with our server
      const confirmRes = await fetch("/api/documents/confirm-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          fileKey,
          fileSize: file.size,
          fileType: file.type,
          documentType,
        }),
      });

      if (!confirmRes.ok) {
        throw new Error("Failed to save document metadata");
      }

      // Redirect back to dashboard on success
      router.push("/dashboard");
      router.refresh(); // Refresh to see the new document
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "An error occurred during upload.");
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 bg-gold-50 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4 border-b border-gold-200 pb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="text-navy-600 hover:text-navy-900 hover:bg-gold-100">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-serif text-navy-900">Upload Document</h1>
            <p className="text-navy-600 font-sans mt-1">Upload securely to your encrypted vault.</p>
          </div>
        </div>

        <Card className="border-gold-200 shadow-sm bg-white">
          <CardHeader className="bg-navy-50/50 border-b border-navy-100">
            <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-gold-600" /> New File Upload
            </CardTitle>
            <CardDescription>Supported formats: PDF, JPG, PNG, DOCX (Max 10MB)</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleUpload} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded border border-red-200">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="documentType" className="text-navy-900 font-medium">Document Type</Label>
                <select
                  id="documentType"
                  aria-label="Document Type"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gold-300 focus:ring-navy-500"
                >
                  <option value="General">General</option>
                  <option value="Identity">Identity Proof (Passport, PAN, Aadhar)</option>
                  <option value="Address">Address Proof</option>
                  <option value="Property">Property Document</option>
                  <option value="Legal">Legal Document</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file" className="text-navy-900 font-medium">Select File</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={handleFileChange}
                  className="border-gold-300 focus-visible:ring-navy-500 cursor-pointer"
                  accept=".pdf,.jpg,.jpeg,.png,.docx"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-navy-900 hover:bg-navy-800 text-gold-50 h-12 text-lg disabled:opacity-70 disabled:cursor-not-allowed gap-2 mt-4"
                disabled={isUploading || !file}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Uploading securely...
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-5 h-5" /> Upload to Vault
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
