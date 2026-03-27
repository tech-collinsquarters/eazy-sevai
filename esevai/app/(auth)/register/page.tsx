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
    <div className="min-h-[80vh] flex items-center justify-center bg-gold-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-lg border-gold-200 shadow-xl bg-white rounded-2xl overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-gold-600 to-gold-400" />
        <CardHeader className="space-y-3 pt-8 pb-4">
          <CardTitle className="text-3xl font-serif text-navy-900 text-center">Create an Account</CardTitle>
          <CardDescription className="text-center text-navy-500 font-sans text-base">
            Get started with Eazy Sevai for exclusive NRI services.
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
                className="border-navy-200 focus-visible:ring-gold-500 h-12"
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
                className="border-navy-200 focus-visible:ring-gold-500 h-12"
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
                className="border-navy-200 focus-visible:ring-gold-500 h-12"
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
                className="border-navy-200 focus-visible:ring-gold-500 h-12"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gold-600 hover:bg-gold-700 text-white font-medium h-12 text-lg transition-colors mt-2"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pb-8 pt-2">
          <p className="text-navy-600 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-gold-600 hover:text-gold-700 hover:underline">
              Sign In here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
