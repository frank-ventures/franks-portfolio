export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <>
      <img className="rounded-md shadow-md" src={src} alt={alt} />
    </>
  );
}
