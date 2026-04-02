"use client";

import Link from "next/link";
import { nriServices } from "@/lib/nri-services";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, ShieldCheck, Clock } from "lucide-react";

export default function NRIServicesDirectory() {
  const { formatPrice, currency, setCurrency } = useCurrency();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

      {/* Header & Currency Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-8">
        <div className="space-y-4 max-w-2xl">
          <Badge className="bg-[#14b8a6]/20 text-[#14b8a6] border border-[#14b8a6]/30 hover:bg-[#14b8a6]/30 font-sans tracking-wide">
            NRI Concierge Desk
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            Premium Document Services for NRIs
          </h1>
          <p className="text-lg text-white/70 font-sans">
            Navigate Tamil Nadu&apos;s bureaucratic processes seamlessly from anywhere in the world.
            No physical travel required. End-to-end legal assistance.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="bg-white/5 border border-white/10 p-1.5 rounded-xl flex gap-1 backdrop-blur-sm flex-shrink-0">
          {(["USD", "GBP", "AED", "INR"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                currency === c
                  ? "bg-gradient-to-r from-[#0066b3] to-[#14b8a6] text-white shadow-md"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl">
          <div className="bg-[#14b8a6]/20 p-3 rounded-full text-[#14b8a6]">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">100% Remote Process</h3>
            <p className="text-sm text-white/50">Zero travel required to India</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl">
          <div className="bg-[#14b8a6]/20 p-3 rounded-full text-[#14b8a6]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Legal Vetting</h3>
            <p className="text-sm text-white/50">Expert advocate representation</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl">
          <div className="bg-[#14b8a6]/20 p-3 rounded-full text-[#14b8a6]">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Timely Dispatch</h3>
            <p className="text-sm text-white/50">Secure DHL delivery worldwide</p>
          </div>
        </div>
      </div>

      {/* Services Grid — all services, no search filter */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {nriServices.map((service) => (
          <Card key={service.id} className="group shadow-xl shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 border-none bg-white flex flex-col h-full overflow-hidden rounded-2xl cursor-pointer">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <CardHeader className="p-8">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="border-navy-100 text-navy-600 bg-navy-50 hover:bg-navy-50">
                  {service.processingTime}
                </Badge>
                <div className="text-2xl font-semibold font-serif text-navy-900">
                  {formatPrice(service.prices)}
                </div>
              </div>
              <CardTitle className="font-serif text-2xl text-navy-900 leading-tight">
                {service.name}
              </CardTitle>
              <CardDescription className="text-navy-600 text-base mt-2 line-clamp-2">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow px-8">
              <ul className="space-y-3">
                {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-navy-700">
                    <ShieldCheck className="w-4 h-4 text-[#14b8a6] mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8 pt-6 border-t border-navy-50">
              <Link
                href={`/nri-services/${service.slug}`}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white py-3 md:py-4 rounded-xl font-medium transition-colors"
              >
                View Details & Apply <ArrowRight className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-12 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
          Want to Explore All Government Services?
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
          Browse all 57+ Tamil Nadu government services with NRI-optimized pricing and international support.
        </p>
        <Link
          href="/nri-services/all-services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white rounded-xl font-semibold transition-all shadow-lg text-lg hover:scale-[1.02]"
        >
          Browse All NRI Services <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
