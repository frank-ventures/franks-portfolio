import localFont from "next/font/local";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import SpiderCorner from "@/components/icons/SpiderCorner";

const raleway = Raleway({
  variable: "--font-mont",
  subsets: ["latin"],
  display: "swap",
});

const spideyFont = localFont({
  src: "../fonts/homoarak.ttf",
  variable: "--font-spidey",
  display: "swap",
});

const amazing = localFont({
  src: "../fonts/amazing.ttf",
  variable: "--font-amazing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frankie Shrieves | Dev and stuff",
  description: "Not just a portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth m-0 p-0">
      <body
        className={`${raleway.className} ${spideyFont.variable} ${amazing.variable} antialiased h-full m-0 p-0 box-border`}
      >
        <Header />

        {children}
        {/* TODO: Footer */}
        <footer className="flex justify-center p-4 bg-red-600 text-2xl text-yellow-400 relative">
          <div className="w-16 absolute top-0 left-0 rotate-90">
            <SpiderCorner />
          </div>
          <div className="w-16 absolute bottom-0 right-0 -rotate-90">
            <SpiderCorner />
          </div>
          <p className="z-10 text-center">
            Thanks for coming! You&apos;re welcome!
          </p>
        </footer>
      </body>
    </html>
  );
}
