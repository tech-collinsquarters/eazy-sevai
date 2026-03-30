'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Eazy Sevai"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold" style={{ color: '#1e3a5f' }}>
                Eazy Sevai
              </span>
            </Link>
            <p className="text-gray-600 text-sm">
              Professional documentation services for Tamil Nadu government certificates and licenses. Serving residents and NRIs.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com/EazySevai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#0066b3] text-gray-600 hover:text-white transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/919944633029" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#25D366] text-gray-600 hover:text-white transition flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/EazySevai" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-[#E4405F] text-gray-600 hover:text-white transition flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#1e3a5f' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  57+ Services
                </Link>
              </li>
              <li>
                <Link href="/eligibility-checker" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#1e3a5f' }}>
              Popular Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/community-certificate" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  Community Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/income-certificate" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  Income Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/birth-certificate" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  Birth Certificate
                </Link>
              </li>
              <li>
                <Link href="/services/pan-card" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  PAN Card
                </Link>
              </li>
              <li>
                <Link href="/services/passport-application-support" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                  Passport Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4" style={{ color: '#1e3a5f' }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0066b3] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:esevaiservices11@vysegroup.com" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                    esevaiservices11@vysegroup.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0066b3] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919944633029" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                    +91 99446 33029
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0066b3] mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  Villa 246, SNP Signature Villas,<br />
                  Nedugundram, New Perungalathur,<br />
                  Chennai - 600127
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} Eazy Sevai. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/terms" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                Terms & Conditions
              </Link>
              <Link href="/refund-policy" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                Refund Policy
              </Link>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-[#0066b3] transition text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}