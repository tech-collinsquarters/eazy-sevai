import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, UploadCloud, ShieldCheck, CalendarDays } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect("/login");
  }

  const userId = (session.user as { id: string }).id;

  // Fetch user's documents from Prisma
  const documents = await prisma.document.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="container mx-auto py-12 px-4 space-y-8 bg-gold-50 min-h-screen">
      <div className="flex justify-between items-end border-b border-gold-200 pb-6">
        <div>
          <h1 className="text-3xl font-serif text-navy-900">Secure Vault</h1>
          <p className="text-navy-600 font-sans mt-2">Manage your sensitive documents safely via AES-256 encryption.</p>
        </div>
        <Link href="/dashboard/upload">
          <Button className="bg-navy-900 hover:bg-navy-800 text-gold-50 gap-2">
            <UploadCloud className="w-4 h-4" /> Upload Document
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border-gold-200 shadow-sm bg-white">
          <CardHeader className="bg-navy-50/50 border-b border-navy-100">
            <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold-600" /> Your Files
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {documents.length === 0 ? (
              <div className="p-12 text-center space-y-3">
                <FileText className="w-12 h-12 text-navy-200 mx-auto" />
                <p className="text-navy-600">No documents found in your vault.</p>
                <Link href="/dashboard/upload">
                  <Button variant="outline" className="border-gold-300 text-gold-700 mt-2 hover:bg-gold-50">Upload your first file</Button>
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-navy-100">
                {documents.map((doc: { id: string; fileName: string; createdAt: Date; fileSize: number; status: string }) => (
                  <li key={doc.id} className="p-4 flex items-center justify-between hover:bg-gold-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-navy-100 p-2 rounded text-navy-600">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-navy-900">{doc.fileName}</p>
                        <p className="text-xs text-navy-500">{new Date(doc.createdAt).toLocaleDateString()} &bull; {Math.round(doc.fileSize / 1024)} KB &bull; <span className="uppercase">{doc.status}</span></p>
                      </div>
                    </div>
                    {/* The download link needs an API route to generate a presigned download URL */}
                    <a href={`/api/documents/download?id=${doc.id}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-gold-600 hover:bg-gold-100 hover:text-gold-700">
                        <Download className="w-4 h-4" />
                      </Button>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        {/* Side Panel: Consultations & Security */}
        <div className="space-y-6 md:col-span-1">
          <Card className="border-gold-200 shadow-md bg-white hover:border-gold-300 transition-colors">
            <CardHeader className="bg-gold-50/50">
              <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-gold-600" /> Consultations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <p className="text-navy-600 font-sans text-sm">
                Need expert advice? Schedule a 1-on-1 video call with our NRI legal specialists.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <a
                  href="https://wa.me/919999999999?text=Hi%20Eazy%20Sevai%20team,%20I%20want%20a%201-on-1%20NRI%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                    Chat on WhatsApp for consultation
                  </Button>
                </a>
                <Link href="/dashboard/consultation">
                  <Button className="w-full bg-gold-600 hover:bg-gold-500 text-white font-medium">
                    Book in-app 1-on-1 session
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gold-200 shadow-md bg-white hover:border-gold-300 transition-colors">
            <CardHeader className="bg-navy-50/50">
              <CardTitle className="text-xl text-navy-900">Explore Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <Link href="/nri-services">
                <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white font-medium">
                  View NRI Services
                </Button>
              </Link>
              <Link href="/nri-services/all-services">
                <Button className="w-full bg-gold-600 hover:bg-gold-500 text-white font-medium">
                  Browse All Services (NRI Pricing)
                </Button>
              </Link>
              <p className="text-xs text-navy-500">
                Before applying for an NRI service, please connect with us on WhatsApp (click the green button in service pages).
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-gradient-to-br from-navy-900 to-navy-800 text-white h-fit">
            <CardHeader>
              <CardTitle className="text-gold-400 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" /> Military-Grade Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-navy-100 text-sm">
              <p>
                Documents are uploaded directly to our secure AWS S3 enterprise buckets, bypassing our application servers entirely.
              </p>
              <p>
                All files are strictly encrypted at rest and in transit. Access is limited through highly-restrictive IAM policies and time-limited pre-signed URLs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
