import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";
import { featuredReviews, googleRating, googleReviewsUrl } from "@/lib/reviews";
import { GoogleG, ReviewCard, Stars } from "./ReviewBits";

export default function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const t = ui[locale];
  return (
    <section className="testimonials" aria-label="Customer reviews">
      <div className="content-shell testimonials__grid">
        <aside className="rating-panel">
          <span className="section-kicker section-kicker--light">{t.testimonialsKicker}</span>
          <h2>{t.testimonialsTitle}</h2>
          <div className="rating-panel__score">
            <strong>{googleRating.score}</strong>
            <div>
              <Stars size={22} />
              <span>{t.googleReviews}</span>
            </div>
          </div>
          <a className="rating-panel__google" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            <GoogleG /> {t.readOnGoogle}
          </a>
          <p className="rating-panel__note">{t.reviewsNote} <Link href="/reviews">{t.more}</Link></p>
        </aside>

        {featuredReviews.length ? (
          <div className="review-grid">
            {featuredReviews.map((review, index) => (
              <ReviewCard review={review} index={index} linkLabel={t.googleReview} key={review.name} />
            ))}
          </div>
        ) : (
          <div className="review-grid review-grid--empty">
            <a className="review-card review-card--cta" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
              <GoogleG />
              <strong>Read what our customers say on Google</strong>
              <span>{googleRating.count} verified reviews · {googleRating.score} average rating</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
