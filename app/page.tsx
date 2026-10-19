import Link from "next/link";

import { services } from "@/lib/services";
import SiteFrame from "./_components/SiteFrame";
import Clients from "./_components/Clients";
import ServiceAreas from "./_components/ServiceAreas";
import Testimonials from "./_components/Testimonials";

const partnerColumns = [
  {
    name: "Residential Cleaning",
    copy: "Detailed services for apartments and villas, from focused furniture care to complete property cleaning.",
    image: "/assets/photos/deep-covering-sm.webp",
    href: "/services?category=property-cleaning",
  },
  {
    name: "Commercial Cleaning",
    copy: "Planned cleaning for offices, facilities and customer-facing spaces around access and operating needs.",
    image: "/assets/photos/commercial-parking-sm.webp",
    href: "/commercial",
  },
  {
    name: "Specialist Services",
    copy: "AC systems, water tanks, façades, marble and other work that needs a clearly defined scope.",
    image: "/assets/photos/tank-rooftop-sm.webp",
    href: "/services",
  },
];

const popularServices = [
  {
    name: "AC Cleaning",
    copy: "Compare Endeavor service levels and request the right option for each AC unit.",
    image: "/assets/photos/ac-duct-hose-sm.webp",
    icon: "air",
    href: "/services/ac-cleaning",
  },
  {
    name: "Water Tank Cleaning",
    copy: "Arrange tank cleaning around capacity, tank type, property and access conditions.",
    image: "/assets/photos/tank-rooftop-sm.webp",
    icon: "water",
    href: "/services/water-tank-cleaning",
  },
  {
    name: "Specialized Deep Cleaning",
    copy: "Build a room-by-room cleaning plan around property size, furnishing and condition.",
    image: "/assets/photos/kitchen-hob-sm.webp",
    icon: "spray",
    href: "/services/specialized-deep-cleaning",
  },
  {
    name: "Move-In/Move-Out Cleaning",
    copy: "Prepare a property for arrival or handover with an agreed cleaning checklist.",
    image: "/assets/photos/deep-sheeting-sm.webp",
    icon: "box",
    href: "/services/move-in-move-out-cleaning",
  },
  {
    name: "Carpet Cleaning",
    copy: "Choose a suitable approach for fitted carpet or loose rugs based on material and area.",
    image: "/assets/photos/carpet-machine-sm.webp",
    icon: "sofa",
    href: "/services/carpet-cleaning",
  },
] as const;

function Chevron() {
  return <span className="chevron" aria-hidden="true" />;
}

function PopularIcon({ kind }: { kind: (typeof popularServices)[number]["icon"] }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (kind === "air") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M8 12h24v15H8zM12 16h16M12 20h16M12 24h10" />
        <path {...common} d="M14 31c2-2 4-2 6 0s4 2 6 0" />
      </svg>
    );
  }

  if (kind === "water") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M20 7c4 7 9 11 9 17a9 9 0 0 1-18 0c0-6 5-10 9-17Z" />
        <path {...common} d="M16 25c1 2 3 3 5 3" />
      </svg>
    );
  }

  if (kind === "spray") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M15 15h8v18a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
        <path {...common} d="M17 15v-3h4v3M25 12h4l-2 3h3l-6 6" />
      </svg>
    );
  }

  if (kind === "box") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path {...common} d="M8 14 20 8l12 6-12 6ZM8 14v13l12 6 12-6V14M20 20v13" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path {...common} d="M9 24v-4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v4M7 24h26v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2ZM9 29v3M31 29v3" />
    </svg>
  );
}

export default function Home() {
  return (
    <SiteFrame>
      <section className="hero-full" aria-label="Endeavor Cleaning overview">
        <img src="/assets/photos/team-crew.webp" alt="The Endeavor Cleaning crew arriving at a Dubai villa with professional equipment" fetchPriority="high" />
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
            <li>4.8 ★ on Google · 480 reviews</li>
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
              <img src="/assets/photos/team-lounge.webp" alt="Endeavor technicians deep cleaning a Dubai living room" loading="lazy" />
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
                  <img src={service.image} alt="" />
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

        <section className="home-services-section" aria-label="Our cleaning services">
          <h2 className="section-heading">Our Cleaning Services</h2>
          <p className="home-services-intro">Explore our professional cleaning services by selecting a service below.</p>
          <div className="home-services-grid">
            {services.map((service) => (
              <Link className="home-services-card" href={`/services/${service.slug}`} key={service.slug}>
                <div className="home-services-card__image">
                  <img src={service.image} alt="" />
                </div>
                <span>{service.name}</span>
              </Link>
            ))}
          </div>
        </section>

      </div>

      <Testimonials />

      <Clients />

      <div className="content-shell">
        <section className="partner-section" id="services" aria-label="Endeavor cleaning categories">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Choose by need</span>
              <h2 className="section-heading">Cleaning support for every kind of space</h2>
            </div>
            <Link className="section-link" href="/services">See all 12 services →</Link>
          </div>
          <div className="partner-grid">
            {partnerColumns.map((column) => (
              <article className="partner-card" key={column.name}>
                <div className="partner-card__image"><img src={column.image} alt="" /></div>
                <h3>{column.name}</h3>
                <p>{column.copy}</p>
                <Link className="partner-card__cta" href={column.href}>Explore options</Link>
              </article>
            ))}
          </div>
        </section>
      </div>

      <ServiceAreas />
    </SiteFrame>
  );
}
