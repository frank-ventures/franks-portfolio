export default function ContentImage({
  imgSrc,
  imgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className="object-cover h-[20rem] w-full max-w-[20rem] object-[30%_10%] rounded-xl"
    />
  );
}
