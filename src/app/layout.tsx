import localFont from "next/font/local";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
// import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spideyFont.variable} ${amazing.variable} antialiased w-dvw`}
      >
        <Header />

        {children}
        {/* TODO: Footer */}
        <footer className={``}>Thanks for coming! Youre welcome!</footer>
      </body>
    </html>
  );
}
