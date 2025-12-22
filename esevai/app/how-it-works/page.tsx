import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileSearch, Upload, CreditCard, CheckCircle, MessageCircle, Package } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Simple 6-Step Process",
  description: "Learn how to get your government services done through Eazy Sevai in just 6 simple steps. Fast, secure, and hassle-free.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: "1",
      icon: FileSearch,
      title: "Choose Your Service",
      description: "Browse our 57+ government services and select the one you need. Each service has clear pricing and document requirements listed.",
      color: "from-blue-500 to-teal-500"
    },
    {
      number: "2",
      icon: Upload,
      title: "Upload Documents",
      description: "Fill the application form and upload required documents securely. Our system guides you on exactly what's needed for each service.",
      color: "from-teal-500 to-green-500"
    },
    {
      number: "3",
      icon: CreditCard,
      title: "Make Payment",
      description: "Pay securely using UPI, cards, or net banking. All payments are processed through Razorpay's secure gateway.",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Document Verification",
      description: "Our team verifies your documents within 24 hours and contacts you if any clarifications are needed.",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      number: "5",
      icon: MessageCircle,
      title: "Application Processing",
      description: "We submit your application to the government portal and keep you updated via WhatsApp, email, and phone throughout the process.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "6",
      icon: Package,
      title: "Receive Your Certificate",
      description: "Once approved, we'll notify you immediately. Documents can be collected from our office or couriered to your address.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0066b3] to-[#14b8a6] bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get your government services done in just 6 simple steps. Fast, secure, and completely hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <Card 
                key={step.number} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2"
              >
                <CardContent className="p-0">
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    {/* Icon Section */}
                    <div className={`w-full md:w-2/5 p-8 md:p-12 bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-12 h-12 md:w-16 md:h-16" />
                        </div>
                        <div className="text-6xl md:text-7xl font-bold opacity-50">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-blue-50 to-teal-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Eazy Sevai?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#0066b3] to-[#14b8a6] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">100% Secure</h3>
                  <p className="text-sm text-gray-600">Your documents and payments are completely secure with end-to-end encryption</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#0066b3] to-[#14b8a6] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Real-time Updates</h3>
                  <p className="text-sm text-gray-600">Get instant WhatsApp and email notifications at every step</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[#0066b3] to-[#14b8a6] rounded-full flex items-center justify-center">
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast Processing</h3>
                  <p className="text-sm text-gray-600">Most services completed within 7-30 days with priority handling</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Choose from 57+ government services and get your documentation done hassle-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90">
              <Link href="/services">
                Browse Services
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}