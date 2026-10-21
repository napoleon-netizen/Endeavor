// Verified from the Google Business Profile on 21 Oct 2026.
// Only genuine Google reviews may be quoted here, verbatim, with the customer's
// name, the service they mention, and a direct link to the review.
export const googleRating = { score: "4.8", count: "26" };
export const googleReviewsUrl = "https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews";
export const writeReviewUrl = "https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews#lrd=,1";

export type Review = { name: string; service?: string; quote: string; url: string; date?: string };
export const reviews: Review[] = [
  {
    name: "Anas Much",
    service: "Water Tank Cleaning",
    date: "a month ago",
    quote:
      "A high level of professionals. They started the job and didn't leave till they made absolutely sure they were finished. The cleaning of the water tank inclusive of the pipes lasted 6 hours. Godsend! I highly recommend the Services!",
    url: googleReviewsUrl,
  },
  {
    name: "Siyazini James",
    service: "Deep Cleaning, AC Duct & Upholstery",
    date: "2 years ago",
    quote:
      "I don't do reviews very often, but I felt the need to do one today. I reached out to Endeavour to do a full deep cleaning service of my apartment inclusive of AC duct cleaning and upholstery cleaning. These guys came in and were very professional, efficient and focussed on the task. They cleaned places that most service providers often overlook. My place feels and smells amazing. Not to mention I can breathe easy as the thoroughly managed the AC vents and ducts. HIGHLY RECOMMEND!!!",
    url: googleReviewsUrl,
  },
];
