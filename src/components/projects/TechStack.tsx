import { getTechStacks } from "@/stores/projects";

export default function TechStack({ techStack }: { techStack: number[] }) {
  const fullTechList = getTechStacks();

  const matchedTechStack = techStack.map((stack) => {
    return fullTechList.find((tech) => tech.id === stack);
  });

  console.log(matchedTechStack);

  return (
    <div className="flex gap-2">
      {matchedTechStack.map((stack) => {
        return (
          <div key={stack?.id} className="flex flex-col items-center">
            <div className="shadow-md p-1 rounded-md">{stack?.icon}</div>
            {/* <p>{stack?.title}</p> */}
          </div>
        );
      })}
    </div>
  );
}
