import ContentImage from "@/components/ContentImage";
import ContentWrapper from "@/components/ContentWrapper";
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

      {/* <ContentDisplay content={homePageContent} /> */}

      <ContentWrapper id="about-me">
        <ContentImage
          imgSrc="./frankie/frankie-manchester.jpg"
          imgAlt="Greyscale image of Frankie smiling in Manchester"
        />

        <p className="max-w-[74ch]">
          As you&apos;ll have guessed by now, I am Frankie!
        </p>
      </ContentWrapper>

      <ContentWrapper>
        <ContentImage
          imgSrc="./work/tech-ed-logo.png"
          imgAlt="The purple, sand and green logo of the company Tech Educators"
        />

        <p className="max-w-[74ch]">
          Currently I work as an{" "}
          <span className="text-purple-800 hover:text-green-400 p-1 font-bold bg-green-400 hover:bg-purple-800 rounded-md transition-all">
            Instructor
          </span>{" "}
          at{" "}
          <a
            className="text-orange-600 underline underline-offset-2 hover:fancy hover:animate-pulse"
            href="https://techeducators.co.uk/"
          >
            Tech Educators
          </a>
          ; a pretty cool company that delivers bootcamps, with the aim of
          developing peoples&apos; skills & confidence in the tech. It&apos;s a
          good fun time!
        </p>
      </ContentWrapper>

      <ContentWrapper>
        <ContentImage
          imgSrc="./work/ncc-adventure-2.jpg"
          imgAlt="Frankie smiling in front of a building called 'Colwick Park Adventure Centre' with his team mates"
        />

        <p className="max-w-[74ch]">
          Before this I did a bunch of other stuff, from gardening, to outdoor
          adventure instructing, to working in America.
        </p>
      </ContentWrapper>

      {/* TODO: an about page, then uncomment this and link to it */}
      {/* <ContentWrapper>
        <ContentImage imgSrc="something" imgAlt="something" />
        <p className="max-w-[74ch]">
          But you can read more about all that{" "}
          <a className="text-orange-600 hover:underline" href="/about">
            here
          </a>{" "}
          <span className="italic">
            (and more, like how I think bicycles are utterly and magically
            awesome)
          </span>
        </p>
      </ContentWrapper> */}

      {/* My Projects */}

      <ProjectsList />
    </main>
  );
}
