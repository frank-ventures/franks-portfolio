export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="h-[21rem]">
      <img
        className="rounded-md shadow-md shadow-gray-400"
        src={src}
        alt={alt}
      />
    </div>
  );
}
