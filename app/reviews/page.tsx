import type { Metadata } from "next";
import Link from "next/link";

import { googleRating, googleReviewsUrl, reviews, writeReviewUrl } from "@/lib/reviews";
import SiteFrame from "../_components/SiteFrame";
import { GoogleG, Stars } from "../_components/ReviewBits";
import ReviewSlider from "../_components/ReviewSlider";

export const metadata: Metadata = {
  title: "Customer Reviews | Endeavor Cleaning Services Dubai",
  description: `Rated ${googleRating.score} on Google. Read genuine, unedited reviews from Endeavor Cleaning Services customers across Dubai — water tank, AC, deep cleaning and more.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  const fiveStar = reviews.filter((r) => r.rating === 5).length;
  return (
    <SiteFrame>
      <main className="inner-page">
        <section className="page-hero page-hero--reviews">
          <div className="inner-shell page-hero__content">
            <span className="page-eyebrow">Customer reviews</span>
            <h1>What our customers say</h1>
            <div className="reviews-hero__score" aria-label={`Rated ${googleRating.score} out of 5 on Google from ${googleRating.count} reviews`}>
              <strong>{googleRating.score}</strong>
              <div>
                <Stars size={24} />
                <span>From {googleRating.count} Google reviews</span>
              </div>
            </div>
            <p>Every Google review of Endeavor, published exactly as the customer wrote it — name, rating and the service they received. Nothing is filtered out.</p>
            <div className="page-hero__actions">
              <a className="solid-action" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">Read all reviews on Google ↗</a>
              <a className="outline-action" href={writeReviewUrl} target="_blank" rel="noopener noreferrer">Write a review</a>
            </div>
          </div>
        </section>

        <section className="testimonials reviews-all" aria-label="Verified Google reviews">
          <div className="content-shell">
            <div className="reviews-all__heading">
              <div>
                <span className="section-kicker section-kicker--light">Verified on Google</span>
                <h2>All {reviews.length} reviews, word for word</h2>
              </div>
              <a className="rating-panel__google" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                <GoogleG /> {fiveStar} of {reviews.length} are five stars
              </a>
            </div>
            <ReviewSlider reviews={reviews} />
          </div>
        </section>

        <section className="inner-shell service-cta-panel">
          <div><span>Ready when you are</span><h2>Tell us what you would like cleaned</h2></div>
          <div><Link className="light-action" href="/book">Book a Service</Link><a href="https://wa.me/971588754060">WhatsApp Us →</a></div>
        </section>
      </main>
    </SiteFrame>
  );
}
