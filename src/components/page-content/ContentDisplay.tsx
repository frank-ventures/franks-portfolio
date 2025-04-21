// In this component, we import ReactNode so that we can type our 'text' prop as that.
// This lets us pass in simple strings, or, a more defined element so that we can set anchor links in the middle for example.
// TODO: Should probably change this component to be a wrapper instead.
import { ReactNode } from "react";

interface Content {
  imageSrc?: string;
  imageAlt?: string;
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
    <article id={id} className="py-10 flex flex-col items-center  w-screen">
      {content.map((thisSection, index) => {
        return (
          <section
            key={`thisSection_${index}`}
            className="flex flex-col p-4 w-full sm:flex-row gap-4 items-center  sm:even:flex-row-reverse odd:bg-slate-300"
          >
            {/* Images are optional for these sections */}
            {thisSection.imageSrc && (
              <img
                src={thisSection.imageSrc}
                alt={thisSection.imageAlt}
                className="object-cover h-[20rem] w-full max-w-[20rem] object-[30%_10%] rounded-xl"
              />
            )}

            {/* Text content can be a plain string or can be a chunk of HTML. */}
            {/* If its not a string, then it'll render what's passed in. */}
            {typeof thisSection.text == "object" ? (
              thisSection.text
            ) : (
              <p className="max-w-[74ch]">{thisSection.text}</p>
            )}
          </section>
        );
      })}
    </article>
  );
}
