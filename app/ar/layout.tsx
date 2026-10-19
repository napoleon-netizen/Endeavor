import type { Metadata } from "next";

import HtmlLang from "../_components/HtmlLang";

export const metadata: Metadata = {
  title: "إنديفور | خدمات تنظيف احترافية في دبي",
  description: "تنظيف معتمد للمنازل والشركات في دبي منذ 2014: المكيفات، خزانات المياه، التنظيف العميق، الكنب، السجاد، الرخام والمزيد.",
  alternates: { canonical: "/ar", languages: { en: "/", ar: "/ar" } },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className="rtl">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
      <HtmlLang lang="ar" dir="rtl" />
      {children}
    </div>
  );
}
