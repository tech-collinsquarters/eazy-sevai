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
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-none shadow-2xl shadow-[#1e3a5f]/10 bg-white rounded-3xl overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-[#0066b3] to-[#14b8a6]" />
        <CardHeader className="space-y-5 pt-10 pb-4 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-teal-50 border border-[#14b8a6]/20 shadow-sm text-sm text-[#0066b3] font-semibold tracking-wide uppercase shadow-[#0066b3]/5">
            Eazy Sevai NRI Portal
          </div>
          <CardTitle className="text-3xl md:text-4xl font-serif text-navy-900 leading-tight">
            Create an Account
          </CardTitle>
          <CardDescription className="text-navy-500 font-sans text-base max-w-sm mx-auto">
            Get started to access secure, end-to-end documentation processing exclusively for Non-Resident Indians.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-100 text-center">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-navy-700 font-medium">Full Name</Label>
              <Input 
                id="name" 
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="border-gray-200 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-navy-700 font-medium">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="nri.user@example.com" 
                className="border-gray-200 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-navy-700 font-medium">Mobile Number</Label>
              <Input 
                id="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+1 234 567 8900" 
                className="border-gray-200 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
              <p className="text-xs text-navy-300">With country code. Used for WhatsApp updates.</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-navy-700 font-medium">Password</Label>
              <Input 
                id="password" 
                type="password" 
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••" 
                className="border-gray-200 focus-visible:ring-[#14b8a6] h-12 rounded-xl"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#0066b3] border border-[#14b8a6]/50 hover:opacity-90 hover:scale-[1.01] text-white font-semibold tracking-wide h-14 rounded-xl text-lg transition-all mt-2 shadow-lg shadow-[#0066b3]/20"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register NRI Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pb-8 pt-2">
          <p className="text-navy-600 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#0066b3] hover:text-[#004d87] hover:underline">
              Sign In here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
