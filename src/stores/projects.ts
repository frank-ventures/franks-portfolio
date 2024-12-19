import CSSIcon from "@/components/icons/techIcons/CSSIcon";
import HTMLIcon from "@/components/icons/techIcons/HTMLIcon";
import JavaScriptIcon from "@/components/icons/techIcons/JavaScriptIcon";
import NextJsIcon from "@/components/icons/techIcons/NextJsIcon";
import ReactIcon from "@/components/icons/techIcons/ReactIcon";
import TailwindIcon from "@/components/icons/techIcons/TailwindIcon";
import TypeScriptIcon from "@/components/icons/techIcons/TypeScriptIcon";
import { ReactNode } from "react";

// Types
type Status = {
  id: number;
  title: string;
  colour: string;
};
type TechStacks = {
  id: number;
  title: string;
  colour: string;
  icon: (width?: number, height?: number) => ReactNode;
};
type Project = {
  title: string;
  image: string;
  status: number;
  techStack: number[];
  description: string;
  githubRepo: string;
  liveLink: string;
};

// Function exports
export const getStatuses = (): Status[] => statuses;
export const getTechStacks = (): TechStacks[] => techStacks;
export const getProjects = (): Project[] => projects;

// Data arrays
const statuses: Status[] = [
  {
    id: 1,
    title: "Complete",
    colour: "green",
  },
  {
    id: 2,
    title: "In progress",
    colour: "blue",
  },
  {
    id: 3,
    title: "Archived",
    colour: "gray",
  },
];

const techStacks: TechStacks[] = [
  {
    id: 1,
    title: "JavaScript",
    colour: "yellow",
    icon: (width, height) => JavaScriptIcon(width, height),
  },
  {
    id: 2,
    title: "CSS",
    colour: "purple",
    icon: (width, height) => CSSIcon(width, height),
  },
  {
    id: 3,
    title: "HTML",
    colour: "orange",
    icon: (width, height) => HTMLIcon(width, height),
  },
  {
    id: 4,
    title: "React",
    colour: "blue",
    icon: (width, height) => ReactIcon(width, height),
  },
  {
    id: 5,
    title: "NextJS",
    colour: "black",
    icon: (width, height) => NextJsIcon(width, height),
  },
  {
    id: 6,
    title: "TypeScript",
    colour: "darkblue",
    icon: (width, height) => TypeScriptIcon(width, height),
  },
  {
    id: 7,
    title: "Tailwind",
    colour: "teal",
    icon: (width, height) => TailwindIcon(width, height),
  },
];

const projects: Project[] = [
  {
    title: "Monthly Finances Calculator",
    image: "sumPath",
    status: 1,
    techStack: [4, 7, 6],
    description: "rly gud",
    githubRepo: "sum link",
    liveLink: "so gud",
  },
  {
    title: "DarkTiculate",
    image: "sumPath",
    status: 2,
    techStack: [5, 7],
    description: "rly gud",
    githubRepo: "sum link",
    liveLink: "so gud",
  },
  {
    title: "Gamelog",
    image: "sumPath",
    status: 2,
    techStack: [5, 7],
    description: "rly gud",
    githubRepo: "sum link",
    liveLink: "so gud",
  },
  {
    title: "'Ainsley Harriot'-themed Clicker Game",
    image: "sumPath",
    status: 1,
    techStack: [4, 2],
    description: "rly gud",
    githubRepo: "sum link",
    liveLink: "so gud",
  },
  {
    title: "Unsplash Gallery Search App",
    image: "sumPath",
    status: 1,
    techStack: [1, 2, 3],
    description: "rly gud",
    githubRepo: "sum link",
    liveLink: "so gud",
  },
];
