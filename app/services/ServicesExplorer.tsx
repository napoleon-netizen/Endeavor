"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Service, ServiceCategory } from "@/lib/services";

export type ExplorerService = Pick<Service, "slug" | "name" | "category" | "image" | "icon" | "cardCopy" | "priceNote" | "quoteOnly">;

type FilterCategory = "All Services" | ServiceCategory;

export default function ServicesExplorer({ services, serviceCategories, initialCategory = "All Services" }: { services: ExplorerService[]; serviceCategories: readonly FilterCategory[]; initialCategory?: FilterCategory }) {
  const [category, setCategory] = useState<FilterCategory>(initialCategory);
  const [query, setQuery] = useState("");

  const filteredServices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return services.filter((service) => {
      const categoryMatches = category === "All Services" || service.category === category;
      const queryMatches = !normalizedQuery || `${service.name} ${service.cardCopy} ${service.category}`.toLowerCase().includes(normalizedQuery);
      return categoryMatches && queryMatches;
    });
  }, [category, query]);

  return (
    <section className="services-explorer" aria-labelledby="services-results-heading">
      <div className="services-controls">
        <label className="service-search">
          <span className="sr-only">Search services</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by service or cleaning need"
          />
        </label>

        <div className="service-tabs" role="group" aria-label="Filter services by category">
          {serviceCategories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="services-result-bar">
        <h2 id="services-results-heading">{category}</h2>
        <span>{filteredServices.length} service{filteredServices.length === 1 ? "" : "s"}</span>
      </div>

      {filteredServices.length ? (
        <div className="service-directory-grid">
          {filteredServices.map((service) => (
            <Link className="service-directory-card" href={`/services/${service.slug}`} key={service.slug}>
              <div className="service-directory-media">
                <img className="service-directory-photo" src={service.image.replace(".webp", "-sm.webp")} alt="" loading="lazy" decoding="async" width="800" height="533" />
                <span className="service-directory-icon"><img src={service.icon} alt="" loading="lazy" width="40" height="40" /></span>
                <span className="service-category-label">{service.category}</span>
              </div>
              <div className="service-directory-body">
                <h3>{service.name}</h3>
                <p>{service.cardCopy}</p>
                <span className="service-price-note">{service.priceNote}</span>
                <span className="service-directory-action">
                  {service.quoteOnly ? "Request an exact quote" : "View service options"}
                  <b aria-hidden="true">→</b>
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="service-empty-state">
          <h3>No matching service found</h3>
          <p>Try a shorter search, choose another category, or ask the Endeavor team for help.</p>
          <a href="https://wa.me/971588754060">Ask us on WhatsApp</a>
        </div>
      )}
    </section>
  );
}

