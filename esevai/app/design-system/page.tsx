import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto py-12 px-4 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-navy-900">Quiet Luxury Design System</h1>
        <p className="text-xl text-navy-400 font-sans max-w-2xl mx-auto">
          Showcasing the Bodoni Moda serif, crisp sans-serif body text, and our signature Navy & Gold color palette.
        </p>
      </div>

      {/* Typography */}
      <section className="space-y-6">
        <h2 className="text-3xl font-serif text-gold-600 border-b border-gold-200 pb-2">Typography</h2>
        <div className="space-y-4 p-6 bg-white rounded-xl shadow-sm border border-gold-100">
          <div>
            <span className="text-sm font-semibold text-navy-300 uppercase tracking-widest">Heading 1 (Serif)</span>
            <h1 className="text-5xl font-serif text-navy-900 mt-1">The quick brown fox</h1>
          </div>
          <div>
            <span className="text-sm font-semibold text-navy-300 uppercase tracking-widest">Heading 2 (Serif)</span>
            <h2 className="text-4xl font-serif text-navy-800 mt-1">Jumps over the lazy dog</h2>
          </div>
          <div>
            <span className="text-sm font-semibold text-navy-300 uppercase tracking-widest">Body Text (Sans-serif)</span>
            <p className="text-base font-sans text-navy-600 mt-1 max-w-prose leading-relaxed">
              This is standard body text. It uses a clean, legible sans-serif font to contrast with the elegant serif headings. 
              The generous line height and carefully chosen font sizing make long-form reading comfortable and premium.
            </p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-3xl font-serif text-gold-600 border-b border-gold-200 pb-2">Color Palette</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navy Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-navy-900">Navy</h3>
            <div className="grid grid-cols-5 h-24 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-navy-50" title="navy-50"></div>
              <div className="bg-navy-200" title="navy-200"></div>
              <div className="bg-navy-500" title="navy-500"></div>
              <div className="bg-navy-700" title="navy-700"></div>
              <div className="bg-navy-900" title="navy-900"></div>
            </div>
          </div>
          
          {/* Gold Palette */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-navy-900">Gold</h3>
            <div className="grid grid-cols-5 h-24 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gold-50" title="gold-50"></div>
              <div className="bg-gold-200" title="gold-200"></div>
              <div className="bg-gold-400" title="gold-400"></div>
              <div className="bg-gold-600" title="gold-600"></div>
              <div className="bg-gold-800" title="gold-800"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="space-y-6">
        <h2 className="text-3xl font-serif text-gold-600 border-b border-gold-200 pb-2">Components</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buttons & Inputs */}
          <Card className="border-gold-100 shadow-md">
            <CardHeader className="bg-navy-900 text-gold-50 rounded-t-xl">
              <CardTitle className="font-serif text-2xl text-gold-400">Forms & Actions</CardTitle>
              <CardDescription className="text-navy-200">Standard interactive elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-navy-700 font-medium">Email Address</Label>
                  <Input id="email" placeholder="enter@email.com" className="border-navy-200 focus:border-gold-500 focus:ring-gold-500" />
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-6 text-lg rounded-md transition-colors shadow-sm">
                    Primary Action
                  </Button>
                  <Button variant="outline" className="border-navy-300 text-navy-700 hover:bg-navy-50 font-medium px-8 py-6 rounded-md">
                    Secondary
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards & Containers */}
          <Card className="border-gold-200 shadow-sm bg-gradient-to-br from-white to-gold-50">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-navy-800">Premium Service Card</CardTitle>
              <CardDescription className="text-navy-500">How services will be displayed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-navy-600 leading-relaxed">
                Notice the subtle gold-tinted background gradient and crisp typography. The aesthetic emphasizes trust, elegance, and clarity.
              </p>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gold-100 shadow-sm">
                <div>
                  <h4 className="font-serif font-medium text-lg text-navy-900">Express Processing</h4>
                  <p className="text-sm text-navy-400">3-5 business days</p>
                </div>
                <span className="font-medium text-gold-600 text-lg">$299</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
