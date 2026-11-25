import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: site.description,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
