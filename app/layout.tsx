import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThreeClockWarningSilencer from "@/components/ThreeClockWarningSilencer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipjyoti Das | Full-Stack Developer & AI Systems Engineer",
  description: "Tactile engineering journal and systems log of Dipjyoti Das. Showcase of AI-powered platforms, attendance engines, and high-performance backend pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThreeClockWarningSilencer />
        {children}
      </body>
    </html>
  );
}
