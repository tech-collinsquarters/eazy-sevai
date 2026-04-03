"use client";

import { CurrencyProvider } from "@/components/providers/CurrencyProvider";
import React from "react";

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      {/* Premium dark background for the entire application flow */}
      <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2345 30%, #1a3660 60%, #0f2d55 80%, #0a1e3d 100%)' }}>
        {children}
      </div>
    </CurrencyProvider>
  );
}

