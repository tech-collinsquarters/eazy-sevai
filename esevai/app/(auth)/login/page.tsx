"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");
    if (keepSignedIn) {
      document.cookie = `keep_signed_in=true; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    } else {
      document.cookie = `keep_signed_in=false; max-age=${24 * 60 * 60}; path=/; SameSite=Lax`;
    }
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (keepSignedIn) {
      document.cookie = `keep_signed_in=true; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    } else {
      document.cookie = `keep_signed_in=false; max-age=${24 * 60 * 60}; path=/; SameSite=Lax`;
    }
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[460px]">

        {/* Glassmorphism Card */}
        <div
          className="rounded-2xl px-10 py-10"
          style={{
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.45)",
          }}
        >
          {/* Teal accent top bar */}
          <div className="h-0.5 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6] rounded-full -mt-1 mb-8" />

          {/* Secure Login Badge */}
          <div className="flex items-center gap-2 mb-5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.3)" }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#14b8a6]">Secure Login</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white leading-tight mb-1">
            Sign in to your account
          </h1>
          <p className="text-sm text-white/50 mb-7">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-semibold text-[#14b8a6] hover:text-[#2dd4bf] transition-colors">
              Get started free
            </Link>
          </p>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 text-sm rounded-xl text-center" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171" }}>
              {error}
            </div>
          )}

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 rounded-xl text-white font-semibold text-sm transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              height: "52px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.13)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
          >
            {googleLoading ? (
              <svg className="animate-spin h-5 w-5 text-white/60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M46 24.04c0-1.64-.13-3.22-.38-4.74H23.5v8.98h12.64c-.55 2.93-2.2 5.41-4.68 7.08v5.88h7.58C43.11 37.18 46 31.1 46 24.04z"/>
                <path fill="#4285F4" d="M23.5 46c6.33 0 11.64-2.1 15.54-5.69l-7.58-5.88c-2.1 1.41-4.79 2.24-7.96 2.24-6.12 0-11.3-4.13-13.16-9.69H2.49v6.08C6.37 41.03 14.36 46 23.5 46z"/>
                <path fill="#FBBC05" d="M10.34 27c-.47-1.41-.74-2.91-.74-4.5s.27-3.09.74-4.5v-6.08H2.49A23.48 23.48 0 0 0 0 23c0 3.88.93 7.55 2.49 10.92l7.85-5.98v-.94z"/>
                <path fill="#34A853" d="M23.5 9.07c3.45 0 6.55 1.19 8.99 3.52l6.73-6.73C35.13 2.13 29.83 0 23.5 0 14.36 0 6.37 4.97 2.49 12.5l7.85 6.08C12.2 13.2 17.38 9.07 23.5 9.07z"/>
              </svg>
            )}
            {googleLoading ? "Redirecting..." : "Continue with Google"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }}/>
            <span className="text-[11px] font-semibold text-white/30 tracking-widest">OR SIGN IN WITH EMAIL</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }}/>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
                Email address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-white/25 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,184,166,0.08)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-medium text-white/70">Password</label>
                <Link href="/forgot-password" className="text-xs font-semibold text-[#14b8a6] hover:text-[#2dd4bf] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl text-sm text-white placeholder:text-white/25 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(20,184,166,0.6)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(20,184,166,0.08)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Keep me signed in */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                id="keep-signed-in"
                role="checkbox"
                aria-checked={keepSignedIn}
                onClick={() => setKeepSignedIn(!keepSignedIn)}
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
                style={{
                  background: keepSignedIn ? "#14b8a6" : "rgba(255,255,255,0.06)",
                  border: `1px solid ${keepSignedIn ? "#14b8a6" : "rgba(255,255,255,0.2)"}`,
                }}
              >
                {keepSignedIn && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <label
                className="text-sm text-white/50 cursor-pointer select-none"
                onClick={() => setKeepSignedIn(!keepSignedIn)}
              >
                Keep me signed in for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl text-white font-bold text-base tracking-wide transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              style={{
                height: "52px",
                background: "linear-gradient(135deg, #1e3a5f 0%, #0066b3 100%)",
                border: "1px solid rgba(20,184,166,0.4)",
                boxShadow: "0 4px 24px rgba(0,102,179,0.3)",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                  Sign In to Dashboard
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-white/40 mt-7">
            New to EazyViza?{" "}
            <Link href="/register" className="font-semibold text-[#14b8a6] hover:text-[#2dd4bf] transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
