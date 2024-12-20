import { getProjects } from "@/stores/projects";
import Status from "@/components/projects/Status";
import TechStack from "@/components/projects/TechStack";
import Link from "next/link";
import { dashify } from "@/helpers/dashify";

export default function ProjectsList() {
  const projects = getProjects();

  return (
    <section className="flex flex-col gap-2 border border-black ">
      <h2 id="#hellohere" className="text-4xl text-center">
        My Projects yay
      </h2>
      {projects.map((project, index) => {
        return (
          <article
            key={`project_${index}`}
            className="flex flex-col gap-2 p-4 m-2 border bg-orange-200"
          >
            {/* Status and Title */}
            <div className="flex justify-between gap-1 last:m-10 ">
              <Status status={project.status} />

              <h3
                id={`${dashify(project.title)}`}
                className="text-3xl text-right"
              >
                <a href={`#${dashify(project.title)}`}>{project.title}</a>
              </h3>
            </div>

            {/* Description */}
            <div className="my-4">
              <p>{project.description}</p>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-8">
              <Link href={project.githubRepo}>Repo</Link>
              <Link href={project.liveLink}>Site</Link>
            </div>

            <TechStack techStack={project.techStack} />
          </article>
        );
      })}
    </section>
  );
}
