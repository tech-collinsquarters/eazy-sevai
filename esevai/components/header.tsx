'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, LayoutDashboard, FileText, CalendarDays, ChevronRight } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import MegaMenu from './navigation/MegaMenu'
import MobileMenu from './navigation/MobileMenu'

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

// ─── NRI Portal Header ──────────────────────────────────────
function NRIHeader() {
  const { data: session, status } = useSession()
  const [mobileOpen, setMobileOpen] = useState(false)
  const userName = session?.user?.name?.split(' ')[0] || session?.user?.email?.split('@')[0] || 'Portal'
  const pathname = usePathname()

  const nriNavLinks = [
    { href: '/nri-services', label: 'NRI Services' },
    { href: '/nri-services/all-services', label: 'All Services' },
  ]
  const dashLinks = [
    { href: '/dashboard', label: 'Vault', icon: LayoutDashboard },
    { href: '/dashboard/upload', label: 'Upload', icon: FileText },
    { href: '/dashboard/consultation', label: 'Consult', icon: CalendarDays },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0a1628] via-[#1e3a5f] to-[#0a1628] border-b border-white/10 shadow-xl shadow-[#0a1628]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/nri-services" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#14b8a6] rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              <Image src="/logo.png" alt="Eazy Sevai" width={36} height={36} className="relative rounded-lg shadow-md group-hover:scale-105 transition-transform" />
            </div>
            <div className="leading-tight">
              <span className="text-white font-bold text-base tracking-wide">Eazy Sevai</span>
              <span className="block text-[#14b8a6] text-xs font-semibold tracking-widest uppercase">NRI Portal</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nriNavLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname === l.href ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                {l.label}
              </Link>
            ))}
            {status === 'authenticated' && dashLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname === l.href ? 'bg-[#14b8a6]/20 text-[#14b8a6]' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                <l.icon className="w-3.5 h-3.5" />
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a href="https://wa.me/919944633029?text=Hi%2C%20I%20need%20NRI%20assistance" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#25D366] border border-[#25D366]/50 rounded-lg hover:bg-[#25D366]/10 transition-all">
              <WhatsAppIcon className="w-3.5 h-3.5" /> Help
            </a>

            {status === 'loading' && <div className="px-4 py-2 text-xs text-white/40 bg-white/5 rounded-lg">Loading...</div>}

            {status === 'authenticated' && session?.user ? (
              <div className="flex items-center gap-2">
                <span className="hidden sm:block text-sm font-medium text-white/80">Hi, {userName}</span>
                <button onClick={() => signOut({ callbackUrl: '/nri-services' })}
                  className="px-3 py-1.5 text-xs font-semibold text-white/70 border border-white/20 rounded-lg hover:bg-white/10 hover:text-white transition-all">
                  Sign Out
                </button>
              </div>
            ) : status === 'unauthenticated' ? (
              <div className="flex items-center gap-2">
                <Link href="/login"
                  className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all">
                  Login
                </Link>
              </div>
            ) : null}

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(p => !p)}
              className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile NRI menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f1f3d] border-t border-white/10 px-4 py-4 space-y-1">
          {nriNavLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all">
              {l.label}
            </Link>
          ))}
          {status === 'authenticated' && (
            <>
              <div className="h-px bg-white/10 my-2" />
              {dashLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-[#14b8a6] hover:bg-white/5 rounded-lg transition-all">
                  <l.icon className="w-4 h-4" /> {l.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button onClick={() => { signOut({ callbackUrl: '/nri-services' }); setMobileOpen(false) }}
                className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-white/5 rounded-lg">
                Sign Out
              </button>
            </>
          )}
          {status === 'unauthenticated' && (
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/login" onClick={() => setMobileOpen(false)} className="block text-center px-4 py-3 text-sm font-semibold text-white border border-white/20 rounded-lg">Login</Link>
            </div>
          )}
          <div className="h-px bg-white/10 my-2" />
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 px-4 py-2 text-xs text-white/40 hover:text-white/60">
            ← Back to main site
          </Link>
        </div>
      )}

      {/* Back to main site strip */}
      <div className="bg-[#0a1628]/80 border-t border-white/5 py-1 text-center">
        <Link href="/" className="text-[10px] text-white/30 hover:text-white/50 transition-colors tracking-widest uppercase">
          ← Eazy Sevai Main Site
        </Link>
      </div>
    </header>
  )
}

// ─── Standard (Indian) Header ───────────────────────────────
function StandardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066b3] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity" />
              <Image src="/logo.png" alt="Eazy Sevai" width={40} height={40} className="relative rounded-lg shadow-md group-hover:scale-105 transition-transform" />
            </div>
            <span className="text-xl font-bold text-[#1e3a5f] group-hover:text-[#0066b3] transition-colors">Eazy Sevai</span>
          </Link>

          {/* Mobile toggle */}
          <button onClick={() => setMobileMenuOpen(p => !p)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Right: WhatsApp + NRI CTA */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href="https://wa.me/919944633029?text=Hi%2C%20I%20need%20immediate%20assistance" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#25D366] border-2 border-[#25D366] rounded-lg hover:bg-[#25D366] hover:text-white transition-all"
              title="WhatsApp Support">
              <WhatsAppIcon className="w-4 h-4" /> Help
            </a>
            <Link href="/nri-services"
              className="hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-[#1e3a5f] to-[#0066b3] hover:opacity-90 transition-all shadow-md">
              NRI Portal <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Nav row */}
        <nav className="hidden md:flex items-center justify-center gap-8 border-t border-gray-100 py-2">
          <MegaMenu />
          <Link href="/eligibility-checker" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">Eligibility Checker</Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#0066b3] transition-colors">Contact</Link>
        </nav>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}

// ─── Root Export ─────────────────────────────────────────────
export default function Header() {
  const pathname = usePathname()
  const isNRIZone = pathname?.startsWith('/nri-services') || pathname?.startsWith('/dashboard') || pathname === '/login' || pathname === '/register'

  if (isNRIZone) return <NRIHeader />
  return <StandardHeader />
}