"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Assuming we'll create an API route for registration later
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Something went wrong.");
      }

      router.push("/login?registered=true");
    } catch (err: any) {
      setError(err.message || "Failed to register. Please try again.");
    } finally {
      setLoading(false);
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
            Create an Account
          </CardTitle>
          <CardDescription className="text-white/50 font-sans text-sm max-w-xs mx-auto">
            Get started with secure, end-to-end documentation services exclusively for Non-Resident Indians.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-500/10 text-red-400 text-sm rounded-xl border border-red-500/20 text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white/70 font-medium text-sm">Full Name</Label>
              <Input 
                id="name" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name" 
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/70 font-medium text-sm">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-white/70 font-medium text-sm">Mobile Number</Label>
              <Input 
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+1 234 567 8900" 
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
              <p className="text-xs text-white/30">With country code. Used for WhatsApp updates.</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/70 font-medium text-sm">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••" 
                className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#0066b3] border border-[#14b8a6]/50 hover:opacity-90 hover:scale-[1.01] text-white font-semibold tracking-wide h-12 rounded-xl text-base transition-all mt-2 shadow-lg shadow-[#0066b3]/20"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register NRI Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pb-10 pt-2">
          <p className="text-white/50 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#14b8a6] hover:text-[#0f9e8d] hover:underline">
              Sign In here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

