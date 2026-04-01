"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      router.push("/dashboard"); // We'll create a dashboard or redirect to home
      router.refresh();
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border border-white/10 shadow-2xl shadow-black/40 rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)' }}>
        <div className="h-1 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6]" />
        <CardHeader className="space-y-5 pt-10 pb-4 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14b8a6]/20 border border-[#14b8a6]/30 text-sm text-[#14b8a6] font-semibold tracking-wide uppercase">
            Eazy Sevai NRI Portal
          </div>
          <CardTitle className="text-3xl md:text-4xl font-serif text-white leading-tight">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-white/50 font-sans text-sm max-w-xs mx-auto">
            Secure access to premium documentation services exclusively for Non-Resident Indians.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100 text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/70 font-medium text-sm">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white/70 font-medium text-sm">Password</Label>
                <Link href="/forgot-password" className="text-xs font-medium text-[#14b8a6] hover:text-[#0f9e8d]">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#0066b3] border border-[#14b8a6]/50 hover:opacity-90 hover:scale-[1.01] text-white font-semibold tracking-wide h-14 rounded-xl text-lg transition-all shadow-lg shadow-[#0066b3]/20"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign in to NRI Portal"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pb-10 pt-2">
          <p className="text-white/50 text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-[#14b8a6] hover:text-[#0f9e8d] hover:underline">
              Create an account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
