import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";
import ReactLenis from "lenis/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", 
});

const roboto = Roboto({
  weight: ["600"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-roboto', 
})

export const metadata: Metadata = {
  title: "Bblankk shop",
  description: "Buy pants",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        roboto.variable
      )}
    >
      <body
        className={cn(
          "min-h-full flex flex-col",
          spaceGrotesk.className
        )}
        suppressHydrationWarning
      >
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
