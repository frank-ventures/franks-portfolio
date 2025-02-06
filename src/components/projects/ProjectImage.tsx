export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="sm:h-[21rem]">
      <img className="rounded-md" src={src} alt={alt} />
    </div>
  );
}
