import { getTechStacks } from "@/stores/projects";

export default function TechStack({ techStack }: { techStack: number[] }) {
  const fullTechList = getTechStacks();

  const matchedTechStack = techStack.map((stack) => {
    return fullTechList.find((tech) => tech.id === stack);
  });

  return (
    <div className="flex gap-2 justify-end">
      {matchedTechStack.map((stack) => {
        return (
          <div
            key={stack?.id}
            className="flex flex-col items-center shadow-inner shadow-slate-400 bg-slate-600 p-1 rounded-lg bg-opacity-25 hover:bg-blue-500  hover:shadow-slate-600 hover:text-white hover:cursor-default"
          >
            <div className="p-1 border rounded-md bg-white bg-opacity-95">
              {stack?.icon(35, 35)}
            </div>

            <p className="mt-1 text-xs text-opacity-60">{stack?.title}</p>
          </div>
        );
      })}
    </div>
  );
}
