"use client";

import { useRef, useState } from "react";

// This component lets us show a nice, squareish image which can be clicked to 'flip' around a second image.
// Second image is optional!
// Helpful code here: https://medium.com/@amie.n.foster/flipping-out-how-to-create-a-card-that-flips-with-react-and-css-131dba54fc96
export default function ContentImage({
  imgSrc,
  imgAlt,
  secondImgSrc,
  secondImgAlt,
}: {
  imgSrc: string;
  imgAlt: string;
  secondImgSrc?: string;
  secondImgAlt?: string;
}) {
  const [flip, setFlip] = useState(false);
  // The next two variables are to ensure a11y when a user is tabbing through the page. See the onClick handlers below:
  const buttonOneRef = useRef<HTMLButtonElement>(null);
  const buttonTwoRef = useRef<HTMLButtonElement>(null);

  // The containing div looks for the state of 'flip', and adjusts its transform accordingly (show the "front" or the "back").
  // When an image is clicked, it sets the state of 'flip' to the opposite.
  return (
    <div
      className={`card flex justify-center items-center  h-[20rem] min-w-[20rem] w-[20rem] [transform-style:preserve-3D] relative duration-1000 ${
        flip ? `[transform:rotateY(180deg)]` : `[transform:rotateY(0deg)]`
      }`}
    >
      <button
        id="primaryImage"
        className={`absolute h-full w-full [backface-visibility:hidden] ${
          secondImgSrc ? `cursor-pointer` : `cursor-default`
        }`}
        ref={buttonOneRef}
        onClick={() => {
          if (secondImgSrc) {
            // The two images are initially rendered with their necessary states: disabled = true/false
            // For a11y, when an image is clicked by enter/spacebar, we set the other images 'disabled' state to false (so that it is focusable), then we tell the browser to focus the other image, then we finally "flip" the images with setFlip().
            buttonTwoRef.current!.disabled = false;
            buttonTwoRef.current?.focus();

            setFlip(!flip);
          }
        }}
        // This is the initial render property:
        disabled={flip ? true : false}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="object-cover h-full w-full object-[50%_10%] rounded-xl "
        />
      </button>
      {secondImgSrc && (
        <button
          id="secondaryImage"
          className=" absolute h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]"
          ref={buttonTwoRef}
          onClick={() => {
            buttonOneRef.current!.disabled = false;
            buttonOneRef.current?.focus();

            setFlip(!flip);
          }}
          disabled={!flip ? true : false}
        >
          <img
            src={secondImgSrc}
            alt={secondImgAlt}
            className="object-cover h-full w-full object-[50%_10%] rounded-xl "
          />
        </button>
      )}
    </div>
  );
}
