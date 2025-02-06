// In this component, we import ReactNode so that we can type our 'text' prop as that.
// This lets us pass in simple strings, or, a more defined element so that we can set anchor links in the middle for example.
import { ReactNode } from "react";

interface Content {
  imageSrc: string;
  imageAlt: string;
  text: ReactNode;
}

export default function ContentDisplay({
  content,
  id,
}: {
  content: Content[];
  id: string;
}) {
  return (
    <article
      id={id}
      className="py-20 px-4 flex flex-col items-center gap-16 w-full"
    >
      {content.map((thisSection, index) => {
        return (
          <section
            key={`thisSection_${index}`}
            className="flex flex-col sm:flex-row gap-4 items-center w-[80%] sm:even:flex-row-reverse"
          >
            <img
              src={thisSection.imageSrc}
              alt={thisSection.imageAlt}
              className="object-cover h-[20rem] w-full max-w-[20rem] object-[30%_10%] rounded-xl"
            />
            <p>{thisSection.text}</p>
          </section>
        );
      })}
    </article>
  );
}
