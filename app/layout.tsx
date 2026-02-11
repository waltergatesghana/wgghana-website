import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bricolage_Grotesque,
} from "next/font/google";
import "./globals.css";
import AppNavBar from "@/src/components/AppNavBar";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Waltergates Ghana Limited",
  description: "Waltergates Ghana Limited is a technology-driven company providing cutting-edge digital solutions and strategic consulting services. We empower businesses through innovative software, fintech platforms, data intelligence, and security technologies designed to enhance efficiency, performance, and long-term growth.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
      >
        <AppNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
