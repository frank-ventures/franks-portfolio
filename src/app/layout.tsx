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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${raleway.className} ${spideyFont.variable} ${amazing.variable} antialiased w-dvw m-0 p-0 box-border`}
      >
        <Header />

        {children}
        {/* TODO: Footer */}
        <footer className="flex justify-center p-4 bg-red-600 text-2xl text-yellow-400 relative">
          <div className="w-16 absolute -top-1 -left-1 rotate-90">
            <SpiderCorner />
          </div>
          <div className="w-16 absolute -bottom-1 -right-1 -rotate-90">
            <SpiderCorner />
          </div>
          Thanks for coming! You&apos;re welcome!
        </footer>
      </body>
    </html>
  );
}
