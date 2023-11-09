import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlidingButton from "../components/SlidingButton";
import { useProductContext } from "../Services/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    // useProductContext to get product data
    const { productList, setProductList } = useProductContext();

    // Set the initial slide index
    const [isActive, setIsActive] = useState(0);

    // Settings for the slider component
    const settings = {
        arrows: false, 
        centerMode: true, // Enable center mode
        className: "center", // Add CSS class "center" for styling purposes
        infinite: true, 
        autoplay: true, 
        autoplaySpeed: 4000, 
        variableWidth: true, 
        beforeChange: (current, next) => {
            // Update the active slide index before a slide change
            setIsActive(next);
        },
    };

    return (
        <>
            <div className="card-container flex flex-row bg-[#404040] w-[100vw] h-[50vh] shadow-lg shadow-[#505050] px-2 py-10 overflow-hidden justify-center">
                <div className="flex flex-row bg-white display-fade mt-[-40px] mr[-50px] justify-start">
                    <div className="mt-[-200px]">
                        <Slider {...settings}>
                            {productList.map((card, index) => (
                                // Map through product list and display each image within the slider
                                <img className="" key={index} src={card.image} alt={`Product ${index}`} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col font-bold text-[90px] text-[#FFFFFF] justify-between">
                    <div className="">BRILLIANT BASICS</div>
                    <div className="text-gray-400">ALL YOU WANT</div>
                    <div className="text-gray-600">ALL YOU NEED</div>
                </div>
                <div className="flex flex-grow justify-center items-center">
                    <SlidingButton></SlidingButton>
                </div>
                {/* Display active product within slider */}
                <div className="p-6 flex flex-col justify-center">
                    <div className="ml-14">
                        <p className="font-semi-bold text-white text-[30px]">"Simply Brilliant."</p>
                    </div>
                    <div className="relative w-[450px] h-[250px] bg-inherit">
                        {productList.length > 0 && (
                            // Product description
                            <p className="text-slate-500">{productList[isActive].description}</p>
                        )}
                    </div>
                </div>
                <div className="mr-10 mt-10 bg-white w-[250px] h-[250px] rounded-md halo-effect">
                    {productList.length > 0 && (
                        // Display active product image
                        <img
                            className="w-[250px] h-[250px] object-scale-down show-case"
                            src={productList[isActive].image}
                            alt={`Product ${isActive}`}
                        />
                    )}
                </div>
            </div>
        </>
    );
}