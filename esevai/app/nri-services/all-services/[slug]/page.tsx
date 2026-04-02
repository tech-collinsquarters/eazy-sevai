"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import { getAllServices } from "@/lib/services";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { CheckCircle2, ArrowLeft, ArrowRight, FileText, Clock, ShieldCheck, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CURRENCY_SYMBOLS: Record<string, string> = { USD: "$", GBP: "£", AED: "د.إ", INR: "₹" };

export default function NRIServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = getAllServices().find((s) => s.slug === slug);
  const { currency } = useCurrency();
  const router = useRouter();
  const { data: session } = useSession();

  if (!service) notFound();

  // Pick NRI price for the selected currency
  const nriPrice = {
    USD: service.priceUSD,
    GBP: service.priceGBP,
    AED: service.priceAED,
    INR: service.nriTotalPayable,
  }[currency];

  const symbol = CURRENCY_SYMBOLS[currency];

  const whatsappMsg = encodeURIComponent(
    `Hi Eazy Sevai, I need NRI assistance with: ${service.name}. Please guide me on next steps.`
  );
  const whatsappUrl = `https://wa.me/919944633029?text=${whatsappMsg}`;

  const handleApply = () => {
    if (!session) {
      signIn(undefined, { callbackUrl: `/nri-services/all-services/${slug}` });
    } else {
      router.push(`/apply?service=${slug}&from=nri`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(30,58,95,0.65) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/nri-services/all-services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All NRI Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — service info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-[#14b8a6]" style={{ background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.25)" }}>
                NRI Premium Service
              </div>

              <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                {service.name}
              </h1>

              <p className="text-lg text-white/65 leading-relaxed max-w-xl">
                {service.description}
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <Clock className="w-4 h-4 text-[#14b8a6]" />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider">Processing</div>
                    <div className="text-sm font-semibold text-white">{service.processingTime}</div>
                  </div>
                </div>
                {service.isFullyOnline && (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Globe className="w-4 h-4 text-[#14b8a6]" />
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">Mode</div>
                      <div className="text-sm font-semibold text-white">100% Remote</div>
                    </div>
                  </div>
                )}
                {service.popular && (
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.3)" }}>
                    <Zap className="w-4 h-4 text-[#14b8a6]" />
                    <div className="text-sm font-semibold text-[#14b8a6]">Popular Service</div>
                  </div>
                )}
              </div>
            </div>

            {/* Right — pricing card */}
            <div>
              <Card className="bg-white border-none rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6]" />
                <CardContent className="p-10 space-y-7">
                  {/* Price */}
                  <div className="text-center space-y-1">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">NRI Professional Fee</p>
                    <div className="text-5xl font-serif font-bold text-[#1e3a5f]">
                      {symbol}{nriPrice?.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-400">All-inclusive · No hidden charges</p>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-3">
                    {[
                      "Dedicated NRI case manager",
                      "100% remote — no travel to India",
                      "Secure DHL international delivery",
                      "WhatsApp updates at every step",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 pt-1">
                    <div className="rounded-xl p-3 text-sm text-blue-800" style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}>
                      We recommend a quick WhatsApp consult before applying to ensure all paperwork is in order.
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white text-sm transition-opacity hover:opacity-90"
                      style={{ background: "#16a34a" }}
                    >
                      Chat on WhatsApp First
                    </a>
                    <button
                      onClick={handleApply}
                      className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)" }}
                    >
                      {session ? "Start Secure Application" : "Login to Apply"}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-center text-xs text-gray-400">
                    256-bit encrypted · International payment gateway
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-white mb-2">Required Documents</h2>
            <p className="text-white/50">Keep digital copies ready to upload via our secure vault</p>
          </div>
          <div
            className="rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {service.requiredDocuments.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <FileText className="w-5 h-5 text-[#14b8a6] shrink-0" />
                <span className="text-white font-medium text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-2">How It Works</h2>
            <p className="text-white/50">Seamless 4-step process designed for non-residents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Apply Online", desc: "Select service and pay via our international gateway" },
              { title: "Upload Documents", desc: "Use our encrypted vault to submit scanned docs" },
              { title: "Expert Processing", desc: "Field agents & advocates handle all local bureaucracy" },
              { title: "Delivery", desc: "Receive certified documents via secure DHL courier" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-4 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #0066b3, #14b8a6)", boxShadow: "0 4px 20px rgba(0,102,179,0.3)" }}
                >
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 pb-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div
            className="rounded-2xl p-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <ShieldCheck className="w-10 h-10 text-[#14b8a6] mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Ready to get started?</h3>
            <p className="text-white/50 text-sm mb-5">
              Our NRI concierge team is available via WhatsApp Monday–Saturday, 9am–8pm IST.
            </p>
            <button
              onClick={handleApply}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)" }}
            >
              {session ? "Start My Application" : "Login to Apply"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
