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
  const whatsappUrl = `https://wa.me/919999999999?text=${whatsappMessage}`;

  const handleChat = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setHasChatted(true);
  };

  const handleStartApplication = () => {
    if (!session) {
      signIn(undefined, { callbackUrl: `/nri-services/${slug}` });
      return;
    }

    if (!hasChatted) {
      alert('Please chat with us on WhatsApp before starting your application.');
      return;
    }

    router.push(`/apply?service=${service?.slug}`);
  };

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gold-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-gold-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-600 to-gold-400" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/nri-services" className="inline-flex items-center text-navy-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-navy-700 text-sm text-gold-400 font-medium">
                NRI Premium Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-navy-200 font-sans max-w-xl leading-relaxed">
                {service.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-navy-800 rounded-lg px-4 py-3 border border-navy-700">
                  <Clock className="w-5 h-5 text-gold-500" />
                  <div>
                    <div className="text-xs text-navy-400 uppercase tracking-wider">Processing Time</div>
                    <div className="font-semibold text-white">{service.processingTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-navy-800 rounded-lg px-4 py-3 border border-navy-700">
                  <ShieldCheck className="w-5 h-5 text-gold-500" />
                  <div>
                    <div className="text-xs text-navy-400 uppercase tracking-wider">Legal Guarantee</div>
                    <div className="font-semibold text-white">100% Authentic</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="lg:pl-12">
              <Card className="bg-white text-navy-900 border-none shadow-2xl overflow-hidden rounded-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <div className="h-2 w-full bg-gradient-to-r from-gold-400 to-gold-600" />
                <CardContent className="p-8 space-y-8">
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
                        <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
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
                        if (!hasChatted) {
                          alert('Please start a WhatsApp chat before proceeding to application.');
                          return;
                        }
                        handleStartApplication();
                      }}
                      className={`w-full h-14 text-lg font-semibold transition-colors shadow-md ${
                        !session ? 'bg-blue-500 hover:bg-blue-600 text-white' : !hasChatted ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gold-600 hover:bg-gold-700 text-white'
                      }`}
                      disabled={session ? !hasChatted : false}
                    >
                      {session ? (hasChatted ? 'Start Application' : 'Chat First to Apply') : 'Login to Apply'} <ArrowRight className="w-5 h-5 ml-2 inline" />
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

      {/* Requirements Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900">Required Documents</h2>
            <p className="text-navy-600 text-lg">
              To ensure swift processing, please keep digital copies of the following documents ready for upload via our secure vault.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 border border-gold-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-full -z-0 opacity-50" />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {service.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-gold-50/50 p-4 rounded-lg border border-gold-100">
                  <FileText className="w-5 h-5 text-gold-600 shrink-0" />
                  <span className="font-medium text-navy-800">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="bg-white py-20 border-t border-navy-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy-900">How It Works</h2>
            <p className="text-navy-600 text-lg">A seamless 4-step process designed entirely for non-residents.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Apply Online", desc: "Select your service and pay securely via our international gateway." },
              { title: "Upload Documents", desc: "Use our encrypted vault to submit your scanned documents." },
              { title: "Expert Processing", desc: "Our field agents and advocates handle all local bureaucracy." },
              { title: "Doorstep Delivery", desc: "Receive your official certificates via secure tracked DHL courier." }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-900 text-gold-400 font-serif text-xl font-bold mb-6 group-hover:bg-gold-600 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-navy-600 leading-relaxed">{step.desc}</p>
                
                {/* Connector line for desktop */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 left-[3rem] w-[calc(100%-3rem)] h-[1px] bg-navy-100 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
