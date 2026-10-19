import type { Metadata } from "next";
import Link from "next/link";

import ConcernIcon from "../_components/ConcernIcon";
import SiteFrame from "../_components/SiteFrame";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services Dubai | Offices, Facilities & Car Parks | Endeavor",
  description:
    "Planned commercial cleaning across Dubai: offices, retail, facilities, car parks and common areas. ISO-certified, insured team, flexible schedules and contract options.",
};

const spaces = [
  ["Offices & workplaces", "Daily, weekly or after-hours cleaning scheduled around your team and your tenants."],
  ["Retail & customer areas", "Front-of-house standards for showrooms, clinics, salons and reception areas."],
  ["Car parks & basements", "Pressure washing, oil-stain treatment and line-area cleaning for residential and commercial parking."],
  ["Facilities & common areas", "Lobbies, corridors, staircases, waste rooms and service areas for buildings and communities."],
  ["Kitchens & F&B back-of-house", "Hood and duct cleaning, deep degreasing and compliance-ready records."],
  ["AC, ducts & water tanks", "Specialist services for building systems, planned around access and operating hours."],
];

const assurances = [
  ["Founded in 2014", "A Dubai company with more than a decade of commercial contracts."],
  ["ISO 9001 · 14001 · 45001", "Quality, environment and safety management systems in place."],
  ["Dubai Municipality approved", "Licensed and compliant for commercial and specialist work."],
  ["Trained & insured staff", "Uniformed, background-checked technicians with full insurance cover."],
];

export default function CommercialPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <div className="inner-shell breadcrumbs">
          <Link href="/">Home</Link><span>/</span><strong>Commercial Cleaning</strong>
        </div>

        <section className="inner-shell service-hero">
          <div className="service-hero__copy">
            <span className="page-eyebrow">Commercial</span>
            <h1>Commercial Cleaning Services in Dubai</h1>
            <p>Planned cleaning for offices, facilities, car parks and customer-facing spaces, scheduled around your access and operating hours and delivered by a certified, insured team.</p>
            <div className="service-price-box">
              <small>Pricing approach</small>
              <strong>Site visit and tailored quotation</strong>
              <span>One-off, scheduled or annual contract options.</span>
            </div>
            <div className="page-hero__actions">
              <Link className="solid-action" href="/book?mode=quote&service=commercial">Request a Site Visit</Link>
              <a className="outline-action" href={`https://wa.me/971588754060?text=${encodeURIComponent("Hello Endeavor, I would like a quotation for commercial cleaning.")}`}>Ask Us on WhatsApp</a>
            </div>
            <p className="provisional-note">Requests remain provisional until scope, schedule and access are confirmed.</p>
          </div>
          <div className="service-hero__media">
            <img src="/assets/photos/commercial-parking.webp" alt="Endeavor technician pressure washing a residential car park in Dubai" />
          </div>
        </section>

        <section className="inner-section inner-shell">
          <div className="inner-section-heading">
            <span className="page-eyebrow">What we look after</span>
            <h2>Spaces we clean for businesses and buildings</h2>
          </div>
          <div className="principle-grid">
            {spaces.map(([title, copy]) => (
              <article key={title}><ConcernIcon label={title} /><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="inner-section about-story-section">
          <div className="inner-shell about-story-grid">
            <div><img src="/assets/photos/team-arrival.webp" alt="The Endeavor Cleaning team arriving on site with equipment" loading="lazy" /></div>
            <div>
              <span className="page-eyebrow">Why businesses choose Endeavor</span>
              <h2>Certified, insured and built for scheduled work</h2>
              <ul>
                {assurances.map(([title, copy]) => (
                  <li key={title}><strong>{title}.</strong> {copy}</li>
                ))}
              </ul>
              <Link className="solid-action" href="/book?mode=quote&service=commercial">Request a Site Visit</Link>
            </div>
          </div>
        </section>

        <section className="inner-shell service-cta-panel">
          <div><span>Ready to plan a schedule?</span><h2>Tell us about your premises</h2></div>
          <div>
            <Link className="light-action" href="/book?mode=quote&service=commercial">Request an Exact Quote</Link>
            <a href="https://wa.me/971588754060">WhatsApp Us →</a>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
