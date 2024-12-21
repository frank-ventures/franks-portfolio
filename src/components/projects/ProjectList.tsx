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
    <section className="flex flex-col items-center gap-2 border border-black ">
      <div className="mt-4 bg-red-600 border-2 border-black p-2 w-10/12 max-w-[600px] rounded-2xl">
        <h2 className="text-3xl text-center text-yellow-300 text-shadow-withOutline shadow-black ">
          Check out my projects
        </h2>
      </div>

      {/* TODO: Fix issue where cards are different widths. It's probs to do with images */}
      <div className="flex max-w-full flex-wrap justify-center">
        {projects.map((project, index) => {
          return (
            <article
              key={`project_${index}`}
              className="flex flex-col gap-2 justify-between p-4 m-2 border-2 border-black rounded-md bg-purple-200 bg-opacity-50 w-[500px] max-w-[500px]"
            >
              {/* Status and Title */}
              <div className="flex justify-between gap-5 last:m-10 min-h-20">
                <Status status={project.status} />

                {/* TODO: Give this heading some kind of fancyness */}
                <h2
                  id={`${dashify(project.title)}`}
                  className="text-3xl text-right text-black shadow-black "
                >
                  <a href={`#${dashify(project.title)}`}>{project.title}</a>
                </h2>
              </div>

              {/* Image */}
              <ProjectImage src={project.image} alt={project.alt} />

              {/* Description */}
              <div className="m-6 h-[8rem]">
                <p>{project.description}</p>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-10 mb-2">
                <Link
                  className="bg-blue-400 rounded-3xl bg-opacity-75 border-b-2 shadow border-blue-800 hover:shadow-lg hover:transform hover:scale-110 transition duration-200 "
                  href={project.githubRepo}
                >
                  {GithubIcon(75, 75)}{" "}
                </Link>
                <Link
                  className="bg-blue-400 rounded-3xl bg-opacity-75 border-b-2 shadow border-blue-800 hover:shadow-lg hover:transform hover:scale-110 transition duration-200 hover:animate-pulse"
                  href={project.liveLink}
                >
                  {PlayIcon(75, 75)}
                </Link>
              </div>

              <TechStack techStack={project.techStack} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
