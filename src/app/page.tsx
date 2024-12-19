import Status from "@/components/projects/Status";
import TechStack from "@/components/projects/TechStack";
import { getProjects } from "@/stores/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <>
      <h1>Hello welcome</h1>
      {projects.map((project, index) => {
        return (
          <div key={`project_${index}`} className="p-4">
            <p>{project.title}</p>
            <Status status={project.status} />
            <TechStack techStack={project.techStack} />
          </div>
        );
      })}
    </>
  );
}
