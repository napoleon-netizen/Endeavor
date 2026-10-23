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
      "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.googleadservices.com https://*.g.doubleclick.net https://*.google.com https://*.google.ae",
      "frame-src https://www.google.com https://www.googletagmanager.com https://td.doubleclick.net",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self' https://wa.me",
    ].join("; "),
  },
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
    ];
  },
};

export default nextConfig;
