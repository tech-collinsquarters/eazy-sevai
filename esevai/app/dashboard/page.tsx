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
    <div className="container mx-auto py-12 px-4 space-y-8 bg-gradient-to-br from-white via-blue-50 to-teal-50 min-h-screen">
      <div className="flex justify-between items-end border-b border-[#0066b3]/10 pb-6">
        <div>
          <h1 className="text-3xl font-serif text-navy-900">Secure Vault</h1>
          <p className="text-navy-600 font-sans mt-2">Manage your sensitive documents safely via AES-256 encryption.</p>
        </div>
        <Link href="/dashboard/upload">
          <Button className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white gap-2 shadow-md">
            <UploadCloud className="w-4 h-4" /> Upload Document
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 border-none shadow-xl shadow-navy-900/5 bg-white rounded-3xl overflow-hidden">
          <CardHeader className="bg-blue-50/50 border-b border-[#0066b3]/10 py-5">
            <CardTitle className="text-2xl font-serif text-navy-900 flex items-center gap-2.5">
              <FileText className="w-6 h-6 text-[#0066b3]" strokeWidth={2.5} /> Your Files
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {documents.length === 0 ? (
              <div className="p-16 flex flex-col items-center justify-center space-y-4 text-center">
                <div className="bg-blue-50/50 p-4 rounded-full border border-blue-100">
                  <FileText className="w-12 h-12 text-[#0066b3] opacity-50" />
                </div>
                <p className="text-navy-600 font-medium">No documents found in your vault.</p>
                <Link href="/dashboard/upload">
                  <Button variant="outline" className="border-[#14b8a6]/50 text-[#0066b3] mt-2 hover:bg-teal-50 rounded-xl shadow-sm px-6 h-11 font-semibold">
                    Upload your first file
                  </Button>
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-[#0066b3]/5">
                {documents.map((doc: { id: string; fileName: string; createdAt: Date; fileSize: number; status: string }) => (
                  <li key={doc.id} className="p-4 flex items-center justify-between hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="bg-blue-50 p-2 rounded-xl text-[#0066b3] shrink-0 border border-blue-100/50">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1 pr-4">
                        <p className="font-semibold text-navy-900 truncate">{doc.fileName}</p>
                        <p className="text-xs text-navy-500 font-medium mt-0.5">{new Date(doc.createdAt).toLocaleDateString()} &bull; {Math.round(doc.fileSize / 1024)} KB &bull; <span className="uppercase text-[#14b8a6]">{doc.status}</span></p>
                      </div>
                    </div>
                    {/* The download link needs an API route to generate a presigned download URL */}
                    <a href={`/api/documents/download?id=${doc.id}`} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-[#0066b3] hover:bg-blue-100 hover:text-[#004d87]">
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
          <Card className="border-none shadow-xl shadow-navy-900/5 bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
            <CardHeader className="bg-blue-50/50 py-5">
              <CardTitle className="text-2xl font-serif text-navy-900 flex items-center gap-2.5">
                <CalendarDays className="w-6 h-6 text-[#14b8a6]" strokeWidth={2.5} /> Consultations
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
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:opacity-90 shadow-lg shadow-green-500/20 text-white font-semibold rounded-xl h-12 transition-all hover:scale-[1.01]">
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link href="/dashboard/consultation">
                  <Button className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#0066b3] border border-[#14b8a6]/50 shadow-lg shadow-[#0066b3]/20 hover:scale-[1.01] text-white font-semibold rounded-xl h-12 transition-all hover:opacity-90">
                    Book Video Session
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl shadow-navy-900/5 bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
            <CardHeader className="bg-blue-50/50 py-5">
              <CardTitle className="text-2xl font-serif text-navy-900">Explore Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col gap-4">
              <Link href="/nri-services">
                <Button className="w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white font-medium rounded-xl h-12 shadow-md hover:scale-[1.01] transition-all">
                  View NRI Services
                </Button>
              </Link>
              <Link href="/nri-services/all-services">
                <Button className="w-full bg-white border-2 border-[#0066b3]/80 text-[#0066b3] hover:bg-blue-50 font-bold rounded-xl h-12 shadow-sm hover:scale-[1.01] transition-all mt-1">
                  Browse All Services (NRI)
                </Button>
              </Link>
              <p className="text-xs text-navy-500">
                Before applying for an NRI service, please connect with us on WhatsApp (click the green button in service pages).
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl shadow-navy-900/10 bg-gradient-to-br from-[#1e3a5f] to-[#0066b3] text-white h-fit rounded-3xl overflow-hidden">
            <CardHeader className="py-5">
              <CardTitle className="text-2xl font-serif text-[#14b8a6] flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6" strokeWidth={2.5} /> Enterprise Vault
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-100 text-sm">
              <p>
                Documents are uploaded securely to our enterprise cloud storage, bypassing our application servers entirely for maximum security.
              </p>
              <p>
                All files are encrypted at rest and in transit. Access is limited through highly-restrictive IAM policies and time-limited secure links.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
