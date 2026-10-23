import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n";
import FloatingWhatsApp from "./FloatingWhatsApp";
import MobileContactBar from "./MobileContactBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { getService, services } from "@/lib/services";

// Only the few fields the header needs cross to the client; lib/services.ts
// itself (≈80 KB of copy) stays on the server.
const navServices = services.map((s) => ({ slug: s.slug, name: s.name }));
const acPackages = (getService("ac-cleaning")?.packages ?? []).map((p) => ({ name: p.name }));

export default function SiteFrame({ children, locale = "en" }: { children: ReactNode; locale?: Locale }) {
  return (
    <div className="site-frame">
      <SiteHeader services={navServices} acPackages={acPackages} />
      {children}
      <SiteFooter locale={locale} />
      <MobileContactBar />
      <FloatingWhatsApp />
    </div>
  );
}
