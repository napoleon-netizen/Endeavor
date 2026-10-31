import type { Metadata } from "next";
import Link from "next/link";

import SiteFrame from "../_components/SiteFrame";
import SocialLinks from "../_components/SocialLinks";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact Endeavor Cleaning Services | Al Fattan Plaza, Garhoud, Dubai",
  description: "Call, WhatsApp or visit Endeavor Cleaning Services at Office 709, Al Fattan Plaza, Airport Road, Garhoud, Dubai. Free quotes for homes and businesses.",
  alternates: { canonical: "/contact" },
};

type ContactIcon = "mail" | "phone" | "whatsapp" | "pin" | "clock" | "google";

function Icon({ name }: { name: ContactIcon }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "mail": return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7.5 12 13l8.5-5.5" /></svg>;
    case "phone": return <svg {...common}><path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>;
    case "whatsapp": return <svg {...common}><path d="M4 20l1.2-3.6A8 8 0 1 1 8.4 19.3L4 20Z" /><path d="M9.5 9.3c.2 1.9 2.2 3.9 4.2 4.3l1.3-1.1 1.6.8-.4 1.5c-3.3.5-7-3.1-7.5-6.4L10.2 8l.8 1.6-1.5-.3Z" /></svg>;
    case "pin": return <svg {...common}><path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" /><circle cx="12" cy="11" r="2.2" /></svg>;
    case "clock": return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>;
    case "google": return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M12 8v4h4" /><path d="m9.5 15.5 5-7" /></svg>;
  }
}

const contacts: Array<{ icon: ContactIcon; label: string; lines: string[]; href: string; action: string }> = [
  { icon: "mail", label: "Email us", lines: [company.email], href: `mailto:${company.email}`, action: "Send an email" },
  { icon: "phone", label: "Call us", lines: [company.phoneMobile, company.phoneOffice], href: company.phoneMobileHref, action: "Call now" },
  { icon: "whatsapp", label: "WhatsApp", lines: [company.whatsapp, "Fastest for quotes and photos"], href: company.whatsappHref, action: "Open WhatsApp" },
  { icon: "pin", label: "Our location", lines: ["Office 709, Al Fattan Plaza", "Airport Rd, Garhoud, Dubai"], href: company.mapsUrl, action: "Get directions" },
  { icon: "clock", label: "Working hours", lines: ["Mon–Sat: 8:00 am – 8:00 pm", "Sunday: Closed"], href: "/book", action: "Book a visit" },
  { icon: "google", label: "Google Business Profile", lines: ["4.9 ★ from 27 reviews", "Photos, listing and reviews"], href: company.googleBusinessUrl, action: "View on Google" },
];

export default function ContactPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="contact-hero">
          <div className="inner-shell contact-hero__grid">
            <div>
              <span className="page-eyebrow">Contact Endeavor</span>
              <h1>Let&apos;s get your space looking its best</h1>
              <p>Tell us what needs cleaning and we&apos;ll take it from there. Book online in minutes, or reach the team directly for anything more specific.</p>
            </div>
            <div className="contact-hero__actions">
              <Link className="solid-action" href="/book">Start a Booking</Link>
              <Link className="outline-action" href="/services">Choose a Service</Link>
            </div>
          </div>
        </section>

        <section className="inner-section inner-shell contact-tiles" aria-label="Ways to reach Endeavor">
          {contacts.map((contact) => {
            const external = contact.href.startsWith("http");
            return (
              <a
                className="contact-tile"
                href={contact.href}
                key={contact.label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="icon-tile contact-tile__icon"><Icon name={contact.icon} /></span>
                <h2>{contact.label}</h2>
                {contact.lines.map((line) => <p key={line} dir="ltr">{line}</p>)}
                <strong>{contact.action} →</strong>
              </a>
            );
          })}
        </section>

        <section className="inner-section inner-shell contact-location">
          <div className="contact-location__copy">
            <span className="page-eyebrow">Our office</span>
            <h2>Al Fattan Plaza, Garhoud — serving Dubai and Sharjah</h2>
            <p>Endeavor&apos;s teams are dispatched daily across the city — from Downtown and Business Bay to the Marina, JVC and beyond. Share your community when you book and we&apos;ll confirm access and timing.</p>
            <div className="contact-location__address">
              <strong>Office 709, Al Fattan Plaza</strong>
              <span>Airport Road, Garhoud<br />Dubai, United Arab Emirates</span>
              <span>{company.hoursLabel}</span>
              <a href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps →</a>
            </div>
            <div className="contact-location__social">
              <span>Follow along</span>
              <SocialLinks className="social-row social-row--light" />
            </div>
          </div>
          <div className="contact-location__map">
            <iframe
              src="https://www.google.com/maps?q=Al+Fattan+Plaza,+Airport+Road,+Garhoud,+Dubai&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Endeavor Cleaning Services office — Al Fattan Plaza, Garhoud, Dubai"
            />
          </div>
        </section>

        <section className="inner-section inner-shell contact-help-grid">
          <div>
            <span className="page-eyebrow">What to include</span>
            <h2>Help us answer clearly the first time</h2>
          </div>
          <ul>
            <li>Service or cleaning need</li>
            <li>Dubai community or building</li>
            <li>Property type and approximate size</li>
            <li>Quantity, unit count or room count</li>
            <li>Preferred date and time window</li>
            <li>Photographs where access or condition matters</li>
          </ul>
        </section>
      </main>
    </SiteFrame>
  );
}
