"use client";

export default function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  // Help with typing form mainly places, including here: https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
  function parallaxEffect(event: React.MouseEvent<HTMLElement>) {
    function calcDeg(x: number, maxIn: number, out: number) {
      return (2 * x * out) / maxIn - out;
    }

    const thisElement = event.target as HTMLImageElement;
    const thisElementRect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - thisElementRect.left;
    const y = event.clientY - thisElementRect.top;
    const rY = calcDeg(x, thisElementRect.width, 25);
    const rX = calcDeg(y, thisElementRect.height, 25);

    thisElement.style.transform =
      "rotateY(" + rY + "deg) rotateX(" + -rX + "deg)";
    thisElement.style.webkitTransform =
      "rotateY(" + rY + "deg) rotateX(" + -rX + "deg)";
  }

  function parallaxReset(event: React.MouseEvent<HTMLElement>) {
    const thisElement = event.target as HTMLImageElement;
    thisElement.style.transition = ".2s linear";
    thisElement.style.transform = "rotateY(0deg) rotateX(0deg)";
    thisElement.style.webkitTransform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div className="sm:h-[21rem]">
      <img
        className="rounded-md shadow-lg threed-effect border border-slate-600"
        src={src}
        alt={alt}
        onMouseMove={(event: React.MouseEvent<HTMLElement>) =>
          parallaxEffect(event)
        }
        onMouseLeave={(event: React.MouseEvent<HTMLElement>) =>
          parallaxReset(event)
        }
      />
    </div>
  );
}
