import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../global/global.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "AI Query Hub - Logistics Intelligence",
  description:
    "Professional AI query interface for ChatGPT, V0, and Gemini with logistics-focused design",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
