import { ReactNode } from "react";

export default function IntroBar({ text }: { text: ReactNode }) {
  return (
    <div className="bg-red-600 pt-16 border-2 border-black p-10 w-full">
      <h1 className="flex flex-col items-center text-5xl text-center text-yellow-300 text-shadow-withOutlineLg shadow-black first-letter:capitalize">
        {text}
      </h1>
    </div>
  );
}
