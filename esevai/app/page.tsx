"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Shield, CheckCircle, Clock, FileCheck, TrendingUp, Users, Award, Zap } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";

const ALL_SERVICES = [
  { icon: "📜", title: "Community Certificate", description: "Required for education, employment, and government schemes", href: "/services/community-certificate", tags: ["community", "certificate", "caste"] },
  { icon: "💰", title: "Income Certificate", description: "Proof of income for scholarships, loans and subsidies", href: "/services/income-certificate", tags: ["income", "certificate"] },
  { icon: "👶", title: "Birth Certificate", description: "Essential identity document for passports and school", href: "/services/birth-certificate", tags: ["birth", "certificate"] },
  { icon: "💳", title: "PAN Card", description: "Permanent Account Number for all financial transactions", href: "/services/pan-card", tags: ["pan", "card", "income tax"] },
  { icon: "🪪", title: "Aadhaar Services", description: "Aadhaar update, correction and mobile number linking", href: "/services/aadhaar", tags: ["aadhaar", "uid", "identity"] },
  { icon: "🛂", title: "Passport Services", description: "New passport application, renewal and Tatkaal processing", href: "/services/passport", tags: ["passport", "travel"] },
  { icon: "📊", title: "Income Tax Filing", description: "ITR filing for individuals, HUF and small businesses", href: "/services/income-tax", tags: ["income", "tax", "itr", "filing"] },
  { icon: "🚗", title: "Driving Licence", description: "New DL application, renewal and address change", href: "/services/driving-licence", tags: ["driving", "licence", "dl"] },
  { icon: "🏠", title: "Patta Transfer", description: "Land patta transfer and mutation services", href: "/services/patta-transfer", tags: ["patta", "land", "property"] },
  { icon: "📋", title: "Legal Heir Certificate", description: "Succession and legal heir certification for property claims", href: "/services/legal-heir", tags: ["legal", "heir", "succession"] },
  { icon: "🎓", title: "Nativity Certificate", description: "Prove your state of origin for admissions and employment", href: "/services/nativity-certificate", tags: ["nativity", "certificate"] },
  { icon: "💼", title: "Trade Licence", description: "Business trade licence registration and renewal", href: "/services/trade-licence", tags: ["trade", "licence", "business"] },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return ALL_SERVICES;
    const q = searchQuery.toLowerCase();
    return ALL_SERVICES.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tags.some((t) => t.includes(q))
    );
  }, [searchQuery]);

  return (
    <>
      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> Eazy Sevai is a documentation consultancy service.
          We are NOT a government agency. Some services require your physical presence
          at government offices. Government fees are separate and payable at actuals for
          variable fee services.
        </p>
      </div>

      <div className="min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-white via-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0066b3]/20 rounded-full text-sm font-semibold mb-6 shadow-sm" style={{ color: "#0066b3" }}>
                <Shield className="w-4 h-4" />
                Professional Documentation Services
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ color: "#1e3a5f" }}>
                Fast, Easy, Verified.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-3 max-w-3xl mx-auto">
                Your Government Documents Done Right.
              </p>
              <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto">
                Expert private consulting — skip the queues and get it right the first time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
                  style={{ background: "linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)" }}
                >
                  Browse All Services →
                </Link>
                <Link
                  href="/nri-services"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#1e3a5f] via-[#0066b3] to-[#14b8a6] text-white rounded-lg hover:opacity-90 hover:scale-[1.02] transition-all font-semibold text-lg shadow-[0_0_20px_rgba(20,184,166,0.2)] border border-[#14b8a6]/30"
                >
                  Premium NRI Services ✨
                </Link>
              </div>

              {/* ── Search Bar ── */}
              <div className="max-w-2xl mx-auto">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search services — e.g. PAN card, passport, income tax..."
                  theme="light"
                  resultCount={filtered.length}
                  totalCount={ALL_SERVICES.length}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              {searchQuery ? (
                <>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: "#1e3a5f" }}>
                    Search Results
                  </h2>
                  <p className="text-gray-500">
                    {filtered.length > 0
                      ? `${filtered.length} service${filtered.length !== 1 ? "s" : ""} found for "${searchQuery}"`
                      : `No services found for "${searchQuery}" — try a different keyword`}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#1e3a5f" }}>
                    Popular Services
                  </h2>
                  <p className="text-gray-500 text-lg">Most requested government services</p>
                </>
              )}
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((service) => (
                  <ServiceCard
                    key={service.href}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    theme="light"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-gray-500 mb-4">No results found</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-6 py-2 text-white rounded-lg font-medium text-sm"
                  style={{ background: "#0066b3" }}
                >
                  Clear search
                </button>
              </div>
            )}

            {!searchQuery && (
              <div className="text-center mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg hover:opacity-90 transition font-semibold"
                  style={{ backgroundColor: "#0066b3" }}
                >
                  <TrendingUp className="w-5 h-5" />
                  View All 57+ Services
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ── Features Section ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, label: "Expert Verification", desc: "Professional review ensures accuracy" },
                { icon: CheckCircle, label: "Zero Hassle", desc: "We handle paperwork & queues" },
                { icon: Clock, label: "Time Saved", desc: "Skip multiple office visits" },
                { icon: FileCheck, label: "Document Safety", desc: "Secure handling & processing" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: "linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)" }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1e3a5f" }}>{label}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stats Section ── */}
        <section className="py-16" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #0066b3 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div><div className="text-4xl md:text-5xl font-bold mb-2">57+</div><div className="text-lg opacity-90">Government Services</div></div>
              <div><div className="text-4xl md:text-5xl font-bold mb-2">100%</div><div className="text-lg opacity-90">Verified Processing</div></div>
              <div><div className="text-4xl md:text-5xl font-bold mb-2">24/7</div><div className="text-lg opacity-90">Support Available</div></div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e3a5f" }}>How It Works</h2>
              <p className="text-lg text-gray-600">Simple 3-step process to get your documents</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: "1", color: "#0066b3", title: "Choose Service", desc: "Select from our 57+ government services" },
                { n: "2", color: "#14b8a6", title: "Submit Documents", desc: "Upload required documents securely" },
                { n: "3", color: "#0066b3", title: "Get Your Document", desc: "We process and deliver on time" },
              ].map(({ n, color, title, desc }) => (
                <div key={n} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white" style={{ backgroundColor: color }}>{n}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1e3a5f" }}>{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1e3a5f" }}>Why Choose Eazy Sevai?</h2>
              <p className="text-lg text-gray-600">Your trusted partner for all government documentation needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Government Approved", desc: "Authorized documentation service provider" },
                { icon: Users, title: "Expert Team", desc: "Experienced professionals handling your documents" },
                { icon: Zap, title: "Fast Processing", desc: "Quick turnaround time for all services" },
                { icon: Shield, title: "Secure & Confidential", desc: "Your documents are safe with us" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-6 shadow-md">
                  <Icon className="w-10 h-10 mb-4" style={{ color: "#0066b3" }} />
                  <h3 className="text-lg font-bold mb-2" style={{ color: "#1e3a5f" }}>{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}