"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { nriServices } from "@/lib/nri-services";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft, ArrowRight, FileText, Clock, ShieldCheck, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function NRIServiceDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  const service = nriServices.find((s) => s.slug === slug);
  const { formatPrice, currency } = useCurrency();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [hasChatted, setHasChatted] = React.useState(false);

  const whatsappMessage = encodeURIComponent(`Hello Eazy Sevai team, I am interested in ${service?.name} (NRI service). Please assist me with next steps.`);
  const whatsappUrl = `https://wa.me/919944633029?text=${whatsappMessage}`;

  const handleChat = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setHasChatted(true);
  };

  const handleStartApplication = () => {
    if (!session) {
      signIn(undefined, { callbackUrl: `/nri-services/${slug}` });
      return;
    }

    router.push(`/apply?service=${service?.slug}`);
  };

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.8) 0%, rgba(30,58,95,0.6) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/nri-services" className="inline-flex items-center text-navy-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-sm text-[#14b8a6] font-medium">
                NRI Premium Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
                {service.name}
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-sans max-w-xl leading-relaxed">
                {service.longDescription}
              </p>

              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-navy-800/50 rounded-lg px-4 py-3 border border-navy-700/50">
                  <Clock className="w-5 h-5 text-[#14b8a6]" />
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wider">Processing Time</div>
                    <div className="font-semibold text-white">{service.processingTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-navy-800/50 rounded-lg px-4 py-3 border border-navy-700/50">
                  <ShieldCheck className="w-5 h-5 text-[#14b8a6]" />
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wider">Legal Guarantee</div>
                    <div className="font-semibold text-white">100% Authentic</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="lg:pl-12">
              <Card className="bg-white text-navy-900 border-none shadow-2xl shadow-navy-900/10 overflow-hidden rounded-3xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="h-2 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6]" />
                <CardContent className="p-10 md:p-12 space-y-8">
                  <div className="text-center space-y-2">
                    <p className="text-navy-500 font-medium uppercase tracking-widest text-sm">Professional Fee</p>
                    <div className="text-5xl font-serif text-navy-900">
                      {formatPrice(service.prices)}
                    </div>
                    <p className="text-sm text-navy-400">All-inclusive. No hidden charges.</p>
                  </div>
                  
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                        <span className="text-navy-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-800">
                      For every NRI service request, we recommend a short WhatsApp consult first.
                      This ensures all paperwork is in order and avoids delays.
                    </div>

                    <Button
                      onClick={handleChat}
                      className="w-full h-12 text-sm font-semibold bg-green-600 hover:bg-green-700 text-white transition-colors shadow-md"
                    >
                      Chat on WhatsApp First
                    </Button>

                    <Button
                      onClick={() => {
                        if (!session) {
                          signIn(undefined, { callbackUrl: `/nri-services/${slug}` });
                          return;
                        }
                        handleStartApplication();
                      }}
                      className={`w-full h-14 text-lg font-semibold transition-all shadow-md ${
                        !session ? 'bg-[#0066b3] hover:bg-[#004d87] text-white' : 'bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white'
                      }`}
                    >
                      {session ? 'Start Secure Application' : 'Login to Apply'} <ArrowRight className="w-5 h-5 ml-2 inline" />
                    </Button>
                  </div>

                  <p className="text-center text-xs text-navy-400 mt-4">
                    Protected by standard 256-bit encryption. <br className="hidden md:block" />
                    Payments securely processed via international gateway.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-white">Required Documents</h2>
              <p className="text-white/60 text-lg">
                To ensure swift processing, please keep digital copies of the following documents ready for upload via our secure vault.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#14b8a6]/5 rounded-bl-full -z-0 opacity-100" />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {service.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-5 rounded-xl">
                    <FileText className="w-5 h-5 text-[#14b8a6] shrink-0" />
                    <span className="font-medium font-serif text-lg text-white">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white">How It Works</h2>
            <p className="text-white/60 text-lg">A seamless 4-step process designed entirely for non-residents.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Apply Online", desc: "Select your service and pay securely via our international gateway." },
              { title: "Upload Documents", desc: "Use our encrypted vault to submit your scanned documents." },
              { title: "Expert Processing", desc: "Our field agents and advocates handle all local bureaucracy." },
              { title: "Doorstep Delivery", desc: "Receive your official certificates via secure tracked DHL courier." }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] text-white font-serif text-xl font-bold mb-6 shadow-lg shadow-[#0066b3]/30">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-[3rem] w-[calc(100%-3rem)] h-[1px] bg-white/10 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
