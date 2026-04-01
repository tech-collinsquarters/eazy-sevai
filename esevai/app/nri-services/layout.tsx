"use client";

import { CurrencyProvider } from "@/components/providers/CurrencyProvider";
import React from "react";

export default function NRILayout({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <div className="bg-gradient-to-br from-white via-blue-50 to-teal-50 min-h-screen">
        {children}
      </div>
    </CurrencyProvider>
  );
}
