import { getProjects } from "@/stores/projects";
import Status from "@/components/projects/Status";
import TechStack from "@/components/projects/TechStack";

export default function ProjectsList() {
  const projects = getProjects();

  return (
    <section className="flex flex-col gap-2 border border-black ">
      <h2>My Projects yay</h2>
      {projects.map((project, index) => {
        return (
          <article
            key={`project_${index}`}
            className="flex flex-col gap-2 p-4 m-2 border bg-orange-200"
          >
            <div className="flex justify-between gap-1 last:m-10 ">
              <Status status={project.status} />

              <p className="text-2xl text-right">{project.title}</p>
            </div>

            <TechStack techStack={project.techStack} />
          </article>
        );
      })}
    </section>
  );
}
