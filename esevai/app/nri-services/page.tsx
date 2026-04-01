"use client";

import React from "react";
import Link from "next/link";
import { nriServices } from "@/lib/nri-services";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, ShieldCheck, Clock } from "lucide-react";

export default function NRIServicesDirectory() {
  const { formatPrice, currency, setCurrency } = useCurrency();

  return (
    <div className="container mx-auto py-16 px-4 space-y-12">
      {/* Header & Currency Switcher */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#0066b3]/20 pb-8">
        <div className="space-y-4 max-w-2xl">
          <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-200 font-sans tracking-wide">
            NRI Concierge Desk
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif text-navy-900">
            Premium Document Services for NRIs
          </h1>
          <p className="text-lg text-navy-600 font-sans">
            Navigate Tamil Nadu&apos;s bureaucratic processes seamlessly from anywhere in the world. 
            No physical travel required. End-to-end legal assistance.
          </p>
        </div>
        
        {/* Currency Switcher */}
        <div className="bg-white p-2 rounded-lg shadow-sm border border-[#0066b3]/10 flex gap-2">
          {(["USD", "GBP", "AED", "INR"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === c 
                  ? "bg-[#0066b3] text-white" 
                  : "text-navy-500 hover:bg-blue-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg shadow-navy-900/5 border-none">
          <div className="bg-blue-50 p-3 rounded-full text-[#0066b3]">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">100% Remote Process</h3>
            <p className="text-sm text-navy-500">Zero travel required to India</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg shadow-navy-900/5 border-none">
          <div className="bg-blue-50 p-3 rounded-full text-[#0066b3]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">Legal Vetting</h3>
            <p className="text-sm text-navy-500">Expert advocate representation</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg shadow-navy-900/5 border-none">
          <div className="bg-blue-50 p-3 rounded-full text-[#0066b3]">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">Timely Dispatch</h3>
            <p className="text-sm text-navy-500">Secure DHL delivery worldwide</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
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
                {service.benefits.slice(0, 3).map((benefit, idx) => (
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

      {/* CTA: All Services for NRIs */}
      <div className="mt-16 bg-gradient-to-r from-[#0066b3] to-[#1e3a5f] rounded-2xl p-12 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
          Want to Explore All Government Services?
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
          Browse all 57+ Tamil Nadu government services with NRI-optimized pricing and international support.
        </p>
        <Link
          href="/nri-services/all-services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#0066b3] rounded-lg font-semibold transition-colors shadow-lg text-lg"
        >
          Browse All NRI Services <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
