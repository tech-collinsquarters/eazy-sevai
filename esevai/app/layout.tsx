import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { CurrencyProvider } from "@/components/providers/CurrencyProvider";

const bodoni = Bodoni_Moda({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Eazy Sevai - NRI Platform",
  description: "Professional document services for NRIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${bodoni.variable} font-sans antialiased text-navy-900 bg-white`}>
        <NextAuthProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </NextAuthProvider>

        {/* Razorpay Script - Load globally */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}