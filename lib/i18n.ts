export type Locale = "en" | "ar";

export function localeFromPath(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export const ui = {
  en: {
    home: "Home", services: "Services", about: "About Us", contact: "Contact Us", reviews: "Reviews",
    bookNow: "Book Now", bookService: "Book a Service", dubaiService: "Dubai service",
    switchLabel: "العربية", switchHref: "/ar", packages: "Packages & Contracts",
    footerBlurb: "Professional cleaning for homes and businesses across Dubai.",
    whatsappUs: "WhatsApp us", rights: "Endeavor Cleaning Services. All rights reserved.", location: "Dubai, United Arab Emirates",
    testimonialsKicker: "Testimonials", testimonialsTitle: "Trusted by families and businesses across Dubai",
    googleReviews: "Google reviews", readOnGoogle: "Read our reviews on Google",
    reviewsNote: "Every review is published exactly as our customers wrote it.", more: "More →", googleReview: "Google review",
    clientsKicker: "Our clients", clientsTitle: "Preferred by Dubai's top companies and communities",
    clientsBlurb: "Relied on by businesses, property managers and homeowners across Dubai since 2014.",
    areasKicker: "Areas we serve", areasTitle: "Across Dubai and Sharjah", areasAsk: "Not listed? Ask us →",
  },
  ar: {
    home: "الرئيسية", services: "الخدمات", about: "من نحن", contact: "اتصل بنا", reviews: "التقييمات",
    bookNow: "احجز الآن", bookService: "احجز خدمة", dubaiService: "خدمة في دبي",
    switchLabel: "English", switchHref: "/", packages: "الباقات والعقود",
    footerBlurb: "تنظيف احترافي للمنازل والشركات في جميع أنحاء دبي.",
    whatsappUs: "راسلنا على واتساب", rights: "إنديفور لخدمات التنظيف. جميع الحقوق محفوظة.", location: "دبي، الإمارات العربية المتحدة",
    testimonialsKicker: "آراء العملاء", testimonialsTitle: "موثوقون من العائلات والشركات في جميع أنحاء دبي",
    googleReviews: "تقييم على جوجل", readOnGoogle: "اقرأ تقييماتنا على جوجل",
    reviewsNote: "كل تقييم منشور كما كتبه عملاؤنا تماماً.", more: "المزيد ←", googleReview: "تقييم جوجل",
    clientsKicker: "عملاؤنا", clientsTitle: "الخيار المفضل لكبرى الشركات والمجمعات السكنية في دبي",
    clientsBlurb: "تثق بنا الشركات ومديرو العقارات وأصحاب المنازل في دبي منذ عام 2014.",
    areasKicker: "المناطق التي نخدمها", areasTitle: "في جميع أنحاء دبي والشارقة", areasAsk: "منطقتك غير مدرجة؟ اسألنا ←",
  },
} as const;

export const arServices: Record<string, { name: string; shortName: string; summary: string }> = {
  "ac-cleaning": { name: "تنظيف المكيفات", shortName: "تنظيف المكيفات", summary: "تنظيف الفلاتر والفتحات والمكونات الداخلية لهواء أنقى وتبريد أفضل." },
  "water-tank-cleaning": { name: "تنظيف خزانات المياه", shortName: "خزانات المياه", summary: "إزالة الرواسب والأوساخ وتعقيم الخزان لمياه أنظف وأكثر أماناً." },
  "specialized-deep-cleaning": { name: "التنظيف العميق المتخصص", shortName: "التنظيف العميق", summary: "خطة تنظيف غرفة بغرفة حسب حجم العقار وحالته." },
  "external-window-facade-cleaning": { name: "تنظيف النوافذ والواجهات الخارجية", shortName: "النوافذ والواجهات", summary: "تنظيف الزجاج الخارجي والواجهات بأدوات احترافية." },
  "sofa-cleaning": { name: "تنظيف الكنب", shortName: "تنظيف الكنب", summary: "تنظيف عميق للكنب والمقاعد المنجدة بطريقة تناسب نوع القماش." },
  "mattress-cleaning": { name: "تنظيف المراتب", shortName: "تنظيف المراتب", summary: "إزالة الغبار والعث والبقع من المراتب لنوم صحي." },
  "carpet-cleaning": { name: "غسيل السجاد", shortName: "غسيل السجاد", summary: "غسيل السجاد الثابت والسجاد المتحرك حسب نوع الخامة." },
  "marble-polishing": { name: "جلي وتلميع الرخام", shortName: "تلميع الرخام", summary: "إعادة اللمعان للأرضيات الرخامية الباهتة أو المخدوشة." },
  "post-construction-cleaning": { name: "تنظيف ما بعد البناء", shortName: "ما بعد البناء", summary: "إزالة غبار البناء وبقايا الأعمال قبل التسليم أو السكن." },
  "move-in-move-out-cleaning": { name: "تنظيف الانتقال والتسليم", shortName: "الانتقال والتسليم", summary: "تجهيز العقار للسكن أو التسليم وفق قائمة تنظيف متفق عليها." },
  "kitchen-duct-cleaning": { name: "تنظيف مداخن المطابخ", shortName: "مداخن المطابخ", summary: "إزالة الدهون من الشفاطات والمداخن للمطابخ المنزلية والتجارية." },
  "bathroom-deep-cleaning": { name: "التنظيف العميق للحمامات", shortName: "تنظيف الحمامات", summary: "إزالة الترسبات الكلسية والجير وتعقيم الحمامات بالكامل." },
};
