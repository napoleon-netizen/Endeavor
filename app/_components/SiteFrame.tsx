import type { ReactNode } from "react";

import type { Locale } from "@/lib/i18n";
import FloatingWhatsApp from "./FloatingWhatsApp";
import MobileContactBar from "./MobileContactBar";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteFrame({ children, locale = "en" }: { children: ReactNode; locale?: Locale }) {
  return (
    <div className="site-frame">
      <SiteHeader />
      {children}
      <SiteFooter locale={locale} />
      <MobileContactBar />
      <FloatingWhatsApp />
    </div>
  );
}
