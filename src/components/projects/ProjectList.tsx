"use client";
import { getProjects, getTechStacks } from "@/stores/projects";
import Status from "@/components/projects/Status";
import TechStack from "@/components/projects/TechStack";
import Link from "next/link";
import GithubIcon from "../icons/techIcons/GithubIcon";
import PlayIcon from "../icons/techIcons/PlayIcon";
import ProjectImage from "./ProjectImage";
import ProjectTitle from "./ProjectTitle";
import { useEffect, useState } from "react";

export default function ProjectsList() {
  const projects = getProjects();
  const techStacks = getTechStacks();
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selected, setSelected] = useState(0);

  function displayProjects(techStackAsString: string) {
    const techStackNumber = parseInt(techStackAsString);
    if (techStackNumber == 0) {
      console.log("yes");
      setFilteredProjects(projects);
      return;
    }
    const newFilteredProjects = projects.filter((project) => {
      let match = false;
      project.techStack.forEach((stack) => {
        if (stack == techStackNumber) {
          match = true;
        }
      });
      if (match) {
        return project;
      }
    });
    setFilteredProjects(newFilteredProjects);
  }

  useEffect(() => {
    setFilteredProjects(projects);
  }, [projects]);

  return (
    <article
      id="projects-list"
      className="flex flex-col items-center gap-2 border-t-2 border-b-2 border-black py-10 w-full"
    >
      <div className="bg-red-600 border-2 border-black p-2 w-10/12 max-w-[600px] rounded-2xl">
        <h2 className="text-3xl text-center text-yellow-300 text-shadow-withOutline shadow-black w-full">
          Check out my projects
        </h2>
      </div>

      <form className="flex gap-4 my-4 items-center">
        <label htmlFor="projectType" className="text-lg font-semibold">
          See Projects by Tech Stack:
        </label>
        <select
          className="p-2 rounded-md shadow-md bg-blue-400 border-b-blue-600 border-b-2 text-white font-semibold"
          name="projectType"
          id="projectType"
          onChange={(e) => {
            setSelected(parseInt(e.currentTarget.value));
            displayProjects(e.currentTarget.value);
          }}
          value={selected}
        >
          <option value="0">All</option>
          {techStacks.map((stack, index) => {
            return (
              <option key={index} value={stack.id}>
                {stack.title}
              </option>
            );
          })}
        </select>
      </form>

      {/* Project List */}
      <section className={`flex max-w-full flex-wrap justify-center `}>
        {filteredProjects.map((project, index) => {
          return (
            <article
              key={`project_${index}`}
              className="flex flex-col gap-2 justify-between p-4 m-2 border-2 border-blue-600 rounded-md bg-blue-400  max-w-[500px]"
            >
              {/* Status and Title */}
              <div className="flex justify-between gap-5 last:m-10 min-h-20">
                {/* TODO: Give this heading some kind of fancyness */}
                <ProjectTitle title={project.title} />
                <Status status={project.status} />
              </div>

              {/* Image */}
              <ProjectImage src={project.image} alt={project.alt} />

              {/* Description */}
              <div className="m-6 sm:min-h-[9rem] p-2 bg-blue-300 bg-opacity-40 rounded-xl shadow-inner shadow-slate-400 text-lg">
                <p>{project.description}</p>
              </div>

              {/* Links */}
              <div className="flex justify-center gap-10 mb-2">
                {project.githubRepo && (
                  <Link
                    href={project.githubRepo}
                    target="blank"
                    className="flex flex-col gap-2 items-center bg-red-600 border-l-2 border-r-2 border-b-2 border-black border-opacity-50 p-4 rounded-xl hover:shadow-md hover:shadow-black hover:transform hover:scale-110 transition duration-200"
                  >
                    <p className="font-semibold tracking-wide text-yellow-300">
                      View code
                    </p>

                    <i className="bg-blue-400 rounded-3xl border shadow shadow-black border-black  max-w-fit">
                      {GithubIcon(75, 75)}
                    </i>
                  </Link>
                )}
                {project.liveLink && (
                  <Link
                    href={project.liveLink}
                    target="blank"
                    className="flex flex-col gap-2 items-center bg-red-600 border-l-2 border-r-2 border-b-2 border-black border-opacity-50 p-4 rounded-xl hover:shadow-md hover:shadow-black hover:transform hover:scale-110 transition duration-200"
                  >
                    <p className="font-semibold tracking-wide text-yellow-300">
                      Live site
                    </p>

                    <i className="bg-blue-400 rounded-3xl border shadow shadow-black border-black  max-w-fit">
                      {PlayIcon(75, 75)}{" "}
                    </i>
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
