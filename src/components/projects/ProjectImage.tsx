export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="sm:h-[21rem]">
      <img
        className="rounded-md shadow-md shadow-gray-400"
        src={src}
        alt={alt}
      />
    </div>
  );
}
