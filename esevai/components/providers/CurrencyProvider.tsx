"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Currency = "USD" | "GBP" | "AED" | "INR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (amount: Record<Currency, number>) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  GBP: "£",
  AED: "د.إ",
  INR: "₹",
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const storedCurrency = localStorage.getItem("nri_currency") as Currency | null;
        if (storedCurrency) {
          setCurrency(storedCurrency);
          setLoading(false);
          return;
        }

        // Fetch IP based location
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        let detectedCurrency: Currency = "USD";
        if (data.country_code === "IN") detectedCurrency = "INR";
        else if (data.country_code === "GB") detectedCurrency = "GBP";
        else if (data.country_code === "AE") detectedCurrency = "AED";

        setCurrency(detectedCurrency);
        localStorage.setItem("nri_currency", detectedCurrency);
      } catch (error) {
        console.error("Failed to detect location, defaulting to USD");
      } finally {
        setLoading(false);
      }
    };
    
    fetchLocation();
  }, []);

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    localStorage.setItem("nri_currency", newCurrency);
  };

  const formatPrice = (amounts: Record<Currency, number>) => {
    const amount = amounts[currency];
    const symbol = currencySymbols[currency];
    
    if (currency === "INR") {
      return `${symbol}${amount.toLocaleString('en-IN')}`;
    }
    return `${symbol}${amount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice }}>
      {!loading && children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
