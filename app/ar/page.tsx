import Link from "next/link";

import Clients from "../_components/Clients";
import { Chevron, PopularIcon, partnerColumns, popularServices } from "../_components/homeData";
import ServiceAreas from "../_components/ServiceAreas";
import SiteFrame from "../_components/SiteFrame";
import Testimonials from "../_components/Testimonials";
import { arServices } from "@/lib/i18n";
import { services } from "@/lib/services";

const popularAr: Record<string, { name: string; copy: string }> = {
  "/services/ac-cleaning": { name: "تنظيف المكيفات", copy: "قارن مستويات الخدمة واطلب الخيار المناسب لكل وحدة تكييف." },
  "/services/water-tank-cleaning": { name: "تنظيف خزانات المياه", copy: "نرتّب تنظيف الخزان حسب السعة والنوع وظروف الوصول." },
  "/services/specialized-deep-cleaning": { name: "التنظيف العميق المتخصص", copy: "خطة تنظيف غرفة بغرفة حسب حجم العقار وأثاثه وحالته." },
  "/services/move-in-move-out-cleaning": { name: "تنظيف الانتقال والتسليم", copy: "جهّز العقار للسكن أو التسليم وفق قائمة تنظيف متفق عليها." },
  "/services/carpet-cleaning": { name: "غسيل السجاد", copy: "اختر الطريقة المناسبة للسجاد الثابت أو المتحرك حسب الخامة والمساحة." },
};

const partnerAr: Record<string, { name: string; copy: string }> = {
  "Residential Cleaning": { name: "تنظيف سكني", copy: "خدمات مفصّلة للشقق والفلل، من العناية بالأثاث إلى تنظيف العقار بالكامل." },
  "Commercial Cleaning": { name: "تنظيف تجاري", copy: "تنظيف مخطط للمكاتب والمنشآت والمساحات التجارية حسب أوقات العمل." },
  "Specialist Services": { name: "خدمات متخصصة", copy: "المكيفات وخزانات المياه والواجهات والرخام وغيرها من الأعمال المتخصصة." },
};

const waText = encodeURIComponent("مرحباً إنديفور، أرغب في الاستفسار عن خدمة تنظيف.");

export default function HomeArabic() {
  return (
    <SiteFrame locale="ar">
      <section className="hero-full" aria-label="نظرة عامة على إنديفور">
        <img src="/assets/photos/team-crew.webp" alt="فريق إنديفور للتنظيف يصل إلى فيلا في دبي بمعداته الاحترافية" fetchPriority="high" />
        <div className="hero-full__shade" aria-hidden="true" />
        <div className="content-shell hero-full__content">
          <span className="page-eyebrow page-eyebrow--light">تقليد من النظافة عالية الجودة</span>
          <h1>خدمات تنظيف احترافية في <em>دبي</em></h1>
          <p>مساحات أنظف. بيئات أكثر صحة. تنظيف معتمد للمنازل والشركات منذ عام 2014.</p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/book?mode=quote">احصل على عرض سعر مجاني</Link>
            <a className="hero-cta hero-cta--secondary" href={`https://wa.me/971588754060?text=${waText}`} target="_blank" rel="noopener noreferrer">راسلنا على واتساب</a>
          </div>
          <ul className="hero-trust" aria-label="لماذا إنديفور">
            <li>4.9 ★ تقييم على جوجل</li>
            <li>منذ 2014</li>
            <li dir="ltr">ISO 9001 · 14001 · 45001</li>
            <li>معتمدون من بلدية دبي</li>
            <li>فريق مدرّب ومؤمّن عليه</li>
          </ul>
        </div>
      </section>

      <div className="content-shell">
        <section className="side-panels side-panels--row" aria-label="معلومات الخدمة">
          <div className="finder-card">
            <div className="panel-title-row">
              <div>
                <h2>ماذا يمكننا أن ننظف لك؟</h2>
                <p className="finder-card__sub">اختر خدمة لعرض الخيارات والأسعار.</p>
              </div>
              <Link className="finder-card__all" href="/services">كل الخدمات الـ12 ←</Link>
            </div>
            <ul className="finder-grid">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <span className="finder-tile__icon"><img src={service.icon} alt="" loading="lazy" /></span>
                    <span className="finder-tile__label">{arServices[service.slug]?.shortName ?? service.shortName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link className="forest-card" href="/book?mode=quote">
            <img src="/assets/photos/team-lounge.webp" alt="فنيو إنديفور ينظفون غرفة معيشة في دبي" loading="lazy" />
            <div className="forest-copy">
              <span className="plant-badge" aria-hidden="true">✦</span>
              <div>
                <strong>تحتاج عرض سعر دقيق؟</strong>
                <span>أخبرنا عن عقارك والوقت المناسب لك</span>
                <span className="forest-cta">احصل على عرض سعر مجاني ←</span>
              </div>
            </div>
          </Link>
        </section>

        <section className="popular-section" aria-label="الخدمات الأكثر طلباً">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">الخيارات الأكثر طلباً</span>
              <h2 className="section-heading">ابدأ بالخدمة التي تحتاجها</h2>
            </div>
            <Link className="section-link" href="/services">تصفح كل الخدمات ←</Link>
          </div>
          <div className="popular-grid">
            {popularServices.map((service) => {
              const ar = popularAr[service.href];
              return (
                <article className="popular-card" key={service.href}>
                  <div className="popular-card__image">
                    <img src={service.image} alt="" />
                    <span className="popular-card__icon" aria-hidden="true"><PopularIcon kind={service.icon} /></span>
                  </div>
                  <h3>{ar?.name ?? service.name}</h3>
                  <p>{ar?.copy ?? service.copy}</p>
                  <Link className="popular-card__cta" href={service.href}>
                    عرض الخدمة <Chevron />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <Testimonials locale="ar" />

      <Clients locale="ar" />

      <div className="content-shell">
        <section className="partner-section" id="services" aria-label="فئات التنظيف">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">اختر حسب الحاجة</span>
              <h2 className="section-heading">تنظيف يناسب كل أنواع المساحات</h2>
            </div>
            <Link className="section-link" href="/services">عرض جميع الخدمات الـ12 ←</Link>
          </div>
          <div className="partner-grid">
            {partnerColumns.map((column) => {
              const ar = partnerAr[column.name];
              return (
                <article className="partner-card" key={column.name}>
                  <div className="partner-card__image"><img src={column.image} alt="" /></div>
                  <h3>{ar?.name ?? column.name}</h3>
                  <p>{ar?.copy ?? column.copy}</p>
                  <Link className="partner-card__cta" href={column.href}>استكشف الخيارات</Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <ServiceAreas locale="ar" />
    </SiteFrame>
  );
}
