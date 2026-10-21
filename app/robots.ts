import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://endeavorclean.com";
// Keep preview/temporary hosts out of Google until the real domain points here.
const isProductionDomain = process.env.VERCEL_ENV === "production" && !!process.env.NEXT_PUBLIC_SITE_URL;

export default function robots(): MetadataRoute.Robots {
  if (!isProductionDomain) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/ar", "/ar/"] },
    sitemap: `${base}/sitemap.xml`,
  };
}
