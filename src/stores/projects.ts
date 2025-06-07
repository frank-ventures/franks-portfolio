import APIIcon from "@/components/icons/techIcons/APIIcon";
import ClerkIcon from "@/components/icons/techIcons/ClerkIcon";
import CSSIcon from "@/components/icons/techIcons/CSSIcon";
import HTMLIcon from "@/components/icons/techIcons/HTMLIcon";
import JavaScriptIcon from "@/components/icons/techIcons/JavaScriptIcon";
import NextJsIcon from "@/components/icons/techIcons/NextJsIcon";
import ReactIcon from "@/components/icons/techIcons/ReactIcon";
import SupabaseIcon from "@/components/icons/techIcons/SupabaseIcon";
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
  alt: string;
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
    icon: (width, height) => SupabaseIcon(width, height),
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
    colour: "lightpurple",
    icon: (width, height) => APIIcon(width, height),
  },
  {
    id: 11,
    title: "Clerk",
    colour: "black",
    icon: (width, height) => ClerkIcon(width, height),
  },
];

const projects: Project[] = [
  {
    title: "Colour Complimenter",
    image: "/projects/colourcomplimenter.webp",
    alt: "Screenshot of an app which lets a user find complimentary colours.",
    status: 1,
    techStack: [1, 2, 3, 10],
    description:
      "There's a very cool API simply called 'The Color API'. Despite its simple name, it's extensive and packed full of information. It's well worth a look. This app lets you find complimentary colours and copy them to your clipboard.",
    githubRepo: "https://github.com/frank-ventures/colour-api-tool",
    liveLink: "https://colours.frankieshrieves.co.uk/",
  },
  {
    title: "Concept: Coffee Shop Site",
    image: "/projects/forum.webp",
    alt: "Screenshot of a website promoting a coffee shop.",
    status: 2,
    techStack: [5, 6, 7],
    description:
      "There's a fantastic coffee shop near home which not only does awesome drinks, but also is wonderfully designed and marketed. It inspired me to create a concept of their website. Lots still to do!",
    githubRepo: "https://github.com/frank-ventures/forum-coffee",
    liveLink: "https://forum-speciality-coffee.vercel.app/",
  },
  {
    title: "Monthly Finances Calculator",
    image: "/projects/monthly-finances.webp",
    alt: "Screenshot of a Monthly Finances Calculator. Shows a box displaying a users income, and their caluclated take-home pay after taxes.",
    status: 1,
    techStack: [4, 7],
    description:
      "I wanted to see how much of my income was leftover to put into savings pots, after taxes and expenses. I turned a spreadsheet (YAWN) into this app. It's colourful, and does the maths for you!",
    githubRepo: "https://github.com/frank-ventures/monthly-finances-visualiser",
    liveLink: "http://finances.frankieshrieves.co.uk",
  },
  {
    title: "DarkTiculate",
    image: "/projects/darkticulate.webp",
    alt: "Screenshot of the game Darkticulate. The homepage shows buttons for 'new game', 'just see cards' and 'user guide'.",
    status: 2,
    techStack: [5, 7, 8],
    description:
      "A clone of the board game 'Articulate', but with a mature twist. Be warned, depending on how dark YOU are, the prompts range from 'That's uncomfortable' to 'Downright nasty'!",
    githubRepo: "",
    liveLink: "https://darkticulate.frankieshrieves.co.uk",
  },
  {
    title: "Stoic Quoter",
    image: "/projects/stoic-quoter.webp",
    alt: "Screenshot of an app which shows a stoic quote.",
    status: 1,
    techStack: [5, 7, 10],
    description: "A simple, minimal app which lets you see a Stoic quote.",
    githubRepo: "https://github.com/frank-ventures/stoic-quoter",
    liveLink: "https://stoic.frankieshrieves.co.uk",
  },
  {
    title: "Gamelog",
    image: "/projects/gamelog.webp",
    alt: "Screenshot of an app which lets you search for video games. A search box displays results from the term 'Mario'.",
    status: 2,
    techStack: [5, 7, 10, 11],
    description:
      "Inspired by the likes of Backloggd and other 'game tracker' apps, I put together this app which lets you make an account, query the IGDB, and add diary logs to your favourited games. I wanted to keep my new skills sharp after the bootcamp, so started this.",
    githubRepo: "https://github.com/frank-ventures/GameLog",
    liveLink: "https://gamelog.frankieshrieves.co.uk",
  },
  {
    title: "Quote Lasso",
    image: "/projects/quote-lasso.webp",
    alt: "Screenshot of an app which lets you search for quotes from the TV show 'Ted Lasso'.",
    status: 2,
    techStack: [5, 7, 10],
    description:
      "I had such a great time watching Ted Lasso that I started to build this, a quote site for the show. Currently, any ol' soul can add quotes qilly nilly, but sometime I'd like to bring in authentication, and a Lasso API where anyone can request quotes!",
    githubRepo: "https://github.com/frank-ventures/teched-week08-project",
    liveLink: "https://lasso.frankieshrieves.co.uk",
  },
  {
    title: "'Ainsley Harriot'-themed Clicker Game",
    image: "/projects/ainsley-clicker.webp",
    alt: "Screenshot of a game themed on the celebrity 'Ainsley Harriot'. The image shows a counter and his face in a cartoon style.",
    status: 1,
    techStack: [4, 2],
    description:
      "'Ready, Steady, Click!' - The project halfway through the bootcamp was to create a 'cookie clicker' style app, in React. Knowing that Tech Educators have a soft spot for ol' Ainsley, I themed mine with sound effect and image assets.",
    githubRepo: "https://github.com/frank-ventures/teched-week06-project",
    liveLink: "https://ainsley.frankieshrieves.co.uk",
  },
  {
    title: "Unsplash Gallery Search App",
    image: "/projects/gallery-search.webp",
    alt: "Screenshot of an image search app. It shows results for the word 'orange' shown as a main background and with a thumbnail bar.",
    status: 1,
    techStack: [1, 2, 3, 10],
    description:
      "On the bootcamp, we were tasked with creating an image gallery viewer, pulling together our newly practiced HTML, CSS and JavaScript skills. I took it a step further by integrating the Unsplash API, plus features like search, a quality toggle and pagination!",
    githubRepo: "https://github.com/frank-ventures/teched-week03-project",
    liveLink: "https://gallery.frankieshrieves.co.uk",
  },
  {
    title: "This Portfolio Website!",
    image: "/projects/portfolio-site.webp",
    alt: "Screenshot of the website you are on now.",
    status: 2,
    techStack: [5, 6, 7],
    description:
      "Projects Inception! Yes, this very website is on here too. I mean it makes sense; it's one of my projects. When building it I had a strong intention of creating DRY, extensible code, and using TypeScript.",
    githubRepo: "https://github.com/frank-ventures/franks-portfolio",
    liveLink: "/",
  },
];
