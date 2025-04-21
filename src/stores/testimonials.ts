// Types
type Testimonial = {
  person: string;
  company: string;
  review: string;

  capacity: string;
  link: string;
};

// Function exports
export const getTestimonials = (): Testimonial[] => testimonials;

// Data arrays
const testimonials: Testimonial[] = [
  {
    person: "Tim Smith",
    company: "Tech Educators",
    review:
      "You have done excellent work since starting here. You have quickly become indispensable. You're a great influence on the morale and spirit of the team, and it is so welcome! You've been incredibly easy to line-manage, from both the perspective of knowing what needs to be done with asking (and doing it) and easy to talk to.",
    capacity: "Instructor - Tech Educators",
    link: "https://wollivan.dev/",
  },
  {
    person: "Andy Hodkin",
    company: "Disability Awareness",
    review:
      "With his expert advice, guidance and then implementation, Frankie demonstrated his visual design and communication skills in drawing out my internal vision into a completed document of excellent quality and realisation.",
    capacity: "Designer & Editor - Freelance",
    link: "https://www.linkedin.com/in/andy-hodkin-80846125a/",
  },
  {
    person: "Taoufik Beldi",
    company: "Leicester Council",
    review:
      "Excellent subject knowledge and extremely engaging delivery style by Frankie. Learners are engaged throughout the (online) session. I thoroughly enjoyed the session and it’s one of the best Bootcamp sessions I’ve seen so far!",
    capacity: "Instructor - Tech Educators",
    link: "https://www.leicester.gov.uk/your-council/policies-plans-and-strategies/planning-and-development/uk-shared-prosperity-fund-ukspf/open-call-2-people-and-community/leicester-adult-education/",
  },
  {
    person: "Bluecoat SCITT",
    company: "Bluecoat SCITT Alliance",
    review:
      "Thanks to Frankie for delivering the session to our teachers. The Outdoor Learning session he delivered really supported the traines with the knowledge and confidence they needed and also a shift in their mindset. It was exactly what they needed.",
    capacity: "Adventure Instructor - Nottingham City Council",
    link: "https://www.bluecoatscittalliance.uk.com/",
  },
  {
    person: "Various Gardening Clients",
    company: "Derby",
    review:
      "Punctual, polite, meticulous and good communication. No hesitation in recommending. Your ideas kept us sane! The man is a star!",
    capacity: "Landscaping & Gardening - Freelance",
    link: "https://www.facebook.com/MadeByFrankShrieves",
  },
];
