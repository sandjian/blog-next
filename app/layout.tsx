import type { Metadata } from "next";

import "./globals.css";

import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { FooterSection } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page demonstration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          outfit.className,
          "antialiased bg-[background] overflow-x-hidden",
          
        )}
      ><ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      
        <Navbar />
          {children}
        <FooterSection />
    </ThemeProvider>
      </body>
    </html>
  );
}
