// Verified from the Google Business Profile on 22 Oct 2026 (screenshots of the
// review panel). Only genuine Google reviews may be quoted here, verbatim, with
// the customer's name, their star rating and the service they mention. Reviews
// whose text was truncated on Google ("… More") are not included until the full
// text is captured. Reviews with no text are not listed. Only five-star
// reviews are displayed (client decision, 22 Oct 2026).
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
      "I don't do reviews very often, but I felt the need to do one today.\n\nI reached out to Endeavour to do a full deep cleaning service of my apartment inclusive of AC duct cleaning and upholstery cleaning.\n\nThese guys came in and were very professional, efficient and focussed on the task. They cleaned places that most service providers often overlook.\n\nMy place feels and smells amazing.\n\nNot to mention I can breathe easy as the thoroughly managed the AC vents and ducts\n\nHIGHLY RECOMMEND!!!",
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
    name: "Cristian Guiban",
    rating: 5,
    service: "AC Cleaning, Water Tank & Deep Cleaning",
    quote:
      "This is the second time I have used Endeavor to deep clean my air-conditioning system and water tanks, and once again, they exceeded my expectations.\n\nThe team arrived right on time and worked with impressive efficiency, care, and attention to detail. Everyone was dedicated and genuinely willing to go the extra mile.\n\nWe also agreed to carry out a full deep clean of the property, and the result was on a completely different level from other cleaning companies I've tried.\n\nHaving now used their services twice, I can definitely say that Endeavor is the best certified cleaning company I have found across Dubai and Ajman. They have fully earned my trust and will be my first choice for these services from now on.\n\nA huge thank you to the entire team for such an outstanding job!",
    url: googleReviewsUrl,
  },
  {
    name: "Eddie Alavi",
    rating: 5,
    service: "Water Tank Cleaning",
    quote:
      "Truly amazing service!\n\nI recently had my villa water tank cleaned by this company, and I was extremely impressed with their service from start to finish.\n\nThe team arrived promptly and were extremely professional, courteous, and knowledgeable. They explained every step of the process, including exactly what they were doing and which chemicals they were using. They were also happy to show me everything throughout the cleaning process, which gave me complete confidence in their work.\n\nI have used several different companies over the past few years for water tank cleaning, but I can honestly say these guys were by far the most professional and thorough.\n\nI would highly recommend this company to anyone in the UAE looking for a reliable, professional, and trustworthy water tank cleaning service.\n\nExcellent service from start to finish!",
    url: googleReviewsUrl,
  },
  {
    name: "Rimaz Rauf",
    rating: 5,
    service: "AC Duct Cleaning & Sanitisation",
    quote:
      "I had a great experience with this cleaning company in Ajman. From the start, the booking process was super easy. Customer service was responsive, clear about what work would be done, and the pricing was very reasonable. They stayed in touch before and during the job to make sure everything was going smoothly.\n\nThe team arrived exactly on time, very polite and professional. They were careful with every step, covered the sofa, table, and surrounding areas, cleaned the AC ducts, filters, and fully sanitized everything. What really stood out was the attention to detail. After finishing, they even cleaned and mopped the floor. They spent proper time to make sure the job was done perfectly. I am very happy with the service and will definitely recommend them. I will continue using their services in the future.",
    url: googleReviewsUrl,
  },
  {
    name: "Sezer",
    rating: 5,
    service: "Water Tank Cleaning",
    quote:
      "Endeavor Cleaning Service did a brilliant job cleaning our water tanks, both underground and on the roof for the hot water tank. They also did pipe flushing. I selected them because they are a Dubai Municipality-approved company and they used high-quality materials. The team followed all necessary precautions and wore proper equipment for water tank cleaning. Very happy with the service!",
    url: googleReviewsUrl,
  },
  {
    name: "Samer ElNajjar",
    rating: 5,
    service: "Water Tank Cleaning",
    quote:
      "I tried Endeavor for water tank cleaning service.\nThe service was done perfectly with a very professional team,\nI'm happy that all went smooth and seamless and looking to continue dealing with the company.\n\nKeep it up!",
    url: googleReviewsUrl,
  },
  {
    name: "JB",
    rating: 5,
    service: "Water Tank Cleaning",
    quote:
      "Very professional company. We had a tank cleaned that turned out to be disconnected and they did everything possible to solve the problem and find the route of the water. Very friendly clean team and Charmaine on WhatsApp was very patient and happy to help and keep me updated... (especially i ask a lot of questions). I thank them for their time and service and really recommend them to others.\nFound the company through google reviews, so thought it was worth adding to this with my experience.",
    url: googleReviewsUrl,
  },
  {
    name: "jonas ivan huelva",
    rating: 5,
    service: "Deep Cleaning & Disinfection",
    quote:
      "Endeavor is our partner on deep cleaning and disinfection and I highly recommended this Company for which they composed of highly skilled staff from sales team, operation team and back office . They can easily be contacted during and after service. Lastly they are flexible that suites to the availability of their customer and on-time completion to the task given with detailed after work report.\n\nI am looking forward for this partnership.",
    url: googleReviewsUrl,
  },
  {
    name: "Rene Mar Hisona",
    rating: 5,
    quote:
      "Endeavor cleaning company is a reliable service provider with the highest standard of professionalism from negotiation until the final operation is done with very efficient crew & best quality.",
    url: googleReviewsUrl,
  },
  {
    name: "Anagwu Emmy",
    rating: 5,
    quote:
      "It was a great experience. They workers was calm and took out their time in making sure the gave me the best service. They were lovely and professional at their service (because customer's satisfaction was their main priority) especially the African workers among them. Kudos",
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
