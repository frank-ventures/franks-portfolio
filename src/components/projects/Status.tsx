import { getStatuses } from "@/stores/projects";

type Colours = {
  [key: string]: string;
};

const colours: Colours = {
  fallback: "bg-black shadow-black text-white",
  blue: "bg-blue-300 shadow-blue-800 text-blue-800",
  green: "bg-green-300 shadow-green-800 text-green-800",
  gray: "bg-gray-300 shadow-gray-800 text-gray-800",
};

export default function Status({ status }: { status: number }) {
  const statusList = getStatuses();
  const matchedStatus = statusList.find((stat) => stat.id === status);
  const matchedColour = matchedStatus?.colour || "fallback";

  return (
    <p
      className={`capitalize max-w-fit rounded-md shadow-sm px-2 py-1 text-center max-h-fit h-[-moz-max-content] ${colours[matchedColour]}`}
    >
      {matchedStatus?.title}
    </p>
  );
}
