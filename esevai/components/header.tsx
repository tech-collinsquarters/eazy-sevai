'use client'

import Link from 'next/link'
import Image from 'next/image'
import MegaMenu from './navigation/MegaMenu'

// WhatsApp Icon Component (inline SVG - guaranteed to work)
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066b3] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <Image
                src="/logo.png"
                alt="Eazy Sevai"
                width={40}
                height={40}
                className="relative rounded-lg shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#0066b3] transition-colors">
                Eazy Sevai
              </span>
              
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              Home
            </Link>
            <MegaMenu />
            <Link href="/eligibility-checker" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              Eligibility Checker
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Immediate Assistance Button */}
            <a
              href="https://wa.me/916385882835?text=Hi%2C%20I%20need%20immediate%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#25D366] border-2 border-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-all"
              title="WhatsApp Support"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Help</span>
            </a>

            {/* Get Started Button */}
            <Link
              href="/services"
              className="px-6 py-2.5 text-white rounded-lg hover:shadow-lg transition-all font-semibold shadow-md"
              style={{ background: 'linear-gradient(135deg, #0066b3 0%, #14b8a6 100%)' }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}