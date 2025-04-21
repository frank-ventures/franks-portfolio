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
    icon: "nav-icons/top.svg",
  },
  {
    href: "/",
    text: "Home",
    icon: "nav-icons/home.svg",
  },
  {
    href: "/about",
    text: "About Me",
    icon: "nav-icons/smiley-square.svg",
  },
  {
    href: "/credits",
    text: "Credits",
    icon: "nav-icons/heart.svg",
  },
];

export default function NavLinks({
  pageAnchors,
}: {
  pageAnchors?: PageAnchors[] | undefined;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav
      className={`${
        isOpen ? `grid-rows-[1fr]` : `grid-rows-[0fr]`
      } border-t border-b border-black grid grid-cols-[5fr_1fr] gap-4 max-w-[100dvw] px-4 py-2 shadow shadow-black sticky top-8 bg-slate-200 bg-opacity-50 backdrop-blur z-20 w-full transition-[grid-template-rows] duration-300 sm:duration-500 overflow-hidden`}
    >
      {/* Icon to show there's more items to see */}
      <div className="flex gap-2 justify-start items-start  col-start-2 row-span-full col-end-3 min-h-8">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className={`h-8 rotate-[270deg] ${
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
        <p>Menu</p>
      </div>

      {/* A wrapper to simplify what gets a transition effect applied to it. */}
      <ul
        className={`w-full max-w-[80%] ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } flex flex-col gap-4 transition-all duration-300 sm:duration-150 items-start ml-auto self-[end] min-h-0`}
        role="menubar"
        aria-label="navigation items"
      >
        <li className="w-full hidden" role="menuitem" aria-haspopup="false">
          <ul
            className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-4"
            role="menu"
          >
            <li
              className="text-end font-semibold col-span-full place-self-center"
              role="separator"
            >
              Page links
            </li>
            {/* Anchors unique to each page  */}
            {/* Probably unecessary */}
            {pageAnchors?.map((link, index) => {
              return (
                <li key={`anchor_${index}`} role="none">
                  <Link
                    role="menuitem"
                    className={`relative before:content-[''] before:w-4 before:h-[2px] before:bg-blue-800 before:top-[24px]  before:absolute hover:before:w-full hover:before:left-0 before:transition-all before:duration-500`}
                    href={`${link.href}`}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>

        <li
          className="w-full flex justify-center"
          role="menuitem"
          aria-haspopup="false"
        >
          <ul
            className="grid grid-cols-[repeat(auto-fit,minmax(80px,max-content))] w-full gap-8 place-content-center"
            role="menu"
          >
            {/* Site navigation links. */}
            {/* <li
              className="text-end font-semibold col-span-full place-self-center"
              role="separator"
            >
              Site links
            </li> */}
            {siteNavigation.map((link, index) => {
              return (
                <li key={`permanentLink_${index}`}>
                  <Link
                    className={`flex items-center gap-[0.25rem] relative nav-link-item`}
                    href={`${link.href}`}
                    aria-current={pathname == link.href && "page"}
                  >
                    <img src={link.icon} className="h-6 svg-filter" />
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
