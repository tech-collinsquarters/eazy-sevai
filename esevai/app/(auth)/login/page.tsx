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
    <div className="min-h-[80vh] flex items-center justify-center bg-gold-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-gold-200 shadow-xl bg-white rounded-2xl overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-navy-800 to-navy-500" />
        <CardHeader className="space-y-3 pt-8 pb-4">
          <CardTitle className="text-3xl font-serif text-navy-900 text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center text-navy-500 font-sans text-base">
            Secure access to your Eazy Sevai portal.
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
              <Label htmlFor="email" className="text-navy-700 font-medium">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nri.portal@example.com" 
                className="border-navy-200 focus-visible:ring-gold-500 h-12"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-navy-700 font-medium">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-gold-600 hover:text-gold-700">
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
                className="border-navy-200 focus-visible:ring-gold-500 h-12"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-navy-900 hover:bg-navy-800 text-gold-50 font-medium h-12 text-lg transition-colors"
              disabled={loading}
            >
              {loading ? "Authenticating..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center pb-8 pt-2">
          <p className="text-navy-600 text-sm">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-gold-600 hover:text-gold-700 hover:underline">
              Create an account
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
