"use client";
import { ReactNode } from "react";
import PlayIcon from "../icons/techIcons/PlayIcon";
import useSound from "use-sound";

export default function HeroIntro({
  text,
  audio,
}: {
  text: ReactNode;
  audio?: string;
}) {
  const [play] = useSound(audio || "");

  return (
    <div className="bg-red-600 pt-16 border-2 border-black p-10 w-full">
      <h1 className="flex flex-col items-center text-5xl text-center text-yellow-300 text-shadow-withOutlineLg shadow-black first-letter:capitalize">
        {text}
      </h1>
      {audio && (
        <section className="absolute z-20 top-16 left-1/2 -translate-x-52 bg-yellow-400 rounded-3xl shadow-md shadow-black hover:cursor-pointer hover:bg-blue-400 hover:scale-125 duration-300">
          <i onClick={() => play()}>{PlayIcon(40, 40)}</i>
        </section>
      )}
    </div>
  );
}
