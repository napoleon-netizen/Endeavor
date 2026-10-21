import type { Metadata } from "next";
import Link from "next/link";

import LegalPage from "../_components/LegalPage";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Sitemap | Endeavor Cleaning Services Dubai",
  description: "All pages on the Endeavor Cleaning Services website.",
  alternates: { canonical: "/sitemap-page" },
};

export default function SitemapPage() {
  return (
    <LegalPage title="Sitemap" updated="21 October 2026" intro="Every page on this website, in one place.">
      <h2>Main pages</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">All Services</Link></li>
        <li><Link href="/commercial">Commercial Cleaning</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/reviews">Reviews</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/book">Book a Service</Link></li>
      </ul>
      <h2>Services</h2>
      <ul>
        {services.map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.name}</Link></li>)}
      </ul>
      <h2>Legal</h2>
      <ul>
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/terms">Terms and Conditions</Link></li>
        <li><Link href="/booking-policy">Booking and Cancellation Policy</Link></li>
      </ul>
    </LegalPage>
  );
}
