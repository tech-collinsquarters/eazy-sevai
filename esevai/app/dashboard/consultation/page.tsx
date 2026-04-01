"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConsultationPage() {
  const { data: session, status } = useSession();
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (status === "unauthenticated") {
    redirect("/login");
  }

  // Handle Calendly event routing
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("Calendly profile viewed"),
    onDateAndTimeSelected: () => console.log("Date and time selected"),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onEventScheduled: async (e: any) => {
      console.log("Event booked!", e);

      try {
        const payloadData = (e as Record<string, any>).data?.payload;
        if (!payloadData) return;

        const response = await fetch("/api/consultations/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventUri: payloadData.event?.uri,
            inviteeUri: payloadData.invitee?.uri,
          }),
        });

        if (response.ok) {
          setBookingSuccess(true);
        }
      } catch (error) {
        console.error("Failed to save booking", error);
      }
    },
  });

  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 gap-3">
        <div>
          <h1 className="text-3xl font-serif text-white">Video Consultation</h1>
          <p className="text-white/50 font-sans mt-2">Book a 1-on-1 session with our NRI legal experts.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/919999999999?text=Hi%20Eazy%20Sevai%20team,%20I%20would%20like%20to%20book%20a%201-on-1%20consultation%20session"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-500 hover:opacity-90 shadow-lg shadow-green-500/20 text-white font-semibold rounded-xl h-11 px-6 transition-all hover:scale-[1.02]">
              Chat on WhatsApp First
            </Button>
          </a>
          <Link href="/dashboard">
            <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white/70 hover:bg-white/5 hover:text-white rounded-xl font-semibold h-11 px-6 transition-all">
              Back to Secure Vault
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl">
        {bookingSuccess ? (
          <Card className="border-none shadow-2xl shadow-[#1e3a5f]/5 bg-white rounded-3xl text-center py-12">
            <CardContent className="space-y-4 flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-[#14b8a6]" />
              <h2 className="text-2xl font-serif text-navy-900">Booking Confirmed!</h2>
              <p className="text-navy-600 max-w-md">
                Your consultation has been scheduled successfully. You will receive an email confirmation with the Zoom meeting details shortly.
              </p>
              <Link href="/dashboard" className="pt-4">
                <Button className="bg-gradient-to-r from-[#0066b3] to-[#14b8a6] hover:opacity-90 text-white rounded-xl shadow-md h-12 px-6">
                  Return to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-none shadow-2xl shadow-[#1e3a5f]/10 bg-white rounded-3xl overflow-hidden">
            <CardHeader className="bg-blue-50/50 border-b border-[#0066b3]/10">
              <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-[#0066b3]" /> Schedule Your Session
              </CardTitle>
              <CardDescription className="text-navy-600 font-sans">
                Please select a convenient time for your consultation. All times are displayed in your local timezone.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 bg-white">
              <div className="h-[700px]">
                {status === "authenticated" && (
                  <InlineWidget
                    url="https://calendly.com/eazy-sevai"
                    styles={{ height: '100%', width: '100%' }}
                    prefill={{
                      email: session?.user?.email || "",
                      name: session?.user?.name || ""
                    }}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
