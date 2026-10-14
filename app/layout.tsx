import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reihan Manzis | Full-Stack Engineer",
  description:
    "Reihan Manzis is a full-stack engineer building Next.js products end to end: Software Engineer II at a Singapore company and a Top Rated freelancer on Upwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} bg-[#0b151a] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

