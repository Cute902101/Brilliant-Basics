import React from "react";
import Slider from "react-slick";

 export function NextArrowStyles (props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "100%" , background: "transparent", right:10 }}
        onClick={onClick}
      />
    );
}

export function PrevArrowStyles (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "absolute", background: "transparent" }}
      onClick={onClick}
    />
  );
}


