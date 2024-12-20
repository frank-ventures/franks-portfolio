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
  {
    id: 8,
    title: "Supabase",
    colour: "green",
    icon: (width, height) => TailwindIcon(width, height),
  },
  {
    id: 9,
    title: "Express",
    colour: "gold",
    icon: (width, height) => TailwindIcon(width, height),
  },
  {
    id: 10,
    title: "API",
    colour: "something",
    icon: (width, height) => TailwindIcon(width, height),
  },
  {
    id: 11,
    title: "Clerk",
    colour: "something",
    icon: (width, height) => TailwindIcon(width, height),
  },
];

const projects: Project[] = [
  {
    title: "Monthly Finances Calculator",
    image: "sumPath",
    status: 1,
    techStack: [4, 7],
    description:
      "I wanted to see how much of my income was leftover to put into savings pots, after taxes and expenses. I turned a spreadsheet (YAWN) into this app.",
    githubRepo: "https://github.com/frank-ventures/monthly-finances-visualiser",
    liveLink: "https://monthly-financer.onrender.com/",
  },
  {
    title: "DarkTiculate",
    image: "sumPath",
    status: 2,
    techStack: [5, 7, 8],
    description:
      "A clone of the board game 'Articulate', but with a mature twist. Be warned, depending on how dark YOU are, the prompts range from 'That`s uncomfortable' to 'Downright nasty'!",
    githubRepo: "",
    liveLink: "https://darkticulate.vercel.app/",
  },
  {
    title: "Stoic Quoter",
    image: "sumPath",
    status: 1,
    techStack: [5, 7, 10],
    description: "A simple, minimal app which lets you see a Stoic quote.",
    githubRepo: "https://github.com/frank-ventures/stoic-quoter",
    liveLink: "https://stoic-quoter.vercel.app/",
  },
  {
    title: "Gamelog",
    image: "sumPath",
    status: 2,
    techStack: [5, 7, 10, 11],
    description:
      "Inspired by the likes of Backloggd and other 'game tracker' apps, I put together this app which lets you make an account, query the IGDB, and add diary logs to your favourited games. I wanted to keep my new skills sharp after the bootcamp, so started this.",
    githubRepo: "https://github.com/frank-ventures/GameLog",
    liveLink: "https://github.com/frank-ventures/GameLog",
  },
  {
    title: "'Ainsley Harriot'-themed Clicker Game",
    image: "sumPath",
    status: 1,
    techStack: [4, 2],
    description:
      "'Ready, Steady, Click!' - The project halfway through the bootcamp was to create a 'cookie clicker' style app, in React. Knowing that Tech Educators have a soft spot for ol' Ainsley, I themed mine with sound effect and image assets.",
    githubRepo: "https://github.com/frank-ventures/teched-week06-project",
    liveLink: "https://ainsley-clicksiott-ready-steady-click.vercel.app/",
  },
  {
    title: "Unsplash Gallery Search App",
    image: "sumPath",
    status: 1,
    techStack: [1, 2, 3, 10],
    description:
      "On the bootcamp, we were tasked with creating an image gallery viewer, pulling together our newly practiced HTML, CSS and JavaScript skills. I took it a step further by integrating the Unsplash API, plus features like search, a quality toggle and pagination!",
    githubRepo: "https://github.com/frank-ventures/teched-week03-project",
    liveLink: "https://frank-ventures.github.io/teched-week03-project/",
  },
];
