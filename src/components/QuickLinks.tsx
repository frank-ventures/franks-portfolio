"use client";
import Link from "next/link";
// usePathname lets us conditionally hide the siteNavigation link if we're on that page
import { usePathname } from "next/navigation";
import { useState } from "react";

interface PageAnchors {
  href: string;
  text: string;
}

const siteNavigation = [
  {
    href: "#top",
    text: "Top",
  },
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "Read more",
  },
  {
    href: "/credits",
    text: "Credits",
  },
];

export default function QuickLinks({
  pageAnchors,
}: {
  pageAnchors?: PageAnchors[] | undefined;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="border-t border-b border-black flex flex-row-reverse justify-center gap-4 w-full px-4 py-2 shadow shadow-black sticky top-8 bg-slate-200 bg-opacity-50 backdrop-blur z-20">
      {/* Icon to show there's more items to see */}
      <div className="flex gap-2 items-center ml-auto">
        <p
          className={`${
            isOpen && `-translate-x-40 opacity-0 invisible`
          } transition-all duration-300 `}
        >
          See More
        </p>

        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className={`h-8 ${
              isOpen ? "" : "animate-pulse -scale-x-100"
            } transition-all duration-300 hover:cursor-pointer z-50`}
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

      {/* A wrapper to simplify what gets a transition effect applied to it. */}
      <div
        className={` ${
          isOpen
            ? "opacity-100 block"
            : "opacity-0 translate-x-4 sm:translate-x-full invisible"
        } flex flex-col gap-4 transition-all duration-300 sm:duration-500 w-fit items-start ml-auto`}
      >
        <ul className="flex gap-6">
          {/* Anchors unique to each page */}
          {pageAnchors?.map((link, index) => {
            return (
              <li key={`anchor_${index}`}>
                <Link
                  className={`relative before:content-[''] before:w-4 before:h-[2px] before:bg-blue-800 before:top-[24px]  before:absolute hover:before:w-full hover:before:left-0 before:transition-all before:duration-500`}
                  href={`${link.href}`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-6">
          {/* Site navigation links. */}
          {siteNavigation.map((link, index) => {
            return (
              pathname != link.href && (
                <li key={`permanentLink_${index}`}>
                  <Link
                    className={`${
                      pathname === link.href ? "hidden" : ""
                    } relative before:content-[''] before:w-4 before:h-[2px] before:bg-blue-400 before:top-[24px]  before:absolute hover:before:w-full hover:before:bg-orange-600 hover:before:left-0 before:transition-all before:duration-500`}
                    href={`${link.href}`}
                  >
                    {link.text}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
