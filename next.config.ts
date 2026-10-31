import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://tagmanager.google.com https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://*.google.ae https://*.googlesyndication.com",
      "frame-src https://www.google.com https://www.googletagmanager.com https://td.doubleclick.net",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
    ].join("; "),
  },
];

// Every URL from the old WordPress site's Yoast sitemap (endeavorclean.com/sitemap_index.xml,
// 23 Oct 2026) mapped to its closest page on the new site, so Google rankings and old links
// in ads, flyers and profiles keep working after launch. Trailing slashes are stripped by
// Next.js before these are matched. Old URLs that already exist on the new site (/, /services,
// /services/post-construction-cleaning, marble-polishing, sofa-cleaning,
// external-window-facade-cleaning, water-tank-cleaning) need no entry.
const oldSiteRedirects: Array<[string, string]> = [
  // Pages
  ["/about-us", "/about"],
  ["/contact-us", "/contact"],
  ["/free-quote", "/book"],
  ["/thank-you", "/"],
  ["/blog", "/services"],
  // Old service URLs that changed
  ["/services/deep-cleaning", "/services/specialized-deep-cleaning"],
  ["/services/ac-cleaning-dubai", "/services/ac-cleaning"],
  ["/services/ac-cleaning-sharjah", "/services/ac-cleaning"],
  ["/services/water-tank-cleaning-sharjah", "/services/water-tank-cleaning"],
  // Older service URLs still known to Google (seen in Search Console, 31 Oct 2026)
  ["/services/ac-duct-cleaning", "/services/ac-cleaning"],
  ["/services/deep-cleaning-services-dubai", "/services/specialized-deep-cleaning"],
  // Blog posts (the new site has no blog) → the service each post was about
  ["/eco-friendly-products-for-cleaning", "/services/specialized-deep-cleaning"],
  ["/house-cleaning-services-before-moving-in", "/services/move-in-move-out-cleaning"],
  ["/airbnb-cleaning-checklist-simplify-your-hosting-duties", "/services/move-in-move-out-cleaning"],
  ["/comprehensive-cleaning-guide-for-a-spotless-apartment", "/services/specialized-deep-cleaning"],
  ["/how-to-clean-a-couch-that-smells", "/services/sofa-cleaning"],
  ["/the-ultimate-guide-to-eco-friendly-carpet-cleaning", "/services/carpet-cleaning"],
  ["/how-long-does-it-take-to-deep-clean-an-apartment", "/services/specialized-deep-cleaning"],
  ["/what-are-the-benefits-of-a-clean-and-healthy-home", "/services/specialized-deep-cleaning"],
  ["/the-importance-of-regular-mattress-cleaning-for-better-sleep", "/services/mattress-cleaning"],
  ["/from-chaos-to-calm-the-power-of-deep-cleaning-and-organizing", "/services/specialized-deep-cleaning"],
  ["/the-deep-cleaning-and-organizing-checklist-your-path-to-a-pristine-home", "/services/specialized-deep-cleaning"],
  ["/beyond-the-surface-mastering-deep-cleaning-and-organization", "/services/specialized-deep-cleaning"],
  ["/the-deep-cleaning-and-organizing", "/services/specialized-deep-cleaning"],
  ["/the-benefits-of-regular-marble-polishing", "/services/marble-polishing"],
  // Blog archives
  ["/category/:path*", "/services"],
  ["/tag/:path*", "/services"],
  ["/author/:path*", "/"],
  ["/feed", "/"],
  // Old Yoast sitemaps (may still be registered in Search Console) → the new sitemap
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/:name(post|page|category|post_tag|author)-sitemap.xml", "/sitemap.xml"],
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/ar", destination: "/", permanent: false },
      { source: "/ar/:path*", destination: "/:path*", permanent: false },
      {
        source: "/services/carpet-shampooing",
        destination: "/services/carpet-cleaning",
        permanent: true,
      },
      ...oldSiteRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
