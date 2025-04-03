"use client";

import { ReactNode, useState } from "react";

export default function MoreDetails({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative flex flex-col items-center">
      <div className="flex gap-2 items-center">
        <p>Read More</p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600 rounded-xl border-2 border-black font-semibold"
          aria-label="Click this button to open a box to read more about his experiences"
        >
          <svg
            className={`h-12 ${
              isOpen ? "rotate-[270deg]" : "rotate-90 animate-pulse"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="12 15 35 35"
            aria-labelledby="title"
            aria-describedby="desc"
            role="img"
          >
            <path
              data-name="layer1"
              fill="rgb(96 165 250)"
              stroke="#202020"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M40 31.998L26 18l-4 4.486 9.515 9.512L22 41.513 26 46l14-14.002z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 sm:-left-20 z-10  bg-red-600 p-4 rounded-lg h-40 w-full sm:w-[120%] overflow-scroll shadow-xl shadow-black backdrop-blur-2xl bg-opacity-40 text-lg font-semibold">
          {children}
        </div>
      )}
    </section>
  );
}
