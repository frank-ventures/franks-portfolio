import ProjectsList from "@/components/projects/ProjectList";

const pageAnchors = [
  {
    href: "projects-list",
    text: "Projects",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Intro Bar */}
      <div className=" bg-red-600 border-2 border-black p-10 w-full">
        <h1 className="text-5xl text-center text-yellow-300 text-shadow-withOutlineLg shadow-black ">
          Hello! I&apos;m Frankie
        </h1>
      </div>

      {/* Quick Links */}
      {pageAnchors.map((link, index) => {
        return (
          <a key={`anchor_${index}`} href={`#${link.href}`}>
            {link.text}
          </a>
        );
      })}

      {/* About Me */}

      {/* Work related */}

      <ProjectsList />
    </main>
  );
}
