import Link from "next/link";

import SocialLinks from "./SocialLinks";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Service", href: "/book" },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M19.1 4.9A9.9 9.9 0 0 0 12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A9.9 9.9 0 0 0 22 12c0-2.7-1-5.1-2.9-7.1ZM12 20.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3.1-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.5-.6-2.6-1.7-3.4-3-.1-.2 0-.4.1-.5l.6-.9c.1-.2.1-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.7 4.3 3.8 2.1.8 2.5.7 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.3-.3Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="content-shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Endeavor Cleaning home" className="footer-brand__logo">
            <img src="/assets/endeavor-logo-v1.png" alt="Endeavor — A Tradition of Quality Cleaning" />
          </Link>
          <p>Professional cleaning for homes and businesses across Dubai since 2014.</p>
        </div>

        <nav className="footer-col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <a href="tel:+971529597778"><PhoneIcon />+971 52 959 7778</a>
            </li>
            <li>
              <a href="https://wa.me/971588754060" target="_blank" rel="noopener noreferrer"><WhatsAppIcon />WhatsApp us</a>
            </li>
            <li>
              <span><PinIcon />Dubai, United Arab Emirates</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <SocialLinks />
        </div>
      </div>

      <div className="content-shell footer-bottom">
        <span>© {new Date().getFullYear()} Endeavor Cleaning Services. All rights reserved.</span>
        <span>A Tradition of Quality Cleaning</span>
      </div>
    </footer>
  );
}
