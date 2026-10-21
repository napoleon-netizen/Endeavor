import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";
import { googleRating, googleReviewsUrl, reviews } from "@/lib/reviews";

function Stars({ size = 18 }: { size?: number }) {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars" style={{ "--star": `${size}px` } as React.CSSProperties}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8L10 1.5Z" /></svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.5 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.9 6.1C12.4 13.7 17.7 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6Z" />
      <path fill="#FBBC05" d="M10.5 28.6A14.5 14.5 0 0 1 9.7 24c0-1.6.3-3.2.8-4.6l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.9-6.1Z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.2-13.5-9.9l-7.9 6.1C6.5 42.6 14.6 48 24 48Z" />
    </svg>
  );
}

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
              <span>{googleRating.count} {t.googleReviews}</span>
            </div>
          </div>
          <a className="rating-panel__google" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            <GoogleG /> {t.readOnGoogle}
          </a>
          <p className="rating-panel__note">{t.reviewsNote} <Link href="/reviews">{t.more}</Link></p>
        </aside>

        {reviews.length ? (
          <div className="review-grid">
            {reviews.map((review, index) => (
              <figure className={`review-card review-card--${index % 2 ? "b" : "a"}`} key={review.url}>
                <span className="review-card__mark" aria-hidden="true">“</span>
                <Stars />
                <blockquote lang="en" dir="ltr">{review.quote}</blockquote>
                <figcaption>
                  <span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.service ? `${review.service} · ` : ""}<a href={review.url} target="_blank" rel="noopener noreferrer">{t.googleReview} ↗</a></small>
                  </div>
                </figcaption>
              </figure>
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
