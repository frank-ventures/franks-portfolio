import Link from "next/link";

const links = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/frankie-shrieves/",
    text: "LinkedIn",
  },
  { id: 2, href: "https://github.com/frank-ventures", text: "GitHub" },
];

export default function HeaderLinks() {
  return (
    <>
      <nav className="flex gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.id}
              target="blank"
              href={link.href}
              className=" hover:bg-orange-600 hover:bg-opacity-50 border border-opacity-0 border-white  hover:border hover:border-gray-100 transition-all duration-300 p-2 rounded-md relative after:content-[''] after:w-8 after:h-[2px] after:bg-red-500 after:top-[34px]  after:absolute hover:after:w-full hover:after:bg-gray-300 hover:after:left-0 after:transition-all after:duration-500"
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
