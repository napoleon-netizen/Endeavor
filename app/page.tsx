import Link from "next/link";

import { services } from "@/lib/services";
import { Chevron, PopularIcon, partnerColumns, popularServices } from "./_components/homeData";
import SiteFrame from "./_components/SiteFrame";
import Clients from "./_components/Clients";
import ServiceAreas from "./_components/ServiceAreas";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <SiteFrame>
      <main>
      <section className="hero-full" aria-label="Endeavor Cleaning overview">
        <img
          src="/assets/photos/team-crew-1280.webp"
          srcSet="/assets/photos/team-crew-800.webp 800w, /assets/photos/team-crew-1280.webp 1280w, /assets/photos/team-crew-1920.webp 1920w, /assets/photos/team-crew.webp 2560w"
          sizes="100vw"
          width="2560"
          height="1706"
          alt="The Endeavor Cleaning crew arriving at a Dubai villa with professional equipment"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-full__shade" aria-hidden="true" />
        <div className="content-shell hero-full__content">
          <span className="page-eyebrow page-eyebrow--light">A Tradition of Quality Cleaning</span>
          <h1>Professional Cleaning Services in <em>Dubai</em></h1>
          <p>Cleaner spaces. Healthier environments. Certified cleaning for homes and businesses since 2014.</p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/book?mode=quote">Get a Free Quote</Link>
            <a className="hero-cta hero-cta--secondary" href="https://wa.me/971588754060" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          </div>
          <ul className="hero-trust" aria-label="Why Endeavor">
            <li>4.8 ★ rated on Google</li>
            <li>Since 2014</li>
            <li>ISO 9001 · 14001 · 45001</li>
            <li>Dubai Municipality approved</li>
            <li>Trained &amp; insured team</li>
          </ul>
        </div>
      </section>

      <div className="content-shell">
        <section className="side-panels side-panels--row" aria-label="Endeavor service information">
            <div className="finder-card">
              <div className="panel-title-row">
                <div>
                  <h2>What can we clean for you?</h2>
                  <p className="finder-card__sub">Tap a service to see options and prices.</p>
                </div>
                <Link className="finder-card__all" href="/services">All 12 →</Link>
              </div>
              <ul className="finder-grid">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      <span className="finder-tile__icon"><img src={service.icon} alt="" loading="lazy" /></span>
                      <span className="finder-tile__label">{service.shortName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link className="forest-card" href="/book?mode=quote">
              <img src="/assets/photos/team-lounge-sm.webp" alt="Endeavor technicians deep cleaning a Dubai living room" loading="lazy" decoding="async" width="800" height="533" />
              <div className="forest-copy">
                <span className="plant-badge" aria-hidden="true">✦</span>
                <div>
                  <strong>Need an exact quote?</strong>
                  <span>Tell us about your property and preferred time</span>
                  <span className="forest-cta">Get a Free Quote →</span>
                </div>
              </div>
            </Link>
        </section>

        <section className="popular-section" aria-label="Popular cleaning services">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Popular choices</span>
              <h2 className="section-heading">Start with the service you need</h2>
            </div>
            <Link className="section-link" href="/services">Browse every service →</Link>
          </div>
          <div className="popular-grid">
            {popularServices.map((service) => (
              <article className="popular-card" key={service.name}>
                <div className="popular-card__image">
                  <img src={service.image} alt="" loading="lazy" decoding="async" width="800" height="533" />
                  <span className="popular-card__icon" aria-hidden="true"><PopularIcon kind={service.icon} /></span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.copy}</p>
                <Link className="popular-card__cta" href={service.href}>
                  View service <Chevron />
                </Link>
              </article>
            ))}
          </div>
        </section>


      </div>

      <Testimonials />

      <Clients />

      <div className="content-shell">
        <section className="partner-section" id="services" aria-label="Interior, exterior and commercial cleaning">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Interior · Exterior · Commercial</span>
              <h2 className="section-heading">Cleaning for every part of your property</h2>
            </div>
            <Link className="section-link" href="/services">See all 12 services →</Link>
          </div>
          <div className="partner-grid">
            {partnerColumns.map((column) => (
              <article className="partner-card" key={column.name}>
                <div className="partner-card__image"><img src={column.image} alt="" loading="lazy" decoding="async" width="800" height="533" /></div>
                <h3>{column.name}</h3>
                <p>{column.copy}</p>
                <ul className="partner-card__chips">
                  {column.services.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="partner-card__cta" href={column.href}>Explore options</Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <ServiceAreas />
      </main>
    </SiteFrame>
  );
}
