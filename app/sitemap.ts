import type { MetadataRoute } from "next";

import { services } from "@/lib/services";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://endeavorclean.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/services", "/commercial", "/about", "/reviews", "/contact", "/book", "/privacy-policy", "/terms", "/booking-policy", "/sitemap-page"];
  return [
    ...staticPages.map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 })),
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
  ];
}
