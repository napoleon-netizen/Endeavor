import type { Metadata } from "next";
import Link from "next/link";

import { googleRating, googleReviewsUrl, reviews, writeReviewUrl } from "@/lib/reviews";
import SiteFrame from "../_components/SiteFrame";
import { GoogleG, ReviewCard, Stars } from "../_components/ReviewBits";

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
            <p>Every review on this page is a genuine Google review, published exactly as the customer wrote it — name, rating and the service they received.</p>
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
                <h2>{reviews.length} reviews, word for word</h2>
              </div>
              <a className="rating-panel__google" href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                <GoogleG /> {fiveStar} of {reviews.length} are five stars
              </a>
            </div>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <ReviewCard review={review} index={index} key={review.name} />
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section inner-shell reviews-standard">
          <div className="inner-section-heading">
            <span className="page-eyebrow">Our review standard</span>
            <h2>How reviews reach this page</h2>
          </div>
          <div className="review-policy-list">
            <article><span>01</span><h3>Google only</h3><p>Every review is taken from our public Google Business Profile — nothing is invented or collected privately.</p></article>
            <article><span>02</span><h3>Unedited</h3><p>Reviews appear exactly as written, including the customer's own wording, spelling and rating.</p></article>
            <article><span>03</span><h3>Named and dated</h3><p>Customer name and the service received are shown as given; the full review history is one click away on Google.</p></article>
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
