import { ReactNode } from "react";

export default function ContentWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      className="flex flex-col p-4 w-full sm:flex-row gap-4 items-center  sm:even:flex-row-reverse odd:bg-slate-300 text-lg"
      id={id}
    >
      {children}
    </section>
  );
}
