import { clients } from "@/lib/clients";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

export default function Clients({ compact = false, locale = "en" }: { compact?: boolean; locale?: Locale }) {
  const t = ui[locale];
  const items = [...clients, ...clients]; // doubled for a seamless loop
  return (
    <section className={`clients ${compact ? "clients--compact" : ""}`} aria-label="Our clients">
      <div className="content-shell">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">{t.clientsKicker}</span>
            <h2 className="section-heading">{t.clientsTitle}</h2>
          </div>
          <p className="clients__blurb">{t.clientsBlurb}</p>
        </div>
      </div>
      <div className="clients__track">
        <div className="clients__row">
          {items.map((client, index) => (
            <span className="client-mark" key={`${client.name}-${index}`} aria-hidden={index >= clients.length}>
              {client.logo ? <img src={client.logo} alt={client.name} loading="lazy" onError={undefined} /> : client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
