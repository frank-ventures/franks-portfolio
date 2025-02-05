import localFont from "next/font/local";

import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

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
        className={`${raleway.className} ${spideyFont.variable} ${amazing.variable} antialiased w-dvw`}
      >
        <Header />

        {children}
        {/* TODO: Footer */}
        <footer className={``}>Thanks for coming! Youre welcome!</footer>
      </body>
    </html>
  );
}
