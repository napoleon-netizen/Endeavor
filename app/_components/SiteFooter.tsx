import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";
import { company } from "@/lib/company";
import SocialLinks from "./SocialLinks";

export default function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale];
  return (
    <footer className="site-footer" id="contact">
      <div className="content-shell footer-simple">
        <Link href={locale === "ar" ? "/ar" : "/"} aria-label="Endeavor Cleaning home" className="footer-simple__logo">
          <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" loading="lazy" width="600" height="200" />
        </Link>

        <p>{t.footerBlurb}</p>

        <SocialLinks />

        <nav className="footer-simple__links" aria-label="Footer">
          <Link href="/services">{t.services}</Link>
          <Link href="/about">{t.about}</Link>
          <Link href="/reviews">{t.reviews}</Link>
          <Link href="/contact">{t.contact}</Link>
          <Link href="/book">{t.bookService}</Link>
        </nav>

        <div className="footer-contact-quick">
          <a href={company.phoneMobileHref} dir="ltr">{company.phoneMobile}</a>
          <a href={company.whatsappHref}>{t.whatsappUs}</a>
        </div>

        <a className="footer-address" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
          {company.addressLines.join(" · ")}
        </a>
      </div>

      <div className="content-shell footer-bottom">
        <nav className="footer-bottom__links" aria-label="Legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
          <Link href="/booking-policy">Booking &amp; Cancellation</Link>
          <Link href="/sitemap-page">Sitemap</Link>
        </nav>
        <span>© {new Date().getFullYear()} {t.rights}</span>
      </div>
    </footer>
  );
}
