import ContentImage from "@/components/page-content/ContentImage";
import ContentWrapper from "@/components/page-content/ContentWrapper";
import HeroIntro from "@/components/header/HeroIntro";
import ProjectsList from "@/components/projects/ProjectList";
import NavLinks from "@/components/header/NavLinks";

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

// TODO: Make the "Who am I?" clickable so that it plays an audio of Jackie Chan - "who am iiiiiiiii"
export default async function Home() {
  return (
    <main className="flex flex-col w-full items-center bg-slate-200">
      <HeroIntro
        text={
          <>
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
          </>
        }
        audio={"./audio/who-am-i.mp3"}
      />

      {/* Quick Links */}
      <NavLinks pageAnchors={pageAnchors} />

      {/* About Me */}
      <ContentWrapper id="about-me">
        <ContentImage
          imgSrc="./frankie/frankie-manchester.webp"
          imgAlt="Greyscale image of Frankie smiling in Manchester"
          secondImgSrc="./frankie/frankie-sheffield.webp"
          secondImgAlt="Frankie smiling on top of a wall when doing Parkour in Sheffield."
        />

        <p className="max-w-[74ch]">
          As you&apos;ll have guessed by now, I am Frankie!
        </p>
      </ContentWrapper>

      <ContentWrapper>
        <ContentImage
          imgSrc="./work/tech-ed-logo.webp"
          imgAlt="The purple, sand and green logo of the company Tech Educators"
          secondImgSrc="./frankie/frankie-nordevcon-point.webp"
          secondImgAlt="Frankie pointing to the camera at Norfolk Developers Conference 2025"
        />

        <p className="max-w-[74ch]">
          Currently I work as an{" "}
          <span className="text-purple-800 hover:text-green-400 p-1 font-bold bg-green-400 hover:bg-purple-800 rounded-md transition-all">
            Instructor
          </span>{" "}
          at{" "}
          <a
            className="external-inline-link"
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
          imgSrc="./work/ncc-adventure-2.webp"
          imgAlt="Frankie smiling in front of a building called 'Colwick Park Adventure Centre' with his team mates"
          secondImgSrc="./frankie/frankie-thailand-cycling-crew.webp"
          secondImgAlt="Frankie in Thailand with a group of local cyclists."
        />

        <p className="max-w-[74ch]">
          Before this I did a bunch of other stuff, from gardening, to outdoor
          adventure instructing, to working in America, and plenty of travel in
          between.
        </p>
      </ContentWrapper>

      <ContentWrapper>
        <ContentImage
          imgSrc="frankie/frankie-adam-laughing.webp"
          imgAlt="Frankie and his friend Adam having a big laugh out in Nottingham."
          secondImgSrc="frankie/frankie-and-doggo.webp"
          secondImgAlt="Frankie stroking a curly-haired dog in a garden."
        />
        <p className="max-w-[74ch]">
          You can read more about all that &quot;lifestory&quot; stuff{" "}
          <a className="external-inline-link" href="/about">
            here
          </a>{" "}
          .
        </p>
      </ContentWrapper>

      {/* My Projects */}
      <ProjectsList />
    </main>
  );
}
