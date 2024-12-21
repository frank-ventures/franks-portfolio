import ProjectsList from "@/components/projects/ProjectList";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Intro Bar */}
      <div className="mt-4 bg-red-600 border-2 border-black p-4 w-11/12 max-w-[900px] rounded-2xl">
        <h1 className="text-5xl text-center text-yellow-300 text-shadow-withOutlineLg shadow-black ">
          Hello! I&apos;m Frankie
        </h1>
      </div>

      {/* Quick Links */}
      <p>here is where im going to put links to anchors on the page</p>

      <ProjectsList />
    </main>
  );
}
