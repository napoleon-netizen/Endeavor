// Verified from the Google Business Profile on 22 Oct 2026 (screenshots of the
// review panel). Only genuine Google reviews may be quoted here, verbatim, with
// the customer's name, their star rating and the service they mention. Reviews
// whose text was truncated on Google ("… More") are not included until the full
// text is captured. Reviews with no text are not listed.
export const googleRating = { score: "4.8", count: "26" };
// Opens the Google reviews panel for the Endeavor listing directly (place reference 0x3e5f6790026bbd13:0x720c18c1407e5f7f).
export const googleReviewsUrl = "https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews#lrd=0x3e5f6790026bbd13:0x720c18c1407e5f7f,1,,,,";
export const writeReviewUrl = "https://www.google.com/search?q=Endeavor+Cleaning+Services+Dubai+reviews#lrd=0x3e5f6790026bbd13:0x720c18c1407e5f7f,3,,,,";

export type Review = {
  name: string;
  /** Star rating as shown on Google (1–5). */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Service the customer mentions; omitted when the review does not say. */
  service?: string;
  quote: string;
  /** Direct link to the review where available; otherwise the listing's review panel. */
  url: string;
};

export const reviews: Review[] = [
  {
    name: "Anas Much",
    rating: 5,
    service: "Water Tank Cleaning",
    quote:
      "A high level of professionals. They started the job and didn't leave till they made absolutely sure they were finished. The cleaning of the water tank inclusive of the pipes lasted 6 hours. Godsend! I highly recommend the Services!",
    url: googleReviewsUrl,
  },
  {
    name: "Siyazini James",
    rating: 5,
    service: "Deep Cleaning, AC Duct & Upholstery",
    quote:
      "I don't do reviews very often, but I felt the need to do one today. I reached out to Endeavour to do a full deep cleaning service of my apartment inclusive of AC duct cleaning and upholstery cleaning. These guys came in and were very professional, efficient and focussed on the task. They cleaned places that most service providers often overlook. My place feels and smells amazing. Not to mention I can breathe easy as the thoroughly managed the AC vents and ducts. HIGHLY RECOMMEND!!!",
    url: googleReviewsUrl,
  },
  {
    name: "Bermet Tagaeva",
    rating: 5,
    service: "AC Cleaning",
    quote: "Professional company with great service level. Workers came on time and left the area very clean after themselves. Happy with cleaning of AC overall.",
    url: googleReviewsUrl,
  },
  {
    name: "Maryna Van der merwe",
    rating: 5,
    service: "Water Tank Cleaning",
    quote:
      "We've used Endeavor Cleaning Services to clean our watertank I can definitely recommend this company. They are professional, friendly, extremely thorough and responsible. Great company, great people, excellent work! Thank you Endeavor!",
    url: googleReviewsUrl,
  },
  {
    name: "Urša Pestotnik",
    rating: 5,
    quote: "The team was amazing 👍 Great customer service and service. Sent is the detailed report afterwards. Also waited until they made sure everything is working normally.",
    url: googleReviewsUrl,
  },
  {
    name: "Amro Alhusaria",
    rating: 5,
    service: "Water Tank Cleaning",
    quote: "Great water tank cleaning service, well done 👍 professional staff and reasonable price. Thank you.",
    url: googleReviewsUrl,
  },
  {
    name: "Kharen Dequilla",
    rating: 5,
    service: "Sofa Cleaning",
    quote: "Good experience from sofa cleaning service today",
    url: googleReviewsUrl,
  },
  {
    name: "Huda Abdulla",
    rating: 5,
    service: "Home Cleaning",
    quote: "Excellent service, very hard working workers, professional job\nReally thank you for the services you provided, my house is very clean now",
    url: googleReviewsUrl,
  },
  {
    name: "Ramy Saleh",
    rating: 5,
    quote: "Great job. Quality team. Came on time. Finished on time. Highly recommend.",
    url: googleReviewsUrl,
  },
  {
    name: "Andrey Tselovalnikov",
    rating: 5,
    service: "Water System Cleaning",
    quote: "On time. Deep cleaning of my water system",
    url: googleReviewsUrl,
  },
  {
    name: "Tee J",
    rating: 5,
    quote: "I love it, amazing job and very easy to schedule appointment ...keep up the good work guys",
    url: googleReviewsUrl,
  },
  {
    name: "Jay Shah",
    rating: 5,
    quote: "Good work",
    url: googleReviewsUrl,
  },
];

/** The reviews shown in the homepage slider. */
export const featuredReviews = reviews;
