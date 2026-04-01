"use client";

import React from "react";
import Link from "next/link";
import { getAllServices } from "@/lib/services";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";

// NRI pricing multipliers (conversion from INR with markup)
const NRI_PRICE_MULTIPLIERS = {
  USD: { rate: 0.012, markup: 1.25 }, // INR to USD + 25% markup
  GBP: { rate: 0.0095, markup: 1.25 }, // INR to GBP + 25% markup
  AED: { rate: 0.044, markup: 1.20 }, // INR to AED + 20% markup
  INR: { rate: 1, markup: 1.15 }, // INR with 15% markup (for consistency)
};

function convertToNRIPrice(priceINR: number, currency: "USD" | "GBP" | "AED" | "INR") {
  const { rate, markup } = NRI_PRICE_MULTIPLIERS[currency];
  return Math.ceil(priceINR * rate * markup);
}

export default function NRIAllServicesPage() {
  const { formatPrice, currency, setCurrency } = useCurrency();
  const allServices = getAllServices();

  // Group services by category
  const servicesByCategory = [
    { id: "identity", name: "Identity & Cards", icon: "🪪" },
    { id: "certificates", name: "Certificates", icon: "📜" },
    { id: "legal", name: "Legal Services", icon: "⚖️" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "property", name: "Property", icon: "🏠" },
    { id: "welfare", name: "Welfare", icon: "🤝" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "health", name: "Health", icon: "🏥" },
  ]
    .map((category) => ({
      ...category,
      services: allServices.filter((s) => s.category === category.id),
    }))
    .filter((cat) => cat.services.length > 0);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#0066b3] text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="bg-[#14b8a6] text-white hover:bg-[#0f9e8d] font-sans tracking-wide mb-4">
              NRI Premium Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              All Government Services for NRIs
            </h1>
            <p className="text-lg text-navy-100 font-sans">
              Access all 57+ government services with NRI-friendly pricing and international support.
              No travel to India required—we handle everything remotely.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg shadow-navy-900/5 border-none">
            <div className="bg-blue-50 p-3 rounded-full text-[#0066b3]">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">100% Remote Process</h3>
              <p className="text-sm text-navy-500">All services accessible from anywhere</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg shadow-navy-900/5 border-none">
            <div className="bg-blue-50 p-3 rounded-full text-[#0066b3]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-navy-900">Expert Assistance</h3>
              <p className="text-sm text-navy-500">Legal advocates & field agents at every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Switcher */}
      <section className="container mx-auto px-4 py-6 flex justify-center">
        <div className="bg-white p-3 rounded-lg shadow-sm border border-[#0066b3]/10 flex gap-2">
          {(["USD", "GBP", "AED", "INR"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currency === c ? "bg-[#0066b3] text-white" : "text-navy-500 hover:bg-blue-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Services by Category */}
      <section className="container mx-auto px-4 py-12 space-y-16">
        {servicesByCategory.map((category) => (
          <div key={category.id} id={category.id}>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-[#0066b3]/20">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h2 className="text-3xl font-serif text-navy-900">{category.name}</h2>
                <p className="text-sm text-navy-500 mt-1">{category.services.length} services available</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <Card
                  key={service.id}
                  className="group shadow-xl shadow-navy-900/5 hover:shadow-2xl hover:shadow-navy-900/10 border-none bg-white flex flex-col h-full overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <CardHeader className="p-8">
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <Badge variant="outline" className="border-navy-100 text-navy-600 bg-navy-50 hover:bg-navy-50 flex-shrink-0">
                        {service.processingTime}
                      </Badge>
                      {service.popular && (
                        <Badge className="bg-[#14b8a6] text-white flex-shrink-0">HOT</Badge>
                      )}
                    </div>
                    <CardTitle className="font-serif text-2xl text-navy-900 leading-tight">
                      {service.name}
                    </CardTitle>
                    <CardDescription className="text-navy-600 text-sm mt-2 line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow px-8">
                    <div className="mb-4">
                      <p className="text-xs text-navy-400 uppercase tracking-wider mb-1">NRI Price</p>
                      <div className="text-3xl font-serif font-semibold text-navy-900">
                        {currency === "INR" && "₹"}
                        {currency === "USD" && "$"}
                        {currency === "GBP" && "£"}
                        {currency === "AED" && "د.إ "}
                        {formatPrice({
                          USD: service.priceUSD || convertToNRIPrice(service.totalPayable, "USD"),
                          GBP: service.priceGBP || convertToNRIPrice(service.totalPayable, "GBP"),
                          AED: service.priceAED || convertToNRIPrice(service.totalPayable, "AED"),
                          INR: service.nriTotalPayable || convertToNRIPrice(service.totalPayable, "INR"),
                        })}
                      </div>
                      <p className="text-xs text-navy-400 mt-1">Includes international support</p>
                    </div>
                  </CardContent>
                  <CardFooter className="p-8 pt-6 border-t border-[#0066b3]/10">
                    <Link href={`/services/${service.slug}`} className="w-full">
                      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white py-3 md:py-4 rounded-xl font-medium transition-colors text-sm">
                        View & Apply <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0066b3] to-[#1e3a5f] text-white py-16">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-serif">Need Help Choosing?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Chat with our NRI specialists on WhatsApp to get personalized assistance with your service selection.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi%20Eazy%20Sevai%20team,%20I%20need%20help%20selecting%20a%20service%20from%20your%20all-services%20catalog."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
