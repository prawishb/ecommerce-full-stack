import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "[Shop Name]",
  description: "Ecommerce store",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(font.className, "antialiased min-h-screen bg-zinc-50")}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
