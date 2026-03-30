'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import MegaMenu from './navigation/MegaMenu'
import MobileMenu from './navigation/MobileMenu'

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

function AuthActions() {
  const { data: session, status } = useSession();
  const userName = session?.user?.name || session?.user?.email || "User";

  if (status === "loading") {
    return (
      <div className="px-4 py-2 text-sm text-gray-500 bg-gray-100 rounded-lg">Checking sign-in...</div>
    );
  }

  if (status === "authenticated" && session?.user) {
    return (
      <div className="flex items-center gap-2 min-w-[180px]">
        <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">Hi, {userName}</span>
        <Link
          href="/dashboard"
          className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          Dashboard
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="px-4 py-2 text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/login"
        className="px-4 py-2 text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-95 transition-opacity"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://wa.me/919944633029?text=Hi%2C%20I%20need%20immediate%20assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#25D366] border-2 border-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-all"
              title="WhatsApp Support"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Help
            </a>

            <AuthActions />
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center gap-8 border-t border-gray-100 py-2">
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">
            Services
          </Link>
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
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}