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
      // 1. Upload to Cloudinary securely
      const formData = new FormData();
      formData.append("file", file);
      
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "esevai-uploads";
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      
      if (!cloudName) throw new Error("Cloudinary configuration missing");
      
      formData.append("upload_preset", uploadPreset);
      
      const uploadRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error("Failed to upload file to Secure Vault");
      }
      
      const clData = await uploadRes.json();
      const fileKey = clData.public_id;
      const fileUrl = clData.secure_url;

      // 2. Confirm upload with our server to save metadata
      const confirmRes = await fetch("/api/documents/confirm-upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          fileKey: fileKey,
          fileUrl: fileUrl,
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
    <div className="min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4 border-b border-white/10 pb-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-white/5">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-serif text-white">Upload Document</h1>
            <p className="text-white/50 font-sans mt-1">Upload securely to your encrypted vault.</p>
          </div>
        </div>

        <Card className="border-none shadow-2xl shadow-navy-900/10 bg-white rounded-3xl overflow-hidden">
          <CardHeader className="bg-blue-50/50 border-b border-[#0066b3]/10">
            <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-[#0066b3]" /> New File Upload
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
                  className="flex h-12 w-full rounded-xl border border-gray-200 focus:border-[#14b8a6] focus:ring-[#14b8a6] focus:ring-1 focus-visible:outline-none bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="border-gray-200 focus-visible:ring-[#14b8a6] h-12 cursor-pointer rounded-xl"
                  accept=".pdf,.jpg,.jpeg,.png,.docx"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white h-14 rounded-xl text-lg disabled:opacity-70 disabled:cursor-not-allowed gap-2 mt-4 shadow-md transition-all"
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
