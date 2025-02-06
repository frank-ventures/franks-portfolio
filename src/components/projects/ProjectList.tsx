import { getProjects } from "@/stores/projects";
import Status from "@/components/projects/Status";
import TechStack from "@/components/projects/TechStack";
import Link from "next/link";
import { dashify } from "@/helpers/dashify";
import GithubIcon from "../icons/techIcons/GithubIcon";
import PlayIcon from "../icons/techIcons/PlayIcon";
import ProjectImage from "./ProjectImage";

export default function ProjectsList() {
  const projects = getProjects();

  return (
    <article
      id="projects-list"
      className="flex flex-col items-center gap-2 border-t-2 border-b-2 border-black py-20"
    >
      <div className="mt-4 bg-red-600 border-2 border-black p-2 w-10/12 max-w-[600px] rounded-2xl">
        <h2 className="text-3xl text-center text-yellow-300 text-shadow-withOutline shadow-black ">
          Check out my projects
        </h2>
      </div>

      {/* Project List */}
      <section className="flex max-w-full flex-wrap justify-center">
        {projects.map((project, index) => {
          return (
            <article
              key={`project_${index}`}
              className="flex flex-col gap-2 justify-between p-4 m-2 border-2 border-black rounded-md bg-blue-400  max-w-[500px]"
            >
              {/* Status and Title */}
              <div className="flex justify-between gap-5 last:m-10 min-h-20">
                <Status status={project.status} />

                {/* TODO: Give this heading some kind of fancyness */}
                <h2
                  id={`${dashify(project.title)}`}
                  className="text-3xl text-right"
                >
                  <a href={`#${dashify(project.title)}`}>{project.title}</a>
                </h2>
              </div>

              {/* Image */}
              <ProjectImage src={project.image} alt={project.alt} />

              {/* Description */}
              <div className="m-6 sm:h-[9rem] p-2 bg-blue-300 bg-opacity-40 rounded-xl shadow-inner shadow-slate-400">
                <p>{project.description}</p>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-10 mb-2">
                {project.githubRepo && (
                  <Link
                    className="bg-red-400 rounded-3xl border-b-2 shadow border-red-800 hover:shadow-md hover:shadow-black hover:transform hover:scale-110 transition duration-200 "
                    href={project.githubRepo}
                    target="blank"
                  >
                    {GithubIcon(75, 75)}
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    className="bg-red-400 rounded-3xl border-b-2 shadow border-red-800 hover:shadow-md hover:shadow-black hover:transform hover:scale-110 transition duration-200"
                    href={project.liveLink}
                    target="blank"
                  >
                    {PlayIcon(75, 75)}
                  </Link>
                )}
              </div>

              {/* Icons for tech used */}
              <TechStack techStack={project.techStack} />
            </article>
          );
        })}
      </section>
    </article>
  );
}
