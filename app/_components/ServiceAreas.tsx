import Link from "next/link";

import { serviceAreas } from "@/lib/areas";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" /><circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export default function ServiceAreas() {
  return (
    <section className="areas" aria-label="Areas we serve">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">Areas we serve</span>
            <h2 className="section-heading">Across Dubai and Sharjah</h2>
          </div>
          <Link className="section-link" href="/contact">Not listed? Ask us →</Link>
        </div>
        <div className="areas-grid">
          {serviceAreas.map((group) => (
            <article className="areas-card" key={group.emirate}>
              <header>
                <span className="icon-tile icon-tile--sm"><PinIcon /></span>
                <div>
                  <h3>{group.emirate}</h3>
                  <p>{group.blurb}</p>
                </div>
              </header>
              <ul>
                {group.places.map((place) => <li key={place}>{place}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
