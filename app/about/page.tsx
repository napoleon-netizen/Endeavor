import type { Metadata } from "next";
import Link from "next/link";

import Clients from "../_components/Clients";
import ConcernIcon from "../_components/ConcernIcon";
import SiteFrame from "../_components/SiteFrame";

export const metadata: Metadata = {
  title: "About Endeavor Cleaning Services | ISO-Certified Cleaning Company in Dubai Since 2014",
  description: "Founded in 2014, Endeavor Cleaning Services is ISO 9001, 14001 and 45001 certified and Dubai Municipality approved, trusted by homes and leading companies across Dubai.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Clear before we begin", "The selected service, scope, access needs and price are confirmed before work starts."],
  ["Care for the space", "The team prepares the immediate work area and follows the agreed service process."],
  ["Useful communication", "Customers can ask questions by phone or WhatsApp before and after a visit."],
  ["Details that can be checked", "Service options state what is included, what is separate and what information is still needed."],
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="about-hero">
          <div className="inner-shell about-hero__grid">
            <div>
              <span className="page-eyebrow">About Endeavor</span>
              <h1>Professional cleaning built around clear expectations</h1>
              <p>Endeavor supports homes and businesses across Dubai with focused services, practical communication and a scope agreed before the work begins.</p>
              <div className="page-hero__actions">
                <Link className="solid-action" href="/services">Explore Services</Link>
                <Link className="outline-action" href="/contact">Contact the Team</Link>
              </div>
            </div>
            <img src="/assets/photos/team-arrival.webp" srcSet="/assets/photos/team-arrival-sm.webp 800w, /assets/photos/team-arrival.webp 1920w" sizes="(max-width: 1400px) 100vw, 50vw" width="1920" height="1279" alt="The Endeavor Cleaning team arriving on site in Dubai" fetchPriority="high" decoding="async" />
          </div>
        </section>

        <section className="inner-section inner-shell">
          <div className="inner-section-heading">
            <span className="page-eyebrow">How we work</span>
            <h2>Simple principles for a smoother service</h2>
          </div>
          <div className="principle-grid">
            {principles.map(([title, copy]) => (
              <article key={title}><ConcernIcon label={title} /><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="inner-section about-story-section">
          <div className="inner-shell about-story-grid">
            <div><img src="/assets/photos/deep-covering-sm.webp" srcSet="/assets/photos/deep-covering-sm.webp 800w, /assets/photos/deep-covering.webp 1600w" sizes="(max-width: 1400px) 100vw, 50vw" width="1600" height="1066" alt="Endeavor technicians protecting furniture before a deep clean" loading="lazy" decoding="async" /></div>
            <div>
              <span className="page-eyebrow">Homes and businesses</span>
              <h2>One clear journey, adapted to each service</h2>
              <p>A sofa clean and a façade project should not be booked in the same way. Endeavor’s service journey collects the information each job actually needs—from unit count and fabric type to property size and access.</p>
              <ul>
                <li>Displayed-price services begin with a booking request.</li>
                <li>Variable work begins with an exact-quote request.</li>
                <li>Every request remains provisional until confirmed.</li>
              </ul>
              <Link className="solid-action" href="/book">Start a Request</Link>
            </div>
          </div>
        </section>

        <Clients compact />
      </main>
    </SiteFrame>
  );
}

