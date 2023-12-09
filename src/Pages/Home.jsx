import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlidingButton from "../components/SlidingButton";
import { useProductContext } from "../Services/ProductContext";
import "./Home.css"
import "./slick.css"
import "./slick-theme.css"



export default function Home() {
    // useProductContext to get product data
    const { productList, setProductList } = useProductContext();

    // Set the initial slide index
    const [isActive, setIsActive] = useState(0);

    // Settings for the slider component
    const slideshowSettings = {
        dots: true,
        arrows: true, 
        centerMode: false,
        fade: true,
        infinite: true, 
        autoplay: false,  
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrowStyles />,
        prevArrow: <PrevArrowStyles />
    };

    const settings = {
        arrows: false, 
        centerMode: true, // Enable center mode
        className: "center", // Add CSS class "center" for styling purposes
        slidesToShow: 3,
        infinite: true, 
        autoplay: true,
        centerPadding: "0px", 
        focusOnSelect: true,
        autoplaySpeed: 4000, 
        beforeChange: (current, next) => {
            // Update the active slide index before a slide change
            setIsActive(next);
        },
    };


    const fixNavbar = () => {
        window.scrollY >= 150 ? setIsNavFixed(true) : setIsNavFixed(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", fixNavbar);

       
        return () => {
            window.removeEventListener("scroll", fixNavbar);
        };
    }, []);

    const changeBgColor = () => {
        window.scrollY >= 350 ? setIsBgGold(true) : setIsBgGold(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBgColor);

       
        return () => {
            window.removeEventListener("scroll", changeBgColor);
        };
    }, []);

    return (
        <>
        <div className="Home-page">
            <header className="h-[19vh]">
                <nav className={ isNavFixed ? "nav-styles fixed" : "nav-styles" }>
                    <div className="nav-text-container">
                        <div className=" font-bold text-5xl">Brilliant</div>
                        <h2 className=" font-thin text-4xl">Basics</h2>
                    </div>
                    <div className="absolute right-5 top-5">
                    <a href="#">
                     <img className="w-10" src="https://img.icons8.com/plumpy/96/shopaholic.png" alt="shopaholic"/>
                    </a>
                    </div>
                </nav>
            </header>
            <section>
            <div className="h-[70%] w-[100%]">
            <Slider {...slideshowSettings}>
                <div className="md:h-[70vh]">
                    <img className="object-cover md:-[30vh] " src="https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg" />
                    <p className="absolute top-36 glowing-text text-white font-thin">
                        Discover the joy in the small details – because life's most meaningful treasures are found in the simple and the splendid.
                        </p>
                </div>
                <div>
                    <img className="object-cover md:h-[70vh]" src="https://images.pexels.com/photos/5184422/pexels-photo-5184422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                
            </Slider>
            </div>
            <div className="loop-background glowing-text">
                <div className="looped-text-container h-36">
                  <div className="looped-text-track">
                    <div className="font-thin text-5xl text-white">All You Want</div>
                    <div className="font-thin text-5xl text-white">All You Need</div>
                    <div className="font-thin text-5xl text-white">"Simply Brilliant"</div>
                  </div>
                  <div className="looped-text-track h-36">
                    <div className="font-thin text-5xl text-white">All You Want</div>
                    <div className="font-thin text-5xl text-white">All You Need</div>
                    <div className="font-thin text-5xl text-white">"Simply Brilliant"</div>
                  </div>
                </div>
            </div> 
            </section>
            <section>
            <div className={ isBgGold ? "info-card-container bg-gold" : "info-card-container fade" }>
               <div className="info-card">
                <img src="https://images.pexels.com/photos/9829570/pexels-photo-9829570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </div> 
            </div>
              
              <div className="focus-card-container bg-transparent">
                
                <div className="focus-card flex flex-row hover:scale-[101%] transition-all">
                <div className="focus-card-upper">
                      <div className="focus-image">
                        {productList.length > 0 && (
                            <img
                                className={isActive? "try" : ""}
                                src={productList[isActive].image}
                                alt={`Product ${isActive}`}
                            />
                        )}
                      </div>
                </div>
                <div className="focus-image-title">
                        {productList.length > 0 && (
                              <p className="font-thin text-justify-left text-left text-3xl ">{productList[isActive].title}</p>
                        )}
                        <SlidingButton/>
                    </div> 
                
                  
                  
                </div>
              </div>

                <div className="flex-grow"></div>

                <div className="looped-product-container">
                  <Slider {...settings} className="looped-product-track">
                    {productList.map((card, index) => (
                        <div className="looped-product-card">
                          <img className="" key={index} src={card.image} alt={`Product ${index}`} />  
                        </div>
                    ))}
                  </Slider>
                </div>







                
            </section>









<div className="h-[1000px]">

</div>




{/* 
            <div className="">
                <div className="">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {productList.map((card, index) => (
                                
                                <img className="" key={index} src={card.image} alt={`Product ${index}`} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="">BRILLIANT BASICS</div>
                    <div className="text-gray-400">ALL YOU WANT</div>
                    <div className="text-gray-600">ALL YOU NEED</div>
                </div>
                <div className="">
                    <SlidingButton></SlidingButton>
                </div>
               
                <div className="">
                    <div className="">
                        <p className="">"Simply Brilliant."</p>
                    </div>
                    <div className="">
                        {productList.length > 0 && (
                            
                            <p className="text-slate-500">{productList[isActive].description}</p>
                        )}
                    </div>
                </div>
                <div className="">
                    {productList.length > 0 && (
                        
                        <img
                            className=""
                            src={productList[isActive].image}
                            alt={`Product ${isActive}`}
                        />
                    )}
                </div>
            </div> */}
        </div>
            
        </>
    );
}