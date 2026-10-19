import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";
import SocialLinks from "./SocialLinks";

export default function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale];
  return (
    <footer className="site-footer" id="contact">
      <div className="content-shell footer-simple">
        <Link href={locale === "ar" ? "/ar" : "/"} aria-label="Endeavor Cleaning home" className="footer-simple__logo">
          <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
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
          <a href="tel:+971529597778" dir="ltr">+971 52 959 7778</a>
          <a href="https://wa.me/971588754060">{t.whatsappUs}</a>
        </div>
      </div>

      <div className="content-shell footer-bottom">
        <span>© {new Date().getFullYear()} {t.rights}</span>
        <span>{t.location}</span>
      </div>
    </footer>
  );
}
