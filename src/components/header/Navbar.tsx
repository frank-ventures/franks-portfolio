import Link from "next/link";

const links = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/frankie-shrieves/",
    text: "LinkedIn",
  },
  { id: 2, href: "https://github.com/frank-ventures", text: "GitHub" },
];

export default function NavBar() {
  return (
    <>
      <nav className="flex gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              target="blank"
              href={link.href}
              className=" hover:bg-orange-600 hover:bg-opacity-50 border border-opacity-0 border-white  hover:border hover:border-gray-100 transition-all duration-300 p-2 rounded-md relative before:content-[''] before:w-8 before:h-[2px] before:bg-red-500 before:top-[34px]  before:absolute hover:before:w-full hover:before:bg-gray-300 hover:before:left-0 before:transition-all before:duration-500"
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
