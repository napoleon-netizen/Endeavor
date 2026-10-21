import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";

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
    images: [{ url: "/assets/photos/team-crew.webp", width: 2560, height: 1707, alt: "The Endeavor Cleaning team" }],
    locale: "en_AE",
  },
  icons: {
    icon: "/assets/endeavor-logo-v1.png",
    shortcut: "/assets/endeavor-logo-v1.png",
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://endeavorclean.com/#business",
  name: company.name,
  url: "https://endeavorclean.com",
  image: "https://endeavorclean.com/assets/photos/team-crew.webp",
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
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
        {children}
      </body>
    </html>
  );
}
