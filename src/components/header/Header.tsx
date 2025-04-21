import Link from "next/link";
import HeaderLinks from "./HeaderLinks";

// This component lives at the top of the page and scrolls with the user.
export default function Header() {
  return (
    <header className="bg-slate-800 sm:text-lg text-gray-200 hover:text-gray-200 px-4 w-screen flex justify-between items-center fixed top-0 shadow hover:shadow-lg shadow-black hover:shadow-black bg-opacity-50 hover:bg-opacity-80 backdrop-blur-md h-8 hover:h-14 transition-all duration-500 z-50">
      {/* <p className="navbar-title">
        Franks P<span className="bounce"></span>rtfoli
        <span className="bounce"></span>
      </p> */}
      <Link
        className="header-logo header-link sliding-underline
        hover:bg-orange-600 hover:bg-opacity-50 border border-opacity-0 border-white  hover:border hover:border-gray-100 p-2 rounded-md"
        href={"/"}
      >
        Franks Portfolio
      </Link>

      <HeaderLinks />
    </header>
  );
}
