import IntroBar from "@/components/header/IntroBar";
import ProjectsList from "@/components/projects/ProjectList";

const pageAnchors = [
  {
    href: "projects-list",
    text: "Projects",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-slate-200">
      <IntroBar text={"Hello! I'm Frankie"} />

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
