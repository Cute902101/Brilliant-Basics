import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlidingButton from "../components/SlidingButton";
import { useProductContext } from "../Services/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const { productList, setProductList } = useProductContext();
  const [isActive, setIsActive] = useState(0);

  const settings = {
    arrows: false,
    centerMode: true,
    className: "center",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    beforeChange: (current, next) => {
      setIsActive(next);
    },
  };

  return (
    <>
      <div className="card-container flex bg-[#404040] w-full h-[50vh] shadow-lg shadow-[#505050] px-2 py-10 overflow-hidden justify-center">
        <div className="flex flex-row bg-white display-fade justify-center mt-[-200px]">
          <div className="flex justify-center items-end">
            <Slider {...settings}>
              {productList.map((card, index) => (
                <img key={index} src={card.image} alt={`Product ${index}`} />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col font-bold text-center md:text-left sm:w-1/2">
          <div className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] xl:text-[70px] 2xl:text-[90px] text-white">
            BRILLIANT BASICS
          </div>
          <div className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] xl:text-[70px] 2xl:text-[90px] text-gray-400">
            ALL YOU WANT
          </div>
          <div className="text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] xl:text-[70px] 2xl:text-[90px] text-gray-600">
            ALL YOU NEED
          </div>
        </div>

        <div className="flex flex-grow justify-center items-center">
          <SlidingButton />
        </div>

        <div className="p-6 flex flex-col justify-center items-center sm:w-1/2">
          <div className="ml-4 sm:ml-0 flex justify-center">
            <p className="font-semibold text-white text-xl md:text-2xl lg:text-3xl">
              "Simply Brilliant."
            </p>
          </div>

          <div className="mt-10 sm:mr-10 sm:mt-10 bg-white w-[150px] h-[150px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px] 2xl:w-[250px] 2xl:h-[250px] rounded-md halo-effect">
            {productList.length > 0 && (
              <img
                className=" w-full h-full object-scale-down show-case"
                src={productList[isActive].image}
                alt={`Product ${isActive}`}
              />
            )}
          </div>

          <div className="flex justify-center items-start w-full sm:w-[450px] md:w-[250px] xl:w-[450px] h-[450px] bg-inherit">
            {productList.length > 0 && (
              <p className="text-slate-500 text-center mt-10 md:text-sm xl:text-xl xl:mt-10">
                {productList[isActive].description}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}