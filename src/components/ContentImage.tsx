"use client";

import { useState } from "react";

// This component lets us show a nice, squareish image which can be clicked to 'flip' around a second image.
// Second image is optional.
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

  // The containing div looks for the state of 'flip', and adjusts its transform accordingly (show the "front" or the "back").
  // When an image is clicked, it sets the state of 'flip' to the opposite.
  return (
    <div
      className={`card flex justify-center items-center  h-[20rem] min-w-[20rem] w-[20rem] [transform-style:preserve-3D] relative duration-1000 ${
        flip ? `[transform:rotateY(180deg)]` : `[transform:rotateY(0deg)]`
      }`}
    >
      <button
        className={`absolute h-full w-full [backface-visibility:hidden] ${
          secondImgSrc ? `cursor-pointer` : `cursor-default`
        }`}
        onClick={() => {
          if (secondImgSrc) {
            setFlip(!flip);
          }
        }}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className="object-cover h-full w-full object-[50%_10%] rounded-xl "
        />
      </button>
      {secondImgSrc && (
        <button
          className=" absolute h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]"
          onClick={() => {
            setFlip(!flip);
          }}
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
