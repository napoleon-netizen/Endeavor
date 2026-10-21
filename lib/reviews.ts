// Verified from the Google Business Profile on 21 Oct 2026.
// Only genuine Google reviews may be quoted here, verbatim, with the customer's
// name, the service they mention, and a direct link to the review.
export const googleRating = { score: "4.8", count: "26" };
export const googleReviewsUrl = "https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews";
export const writeReviewUrl = "https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews#lrd=,1";

export type Review = { name: string; service?: string; quote: string; url: string; date?: string };
export const reviews: Review[] = [];
