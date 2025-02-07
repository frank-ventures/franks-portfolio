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
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "Read more",
  },
];

export default function QuickLinks({
  pageAnchors,
}: {
  pageAnchors?: PageAnchors[] | undefined;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-t border-b border-black flex flex-row-reverse justify-between gap-4 w-full px-4 py-2 shadow shadow-black sticky top-8 bg-slate-200 bg-opacity-50 backdrop-blur">
      {/* Three Dot Icon to show there's more items to see */}
      <div className="flex gap-2">
        <p
          className={`${isOpen && `-translate-x-40 opacity-0`} transition-all`}
        >
          More
        </p>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="./more.png"
          className={`${
            isOpen ? "rotate-90 " : "animate-pulse"
          } transition-all h-6 w-6 hover:cursor-pointer z-50`}
        />
      </div>

      {/* A wrapper to simplify what gets a transition effect applied to it. */}
      <div
        className={` ${
          isOpen ? "opacity-100" : "opacity-0 translate-x-96"
        } flex gap-2 transition-all duration-100 sm:duration-500`}
      >
        <p className={` text-gray-600`}>Jump to:</p>

        {/* Anchors unique to each page */}
        {pageAnchors?.map((link, index) => {
          return (
            <Link
              className={`relative before:content-[''] before:w-2 before:h-[2px] before:bg-gray-700 before:top-[24px]  before:absolute hover:before:w-full hover:before:bg-orange-600 hover:before:left-0 before:transition-all before:duration-500`}
              key={`anchor_${index}`}
              href={`${link.href}`}
            >
              {link.text}
            </Link>
          );
        })}
        {/* Site navigation links. */}
        {siteNavigation.map((link, index) => {
          return (
            pathname != link.href && (
              <Link
                className={`${
                  pathname === link.href ? "hidden" : ""
                } relative before:content-[''] before:w-2 before:h-[2px] before:bg-gray-700 before:top-[24px]  before:absolute hover:before:w-full hover:before:bg-orange-600 hover:before:left-0 before:transition-all before:duration-500`}
                key={`permanentLink_${index}`}
                href={`${link.href}`}
              >
                {link.text}
              </Link>
            )
          );
        })}
      </div>
    </nav>
  );
}
