import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, El_Messiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDock from "@/components/ContactDock";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const messiri = El_Messiri({
  subsets: ["arabic"],
  variable: "--font-messiri",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iqamat Al-Haramain | Apartments in Zaio, Morocco",
  description:
    "Iqamat Al-Haramain: eight furnished apartments in the centre of Zaio, Morocco. Book directly on WhatsApp or by phone.",
  keywords: ["Zaio", "Morocco", "apartments", "hotel", "Iqamat Al-Haramain", "إقامة الحرمين"],
};

export const viewport: Viewport = {
  themeColor: "#F3EDE3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} ${messiri.variable} ${plexArabic.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-sand text-ink antialiased">
        <Providers>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <ContactDock />
        </Providers>
      </body>
    </html>
  );
}
