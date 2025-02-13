import { dashify } from "@/helpers/dashify";

export default function ProjectTitle({ title }: { title: string }) {
  return (
    <h2 id={`${dashify(title)}`} className="text-3xl text-right">
      <a href={`#${dashify(title)}`}>{title}</a>
    </h2>
  );
}
