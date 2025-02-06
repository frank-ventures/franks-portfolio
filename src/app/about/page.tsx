import IntroBar from "@/components/header/IntroBar";
import QuickLinks from "@/components/QuickLinks";

export default function About() {
  return (
    <main className="flex flex-col w-full min-h-dvh items-center bg-slate-200">
      <IntroBar text={"More about Frank"} />
      <QuickLinks />
      <h1>Hey, this page under construction, woah!!</h1>
      {/* <p>Ive been coaching, instructing and sharing ideas for over 15 years.</p>
      <p>My 15 years of working experience has involved:</p>
      <ul className="p-5 list-disc">
        <li>Coaching parkour across England and in America</li>
        <li>
          Working with children with disabilities, across respite and
          residential care
        </li>
        <li>Building an outdoor education programme at a school</li>
        <li>
          Developing and delivering outdoor adventurous activities, at an
          outdoor centre and - across Nottingham City
        </li>
        <li>Gardening and landscaping for private clients</li>
        <li>Developing health and wellbeing provision for the NHS</li>
        <li>
          Enjoying my own adventures and learning from life; motorcycling across
          India & Vietnam and Cycling across Thailand.
        </li>
      </ul> */}
    </main>
  );
}
