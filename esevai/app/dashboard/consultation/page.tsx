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
    <div className="container mx-auto py-12 px-4 space-y-8 bg-gold-50 min-h-screen">
      <div className="flex justify-between items-end border-b border-gold-200 pb-6">
        <div>
          <h1 className="text-3xl font-serif text-navy-900">Video Consultation</h1>
          <p className="text-navy-600 font-sans mt-2">Book a 1-on-1 session with our NRI legal experts.</p>
        </div>
        <Link href="/dashboard">
          <Button variant="outline" className="border-gold-300 text-gold-700 hover:bg-gold-50">
            Back to Dashboard
          </Button>
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        {bookingSuccess ? (
          <Card className="border-gold-200 shadow-sm bg-white text-center py-12">
            <CardContent className="space-y-4 flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
              <h2 className="text-2xl font-serif text-navy-900">Booking Confirmed!</h2>
              <p className="text-navy-600 max-w-md">
                Your consultation has been scheduled successfully. You will receive an email confirmation with the Zoom meeting details shortly.
              </p>
              <Link href="/dashboard" className="pt-4">
                <Button className="bg-navy-900 hover:bg-navy-800 text-gold-50">
                  Return to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-gold-200 shadow-md bg-white overflow-hidden">
            <CardHeader className="bg-navy-50/50 border-b border-navy-100">
              <CardTitle className="text-xl text-navy-900 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-gold-600" /> Schedule Your Session
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
