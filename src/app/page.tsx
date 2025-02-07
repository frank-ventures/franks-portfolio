import ContentDisplay from "@/components/ContentDisplay";
import IntroBar from "@/components/header/IntroBar";
import ProjectsList from "@/components/projects/ProjectList";
import QuickLinks from "@/components/QuickLinks";

const pageAnchors = [
  {
    href: "#about-me",
    text: "Me!",
  },
  {
    href: "#projects-list",
    text: "Projects",
  },
];

const homePageContent = [
  {
    imageSrc: "./frankie/frankie-manchester.jpg",
    imageAlt: "Greyscale image of Frankie smiling in Manchester",
    text: "As you'll have guessed by now, I am Frankie!",
  },
  {
    imageSrc: "./work/tech-ed-logo.png",
    imageAlt: "The purple, sand and green logo of the company Tech Educators",
    text: (
      <p>
        Currently I work as an{" "}
        <span className="text-purple-800 hover:text-green-400 p-1 font-bold bg-green-400 hover:bg-purple-800 rounded-md transition-all">
          Instructor
        </span>{" "}
        at{" "}
        <a
          className="text-orange-600 hover:underline"
          href="https://techeducators.co.uk/"
        >
          Tech Educators
        </a>
        ; a pretty cool company that delivers bootcamps, with the aim of
        developing peoples&apos; skills & confidence in the tech. It&apos;s a
        good fun time!
      </p>
    ),
  },
  {
    imageSrc: "./work/ncc-adventure-2.jpg",
    imageAlt:
      "Frankie smiling in front of a building called 'Colwick Park Adventure Centre' with his team mates",
    text: "Before this I did a bunch of other stuff, from gardening, to outdoor adventure instructing, to working in America.",
  },
];
{
  /* TODO: an about page, then uncomment this and link to it */
}
{
  /* <MeSection
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
      /> */
}

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center bg-slate-200">
      <IntroBar
        text={
          <>
            <p className="flex flex-col items-center">
              Who am I? I&apos;m{" "}
              <span className="font-amazing tracking-widest">
                <svg width="200" height="100">
                  <path id="curve" d="M 15,65 Q 100,130 190,50" fill="none" />
                  <text>
                    <textPath fill="yellow" href="#curve">
                      FRANKIE{" "}
                    </textPath>
                  </text>
                </svg>
              </span>
            </p>
          </>
        }
      />

      {/* Quick Links */}
      <QuickLinks pageAnchors={pageAnchors} />

      {/* About Me */}

      <ContentDisplay content={homePageContent} id="about-me" />

      {/* Work related */}

      <ProjectsList />
    </main>
  );
}
