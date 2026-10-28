import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";
import { GoogleTagManagerHead, GoogleTagManagerNoScript } from "./_components/GoogleTagManager";
import ContactClickTracking from "./_components/ContactClickTracking";

const isProductionDomain = process.env.VERCEL_ENV === "production" && !!process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://endeavorclean.com"),
  alternates: { canonical: "/" },
  title: { default: "Cleaning Services in Dubai | Endeavor Cleaning Services", template: "%s" },
  description: "ISO-certified cleaning company in Dubai since 2014: AC cleaning, deep cleaning, sofa and carpet shampooing, water tank cleaning, marble polishing and more. Get a free quote.",
  robots: isProductionDomain ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Endeavor Cleaning Services",
    title: "Cleaning Services in Dubai | Endeavor Cleaning Services",
    description: "ISO-certified cleaning for homes and businesses across Dubai since 2014.",
    url: "https://endeavorclean.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, type: "image/jpeg", alt: "Endeavor Cleaning team deep cleaning a Dubai living room" }],
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Services in Dubai | Endeavor Cleaning Services",
    description: "ISO-certified cleaning for homes and businesses across Dubai since 2014.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://endeavorclean.com/#business",
  name: company.name,
  url: "https://endeavorclean.com",
  image: "https://endeavorclean.com/og-image.jpg",
  telephone: company.phoneMobile,
  email: company.email,
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 709, Al Fattan Plaza, Airport Road",
    addressLocality: "Garhoud, Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "City", name: "Dubai" },
  priceRange: "AED",
  sameAs: [
    "https://www.facebook.com/Endeavorclean60",
    "https://www.instagram.com/endeavorcleaningservices/",
    "https://www.linkedin.com/in/endeavor-clean-b1353a1b6/",
    "https://x.com/CleanEndeavor",
    "https://www.youtube.com/@EndeavorCleaningServices",
    "https://www.tiktok.com/@endeavorclean",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" type="font/woff2" href="/assets/nunito.woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <GoogleTagManagerHead />
        <GoogleTagManagerNoScript />
        <ContactClickTracking />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {children}
      </body>
    </html>
  );
}
