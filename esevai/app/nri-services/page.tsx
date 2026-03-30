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
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gold-200 pb-8">
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
        <div className="bg-white p-2 rounded-lg shadow-sm border border-gold-100 flex gap-2">
          {(["USD", "GBP", "AED", "INR"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === c 
                  ? "bg-navy-900 text-gold-50" 
                  : "text-navy-500 hover:bg-navy-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-navy-50">
          <div className="bg-gold-50 p-3 rounded-full text-gold-600">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">100% Remote Process</h3>
            <p className="text-sm text-navy-500">Zero travel required to India</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-navy-50">
          <div className="bg-gold-50 p-3 rounded-full text-gold-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">Legal Vetting</h3>
            <p className="text-sm text-navy-500">Expert advocate representation</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-navy-50">
          <div className="bg-gold-50 p-3 rounded-full text-gold-600">
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
          <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-gold-200 bg-white flex flex-col h-full overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-400 to-gold-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className="border-navy-200 text-navy-600">
                  {service.processingTime}
                </Badge>
                <div className="text-2xl font-semibold text-navy-900">
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
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {service.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-navy-700">
                    <ShieldCheck className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-6 border-t border-navy-50">
              <Link 
                href={`/nri-services/${service.slug}`} 
                className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 text-white py-3 rounded-lg font-medium transition-colors"
              >
                View Details & Apply <ArrowRight className="w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* CTA: All Services for NRIs */}
      <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gold-50 mb-4">
          Want to Explore All Government Services?
        </h2>
        <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8">
          Browse all 57+ Tamil Nadu government services with NRI-optimized pricing and international support.
        </p>
        <Link
          href="/nri-services/all-services"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-lg font-semibold transition-colors shadow-lg text-lg"
        >
          Browse All NRI Services <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
