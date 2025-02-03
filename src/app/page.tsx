import AboutMe from "@/components/AboutMe";
import IntroBar from "@/components/header/IntroBar";
import ProjectsList from "@/components/projects/ProjectList";

const pageAnchors = [
  {
    href: "about-me",
    text: "Me!",
  },
  {
    href: "projects-list",
    text: "Projects",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-slate-200">
      <IntroBar
        text={
          <>
            <p className="flex flex-col items-center">
              Hello! I&apos;m{" "}
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
      <nav className="border-t border-b border-black flex gap-4 w-full px-4 py-2 shadow shadow-black sticky top-8 bg-slate-200 bg-opacity-50 backdrop-blur">
        <p className="text-gray-600">Jump to: </p>
        {pageAnchors.map((link, index) => {
          return (
            <a
              className="relative before:content-[''] before:w-2 before:h-[2px] before:bg-gray-700 before:top-[24px]  before:absolute hover:before:w-full hover:before:bg-orange-600 hover:before:left-0 before:transition-all before:duration-500 "
              key={`anchor_${index}`}
              href={`#${link.href}`}
            >
              {link.text}
            </a>
          );
        })}
      </nav>

      {/* About Me */}

      <AboutMe />

      {/* Work related */}

      <ProjectsList />
    </main>
  );
}
