import Link from "next/link";
export default function Testimonials() {
  // this thing wants to display reviews of me!
  // theyll be in individual blocks, maybe they scroll automatically
  //

  const testimonials = [
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
  return (
    <section className="testimonials flex flex-col p-4 pb-8 w-full h-[90dvh] gap-4 items-center bg-red-800 text-white text-lg border-t-4 border-b-4 border-black">
      <h2 className="text-2xl font-bold">What others say</h2>
      <section className="flex gap-8 p-1 w-full h-full overflow-x-scroll">
        {testimonials.map((testimonial, index) => {
          return (
            <article
              className="flex flex-col flex-shrink-0 mt-6 min-h-fit w-[80dvw] max-w-[35ch] justify-center h-5/6  gap-1 p-4 rounded-md shadow-md shadow-black text-black bg-blue-200 border-black border-2 relative first:ml-auto last:mr-auto"
              key={index}
            >
              <div className="absolute w-[96%] -top-6 left-2 border-2 border-blue-600 shadow shadow-black py-2 px-4 rounded-lg bg-blue-800 text-white">
                <p className="text-sm text-pretty">
                  <span className="font-bold mr-2">Role: </span>
                  {testimonial.capacity}
                </p>
              </div>

              <p className="review mt-2 italic text-lg text-pretty">
                <span className="text-2xl font-bold mr-1">&ldquo;</span>
                {testimonial.review}
                <span className="text-2xl font-bold ml-1">&rdquo;</span>
              </p>

              <div className="absolute -bottom-14 -right-4 border-2 border-blue-400 shadow shadow-black py-2 px-4 rounded-lg bg-blue-100">
                <Link
                  className="external-inline-link inline-block"
                  href={testimonial.link}
                  target="blank"
                >
                  <p>{testimonial.person}</p>
                </Link>
                <p className="italic text-sm">{testimonial.company}</p>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
}
