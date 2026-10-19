import { clients } from "@/lib/clients";

export default function Clients({ compact = false }: { compact?: boolean }) {
  const items = [...clients, ...clients]; // doubled for a seamless loop
  return (
    <section className={`clients ${compact ? "clients--compact" : ""}`} aria-label="Our clients">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">Our clients</span>
            <h2 className="section-heading">Preferred by Dubai's top companies and communities</h2>
          </div>
          <p className="clients__blurb">Relied on by businesses, property managers and homeowners across Dubai since 2014.</p>
        </div>
      </div>
      <div className="clients__track" role="list">
        <div className="clients__row">
          {items.map((client, index) => (
            <span className="client-mark" role="listitem" key={`${client.name}-${index}`} aria-hidden={index >= clients.length}>
              {client.logo ? <img src={client.logo} alt={client.name} loading="lazy" /> : client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
