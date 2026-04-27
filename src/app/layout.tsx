import type { Metadata } from "next";
import { Geist, Geist_Mono, Playball } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playball = Playball({
  weight: "400",
  variable: "--font-playball",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shasini & Lahiru | Wedding Invitation",
  description: "You are cordially invited to celebrate the wedding of Shasini and Lahiru on January 26, 2027.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playball.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
