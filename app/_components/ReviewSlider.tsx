"use client";

import { useEffect, useRef, useState } from "react";

import type { Review } from "@/lib/reviews";
import { ReviewCard } from "./ReviewBits";

type Props = { reviews: Review[]; linkLabel?: string; autoplay?: boolean };

export default function ReviewSlider({ reviews, linkLabel, autoplay = true }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = reviews.length;

  const scrollTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const next = ((i % count) + count) % count;
    const card = el.children[next] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  // Keep the index in sync with manual swiping / scrolling.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const cards = Array.from(el.children) as HTMLElement[];
        const left = el.scrollLeft + el.offsetLeft;
        let best = 0;
        let dist = Number.POSITIVE_INFINITY;
        cards.forEach((card, i) => {
          const d = Math.abs(card.offsetLeft - left);
          if (d < dist) { dist = d; best = i; }
        });
        setIndex(best);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  // Gentle auto-advance; pauses on hover/focus and respects reduced motion.
  useEffect(() => {
    if (!autoplay || paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => scrollTo(index + 1), 6500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, paused, index, count]);

  return (
    <div
      className="review-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="review-slider__track" ref={track} aria-live="polite">
        {reviews.map((review, i) => (
          <div className="review-slider__slide" key={review.name} role="group" aria-roledescription="slide" aria-label={`Review ${i + 1} of ${count}`}>
            <ReviewCard review={review} index={0} linkLabel={linkLabel} />
          </div>
        ))}
      </div>
      <div className="review-slider__controls">
        <button type="button" className="review-slider__arrow" onClick={() => scrollTo(index - 1)} aria-label="Previous review">‹</button>
        {count > 8 ? (
          <span className="review-slider__count" aria-live="polite">{index + 1} / {count}</span>
        ) : (
          <div className="review-slider__dots" role="tablist" aria-label="Choose review">
            {reviews.map((review, i) => (
              <button
                type="button"
                key={review.name}
                role="tab"
                aria-selected={i === index}
                aria-label={`Review ${i + 1}: ${review.name}`}
                className={`review-slider__dot ${i === index ? "review-slider__dot--active" : ""}`}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
        )}
        <button type="button" className="review-slider__arrow" onClick={() => scrollTo(index + 1)} aria-label="Next review">›</button>
      </div>
    </div>
  );
}
