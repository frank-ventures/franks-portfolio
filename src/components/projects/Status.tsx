import { getStatuses } from "@/stores/projects";

type Colours = {
  [key: string]: string;
};

const colours: Colours = {
  fallback: "bg-black text-white",
  blue: "bg-blue-400 text-blue-800",
  green: "bg-green-400 text-green-800",
  gray: "bg-gray-400 text-gray-800",
};

export default function Status({ status }: { status: number }) {
  const statusList = getStatuses();
  const matchedStatus = statusList.find((stat) => stat.id === status);
  const matchedColour = matchedStatus?.colour || "fallback";

  return (
    <p
      className={`capitalize max-w-fit rounded px-1 text-center ${colours[matchedColour]}`}
    >
      {matchedStatus?.title}
    </p>
  );
}
