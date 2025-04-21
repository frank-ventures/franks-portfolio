import { getTestimonials } from "@/stores/testimonials";
import Link from "next/link";

export default function Testimonials() {
  const testimonials = getTestimonials();

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
              {/* 'Role' chip at the top */}
              <div className="absolute w-[96%] -top-6 left-2 border-2 border-blue-600 shadow shadow-black py-2 px-4 rounded-lg bg-blue-800 text-white">
                <p className="text-sm text-pretty">
                  <span className="font-bold mr-2">My Role: </span>
                  {testimonial.capacity}
                </p>
              </div>

              {/* Review text */}
              <p className="review mt-2 italic text-lg text-pretty">
                <span className="text-2xl font-bold mr-1">&ldquo;</span>
                {testimonial.review}
                <span className="text-2xl font-bold ml-1">&rdquo;</span>
              </p>

              {/* Reviewer chip at the bottom */}
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
