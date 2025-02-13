import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Urbanist } from "next/font/google";
import Navigation from "@/components/organism/navigation";
import "./globals.css";
import Footer from "@/components/organism/footer";

const urbanist = Urbanist({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", '600']
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${urbanist.className} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
