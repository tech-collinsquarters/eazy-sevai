"use client";

import { useState, useMemo } from "react";
import React from "react";
import Link from "next/link";
import { getAllServices } from "@/lib/services";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";
import SearchBar from "@/components/SearchBar";

// NRI pricing multipliers (conversion from INR with markup)
const NRI_PRICE_MULTIPLIERS = {
  USD: { rate: 0.012, markup: 1.25 },
  GBP: { rate: 0.0095, markup: 1.25 },
  AED: { rate: 0.044, markup: 1.20 },
  INR: { rate: 1, markup: 1.15 },
};

function convertToNRIPrice(priceINR: number, currency: "USD" | "GBP" | "AED" | "INR") {
  const { rate, markup } = NRI_PRICE_MULTIPLIERS[currency];
  return Math.ceil(priceINR * rate * markup);
}

export default function NRIAllServicesPage() {
  const { formatPrice, currency, setCurrency } = useCurrency();
  const allServices = getAllServices();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter across ALL 57+ services
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return allServices;
    const q = searchQuery.toLowerCase();
    return allServices.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description?.toLowerCase().includes(q) ||
        s.category?.toLowerCase().includes(q) ||
        s.slug?.toLowerCase().includes(q)
    );
  }, [searchQuery, allServices]);

  // Group filtered services by category
  const CATEGORIES = [
    { id: "identity", name: "Identity & Cards", icon: "🪪" },
    { id: "certificates", name: "Certificates", icon: "📜" },
    { id: "legal", name: "Legal Services", icon: "⚖️" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "property", name: "Property", icon: "🏠" },
    { id: "welfare", name: "Welfare", icon: "🤝" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "health", name: "Health", icon: "🏥" },
  ];

  // When searching, show a flat grid. When browsing, show by category.
  const isSearching = searchQuery.trim().length > 0;

  const servicesByCategory = CATEGORIES
    .map((category) => ({
      ...category,
      services: filteredServices.filter((s) => s.category === category.id),
    }))
    .filter((cat) => cat.services.length > 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(30,58,95,0.7) 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl">
            <Badge className="bg-[#14b8a6]/20 text-[#14b8a6] border border-[#14b8a6]/30 hover:bg-[#14b8a6]/30 font-sans tracking-wide mb-4">
              NRI Premium Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              All Government Services for NRIs
            </h1>
            <p className="text-lg text-white/70 font-sans">
              Access all 57+ government services with NRI-friendly pricing and international support.
              No travel to India required — we handle everything remotely.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search all 57+ services — e.g. PAN card, passport, birth certificate..."
            theme="dark"
            resultCount={filteredServices.length}
            totalCount={allServices.length}
          />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="bg-[#14b8a6]/20 p-3 rounded-full text-[#14b8a6]"><Globe className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white">100% Remote Process</h3>
              <p className="text-sm text-white/50">All services accessible from anywhere</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <div className="bg-[#14b8a6]/20 p-3 rounded-full text-[#14b8a6]"><ShieldCheck className="w-6 h-6" /></div>
            <div>
              <h3 className="font-semibold text-white">Expert Assistance</h3>
              <p className="text-sm text-white/50">Legal advocates & field agents at every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Currency Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex justify-center">
        <div className="bg-white/5 border border-white/10 p-1.5 rounded-xl flex gap-1 backdrop-blur-sm">
          {(["USD", "GBP", "AED", "INR"] as const).map((c) => (
            <button key={c} onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                currency === c ? "bg-gradient-to-r from-[#0066b3] to-[#14b8a6] text-white shadow-md" : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-16">

        {/* Flat search results */}
        {isSearching ? (
          <>
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xl font-semibold text-white">
                {filteredServices.length > 0
                  ? `${filteredServices.length} result${filteredServices.length !== 1 ? "s" : ""} for "${searchQuery}"`
                  : `No results for "${searchQuery}"`}
              </h2>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                Clear
              </button>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    currency={currency}
                    formatPrice={formatPrice}
                    convertToNRIPrice={convertToNRIPrice}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-white/50 text-lg mb-4">No services found for &quot;{searchQuery}&quot;</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-2.5 rounded-xl text-white font-semibold text-sm"
                  style={{ background: "linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)" }}
                >
                  Show all services
                </button>
              </div>
            )}
          </>
        ) : (
          /* Category-grouped browse view */
          <div className="space-y-16">
            {servicesByCategory.map((category) => (
              <div key={category.id} id={category.id}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-white/10">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h2 className="text-3xl font-serif text-white">{category.name}</h2>
                    <p className="text-sm text-white/40 mt-1">{category.services.length} services available</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      currency={currency}
                      formatPrice={formatPrice}
                      convertToNRIPrice={convertToNRIPrice}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-serif text-white">Need Help Choosing?</h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-3 mb-6">
              Chat with our NRI specialists on WhatsApp to get personalized assistance.
            </p>
            <a
              href="https://wa.me/919944633029?text=Hi%20Eazy%20Sevai%20team,%20I%20need%20help%20selecting%20a%20service."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:opacity-90 text-white rounded-xl font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Extracted card component to avoid repetition
function ServiceCard({ service, currency, formatPrice, convertToNRIPrice }: {
  service: ReturnType<typeof getAllServices>[number];
  currency: "USD" | "GBP" | "AED" | "INR";
  formatPrice: (prices: { USD: number; GBP: number; AED: number; INR: number }) => string;
  convertToNRIPrice: (price: number, currency: "USD" | "GBP" | "AED" | "INR") => number;
}) {
  return (
    <Card 
      className="group shadow-xl shadow-navy-900/20 hover:shadow-2xl border-none flex flex-col h-full overflow-hidden rounded-2xl cursor-pointer"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2240 100%)" }}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <CardHeader className="p-8">
        <div className="flex justify-between items-start mb-3 gap-2">
          <Badge variant="outline" className="border-white/20 text-white/70 bg-white/10 hover:bg-white/20 flex-shrink-0">
            {service.processingTime}
          </Badge>
          {service.popular && (
            <Badge className="bg-[#14b8a6] text-white flex-shrink-0">HOT</Badge>
          )}
        </div>
        <CardTitle className="font-serif text-2xl text-white leading-tight">
          {service.name}
        </CardTitle>
        <CardDescription className="text-white/60 text-sm mt-2 line-clamp-2">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow px-8">
        <div className="mb-4">
          <p className="text-xs text-navy-300 uppercase tracking-wider mb-1">NRI Price</p>
          <div className="text-3xl font-serif font-semibold text-[#14b8a6]">
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
          <p className="text-xs text-white/40 mt-1">Includes international support</p>
        </div>
      </CardContent>
      <CardFooter className="p-8 pt-6 border-t border-white/10">
        <Link href={`/nri-services/all-services/${service.slug}`} className="w-full">
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white py-3 md:py-4 rounded-xl font-medium transition-colors text-sm">
            View & Apply <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </CardFooter>
    </Card>
  );
}

