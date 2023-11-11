import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SlidingButton() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleHover = () => {
    setIsButtonHovered(!isButtonHovered);
  };

  return (
    <div className="flex flex-row mt-10 group">
      <Link
        to="/store"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className="relative flex justify-center items-center bg-[#404040] w-[157.55px] h-[70px] opacity-90 halo-effect py-2 px-4 text-[19px] font-semibold text-white"
      >
        Shop Now
        <div
          className={`absolute top-0 left-0 bg-white w-[157.55px] h-[70px] opacity-0 ${
            isButtonHovered ? "exit-sliding-button" : "sliding-button"
          }`}
        ></div>
      </Link>
    </div>
  );
}