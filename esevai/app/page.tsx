import Link from 'next/link'
import { Shield, CheckCircle, Clock, FileCheck, TrendingUp, Users, Award, Zap } from 'lucide-react'

export default function HomePage() {
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

      {/* Main Content */}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#0066b3]/20 rounded-full text-sm font-semibold mb-6 shadow-sm" style={{ color: '#0066b3' }}>
                <Shield className="w-4 h-4" />
                Professional Documentation Services
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1e3a5f' }}>
                Fast, Easy, Verified.
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
                Your Government Documents Done Right.
              </p>

              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Expert Private Consulting. Zero Hassle. Guaranteed Verification.
              </p>

              {/* Description */}
              <p className="text-base text-gray-600 mb-10 max-w-4xl mx-auto">
                We are a professional documentation firm that handles the complex paperwork, submission,
                and verification for you. Skip the queues and get it right the first time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 text-white rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
                  style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}
                >
                  Browse All Services →
                </Link>
                <Link
                  href="/nri-services"
                  className="w-full sm:w-auto px-8 py-4 bg-navy-900 text-gold-400 rounded-lg hover:bg-navy-800 transition-all font-semibold text-lg border border-gold-400 shadow-xl"
                >
                  Premium NRI Services ✨
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - 4 Icons */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Expert Verification
                </h3>
                <p className="text-gray-600">
                  Professional review ensures accuracy
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Zero Hassle
                </h3>
                <p className="text-gray-600">
                  We handle paperwork & queues
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Time Saved
                </h3>
                <p className="text-gray-600">
                  Skip multiple office visits
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}>
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Document Safety
                </h3>
                <p className="text-gray-600">
                  Secure handling & processing
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Navy Blue Background */}
        <section className="py-16" style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0066b3 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">57+</div>
                <div className="text-lg opacity-90">Government Services</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Verified Processing</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-lg opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Simple 3-step process to get your documents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white" style={{ backgroundColor: '#0066b3' }}>
                  1
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Choose Service
                </h3>
                <p className="text-gray-600">
                  Select the service you need from our 75+ government services
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white" style={{ backgroundColor: '#14b8a6' }}>
                  2
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Submit Documents
                </h3>
                <p className="text-gray-600">
                  Upload required documents securely through our platform
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white" style={{ backgroundColor: '#0066b3' }}>
                  3
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Get Your Document
                </h3>
                <p className="text-gray-600">
                  We process and deliver your verified document on time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
                Popular Services
              </h2>
              <p className="text-lg text-gray-600">
                Most requested government services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {/* Service Card 1 */}
              <Link
                href="/services/community-certificate"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0066b3] transition-all group"
              >
                <div className="text-3xl mb-3">📜</div>
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: '#1e3a5f' }}>
                  Community Certificate
                </h3>
                <p className="text-gray-600 mb-4">
                  Required for education, employment, and government schemes
                </p>
                <div className="flex items-center font-semibold" style={{ color: '#0066b3' }}>
                  Apply Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* Service Card 2 */}
              <Link
                href="/services/income-certificate"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0066b3] transition-all group"
              >
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Income Certificate
                </h3>
                <p className="text-gray-600 mb-4">
                  Proof of income for scholarships, loans, and subsidies
                </p>
                <div className="flex items-center font-semibold" style={{ color: '#0066b3' }}>
                  Apply Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>

              {/* Service Card 3 */}
              <Link
                href="/services/birth-certificate"
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#0066b3] transition-all group"
              >
                <div className="text-3xl mb-3">👶</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Birth Certificate
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential identity document for school admission and passport
                </p>
                <div className="flex items-center font-semibold" style={{ color: '#0066b3' }}>
                  Apply Now
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg hover:opacity-90 transition font-semibold"
                style={{ backgroundColor: '#0066b3' }}
              >
                <TrendingUp className="w-5 h-5" />
                View All 57+ Services
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1e3a5f' }}>
                Why Choose Eazy Sevai?
              </h2>
              <p className="text-lg text-gray-600">
                Your trusted partner for all government documentation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Award className="w-10 h-10 mb-4" style={{ color: '#0066b3' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Government Approved
                </h3>
                <p className="text-gray-600 text-sm">
                  Authorized documentation service provider
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Users className="w-10 h-10 mb-4" style={{ color: '#0066b3' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Expert Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Experienced professionals handling your documents
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Zap className="w-10 h-10 mb-4" style={{ color: '#0066b3' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Fast Processing
                </h3>
                <p className="text-gray-600 text-sm">
                  Quick turnaround time for all services
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <Shield className="w-10 h-10 mb-4" style={{ color: '#0066b3' }} />
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1e3a5f' }}>
                  Secure & Confidential
                </h3>
                <p className="text-gray-600 text-sm">
                  Your documents are safe with us
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}