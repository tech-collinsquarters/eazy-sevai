import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_NAME, CONTACT } from "@/lib/constants";
import { Shield, Users, Clock, Award, CheckCircle, ArrowRight, Globe, HeadphonesIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn more about ${SITE_NAME} - Your trusted partner for government service facilitation in Tamil Nadu. Serving residents and NRIs worldwide.`,
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">About {SITE_NAME}</h1>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for government service facilitation
          </p>
          <p className="text-md text-muted-foreground mt-2">
            Serving residents in Tamil Nadu and Non-Resident Indians (NRIs) worldwide
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              At {SITE_NAME}, we are committed to making government services accessible and hassle-free for everyone - whether you're in Tamil Nadu or anywhere in the world. We understand that navigating government procedures can be complex and time-consuming, especially for NRIs managing documentation from abroad.
            </p>
            <p className="mb-4 text-muted-foreground">
              Our mission is to simplify this process and provide professional assistance that saves you time and effort. As an authorized facilitation center, we bridge the gap between citizens and government services, ensuring that every application is handled with care, accuracy, and efficiency.
            </p>
            <p className="text-muted-foreground">
              <strong>For NRIs:</strong> We offer specialized support for documentation needs, coordinate physical presence requirements, and keep you updated throughout the process via WhatsApp, email, and phone - making it seamless to manage your Tamil Nadu government services from anywhere in the world.
            </p>
          </CardContent>
        </Card>

        {/* What We Do */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-6 text-2xl font-semibold">What We Do</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Aadhaar Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    New Aadhaar enrollment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Aadhaar updates and corrections
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Biometric updates (with appointment booking)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Passport Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    New passport applications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Passport renewals
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Lost passport assistance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Certificate Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Income certificates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Community certificates
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Birth, death, and marriage certificates
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Business & Property</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Trade licenses & GST registration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Property documentation (Patta, EC)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    57+ total services available
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Choose {SITE_NAME}?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Authorized & Trusted</h3>
                  <p className="text-sm text-muted-foreground">
                    We operate in compliance with all government regulations and data protection laws.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">NRI-Friendly Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized support for NRIs with online coordination and WhatsApp updates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Our experienced professionals guide you through every step of the application process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Fast Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    We ensure quick turnaround times and keep you updated throughout the process.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">24/7 Online Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach us anytime via WhatsApp, email, or phone from anywhere in the world.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Customer Satisfaction</h3>
                  <p className="text-sm text-muted-foreground">
                    Thousands of satisfied customers including NRIs from USA, UK, Singapore, UAE trust us.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NRI Services Highlight */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-blue-50 to-teal-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="mb-4 text-xl font-semibold">Special Services for NRIs</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Managing government documentation from abroad? We make it easy for Non-Resident Indians to handle Tamil Nadu government services remotely:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong>Complete Online Coordination:</strong> Submit documents via email/WhatsApp, track progress online</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong>Physical Presence Handling:</strong> We coordinate appointments and, where permitted, represent you at government offices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong>Document Courier:</strong> International courier of completed certificates to your location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong>Time Zone Friendly:</strong> Flexible communication via WhatsApp/email suited to your time zone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span><strong>Family Coordination:</strong> We can work with your family members in Tamil Nadu for document collection</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-xl font-semibold">Important Disclaimer</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              {SITE_NAME} is a <strong>professional facilitation service provider</strong> and not an official government portal. We assist citizens and NRIs in preparing and submitting applications to the appropriate government authorities. All government fees are paid separately through official channels, and our service fee covers only the assistance and documentation support we provide.
            </p>
            <p className="text-sm text-muted-foreground">
              We operate in full compliance with UIDAI regulations, Passport Act, and all applicable laws. Our services are designed to make government procedures more accessible, but the final decision on any application rests with the respective government authority. Some services require physical presence which cannot be waived by our service.
            </p>
          </CardContent>
        </Card>

        {/* Location */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-xl font-semibold">Visit Our Office</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Address:</strong></p>
              <p>{CONTACT.address}</p>
              <p className="pt-2"><strong>Phone:</strong> <a href={`tel:${CONTACT.phone}`} className="text-primary hover:underline">{CONTACT.phone}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">{CONTACT.email}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/${CONTACT.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{CONTACT.whatsapp}</a></p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Ready to Get Started?</h2>
          <p className="mb-6 text-muted-foreground">
            Apply for your government service today and experience hassle-free processing
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90">
              <Link href="/services">
                Browse 57+ Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}