import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {Inter} from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import Particles from "@/components/ui/particles";


const inter = Inter({ subsets: ["latin"], weight: ["400"] });



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
        className={` ${inter.className} antialiased h-full bg-gradient-to-tl from-black via-black to-violet-950`}
      >
        <Particles
        className="absolute inset-0 h-full"
        quantity={800}
        ease={30}
        color="#FFFFFF"
        refresh
      />
        <ThemeProvider
          attribute="dark"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />

        </ThemeProvider>
        
      
      </body>
    </html>
  );
}
