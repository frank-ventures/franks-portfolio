// In this component, we import ReactNode so that we can type our 'text' prop as that.
// This lets us pass in simple strings, or, a more defined element so that we can set anchor links in the middle.
import { ReactNode } from "react";

function MeSection({
  imageSrc,
  imageAlt,
  text,
}: {
  imageSrc: string;
  imageAlt: string;
  text: ReactNode;
}) {
  return (
    <section className="flex flex-col sm:flex-row gap-4 items-center w-[80%] sm:even:flex-row-reverse">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="object-cover h-[20rem] w-full max-w-[20rem] object-[0_10%] rounded-xl"
      />
      <p>{text}</p>
    </section>
  );
}

export default function AboutMe() {
  return (
    <article
      id="about-me"
      className="py-20 px-4 flex flex-col items-center gap-16 w-full"
    >
      <MeSection
        imageSrc="./frankie/frankie-manchester.jpg"
        imageAlt="Greyscale image of Frankie smiling in Manchester"
        text="As you'll have guessed by now, I am Frankie!"
      />

      <MeSection
        imageSrc="./work/tech-ed-logo.png"
        imageAlt="The purple, sand and green logo of the company Tech Educators"
        text={
          <>
            Currently I work at{" "}
            <a
              className="text-orange-600 hover:underline"
              href="https://techeducators.co.uk/"
            >
              Tech Educators
            </a>
            ; a pretty cool company that delivers bootcamps with the aim of
            developing peoples skills & confidence in the tech. It&apos;s a good
            fun time!
          </>
        }
      />

      <MeSection
        imageSrc="./work/ncc-adventure.jpg"
        imageAlt="Frankie smiling in front of a building called 'Colwick Park Adventure Centre' with his team mates"
        text="Before this I did a bunch of other stuff, from gardening, to outdoor
        adventure instructing, to working in America."
      />
      {/* TODO: an about page, then uncomment this and link to it */}
      {/* <MeSection
        imageSrc="./frankie/frankie-manchester.jpg"
        imageAlt="Greyscale image of Frankie smiling in Manchester"
        text={
          <>
            But you can read more about all that{" "}
            <a className="text-orange-600 hover:underline" href="#">
              here
            </a>{" "}
            <span className="italic">
              (and more, like how I think bicycles are utterly and magically
              awesome)
            </span>
          </>
        }
      /> */}
    </article>
  );
}
