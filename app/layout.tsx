import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Sandhya Narayan - Counseling Psychologist",
  description: "Sandhya Narayan - Counseling Psychologist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans text-slate-800 bg-[#FAFAFA] min-h-screen flex flex-col selection:bg-emerald-200">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}