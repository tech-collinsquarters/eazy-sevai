"use client";

import { CurrencyProvider } from "@/components/providers/CurrencyProvider";
import React from "react";

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      {children}
    </CurrencyProvider>
  );
}
