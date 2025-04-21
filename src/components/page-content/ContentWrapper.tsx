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
      className="flex flex-col p-8 w-full sm:flex-row gap-8 items-center  sm:even:flex-row-reverse odd:bg-slate-300 text-lg"
      id={id}
    >
      {children}
    </section>
  );
}
