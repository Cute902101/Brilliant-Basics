import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlidingButton from "../components/SlidingButton";
import HomepageSlider from "../components/HomepageSlider/HomepageSlider";
import ProductSlider from "../components/ProductSlider/ProductSlider.jsx"
import StarIconSvg from "../assets/images/StarIconSvg";
import { useProductContext } from "../Services/ProductContext";
import "./Home.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Home() {
    // useProductContext to get product data
    const { productList, setProductList } = useProductContext();
    const [ isNavFixed, setIsNavFixed ] = useState(false);
    const [ isCardOne, setIsCardOne ] = useState(false);
    const [ isCardTwo, setIsCardTwo ] = useState(false);

    // Set the initial slide index
    const [isActive, setIsActive] = useState(0);

    // Settings for the slider component
    const slideshowSettings = {
        dots: true,
        arrows: false, 
        centerMode: false,
        fade: true,
        infinite: true, 
        autoplay: false,  
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settings = {
        arrows: false, 
        centerMode: true, // Enable center mode
        // className: "center", // Add CSS class "center" for styling purposes
        slidesToShow: 3,
        infinite: true, 
        autoplay: true,
        // centerPadding: "0", 
        // focusOnSelect: true,
        autoplaySpeed: 4000, 
        // beforeChange: (current, next) => {
        //     // Update the active slide index before a slide change
        //     setIsActive(next);
        // },
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

    const cardOneFadeIn = () => {
        setIsCardOne(window.scrollY >= 250)  
         
    };

    useEffect(() => {
        window.addEventListener("scroll", cardOneFadeIn);

       
        return () => {
            window.removeEventListener("scroll", cardOneFadeIn);
        };
    }, []);

    const cardTwoFadeIn = () => {
        setIsCardTwo(window.scrollY >= 550)  
         
    };

    useEffect(() => {
        window.addEventListener("scroll", cardTwoFadeIn);

       
        return () => {
            window.removeEventListener("scroll", cardTwoFadeIn);
        };
    }, []);

    return (
        <>
        <div className="Home-page">
            <header className="h-[19vh] relative">
                <nav className={ isNavFixed ? "nav-styles fixed" : "nav-styles" }>
                    <div className="nav-text-container">
                        <div className=" font-bold text-5xl">Brilliant</div>
                        <h2 className=" font-thin text-4xl">Basics</h2>
                    </div>
                    <div className="absolute right-5 top-5">
                    <a href="/Brilliant-Basics/store">
                     <img className="w-10" src="https://img.icons8.com/plumpy/96/shopaholic.png" alt="shopaholic"/>
                    </a>
                    </div>
                </nav>
            </header>
            <section>
            <HomepageSlider/>
           
            <div className="loop-background glowing-text">
                {/* <div className="looped-text-container h-36">
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
                </div> */}
            </div> 
            </section>
            <section>
            <div className="info-card-container">
              <div className={isCardOne ? "info-card-1 fade-left" : "info-card-1"}>
                <div className={isCardOne ? "info-text-1 fade-text": "info-text-1"}>
                    <header className="font-normal">Elevate Your Lifestyle...</header>
                    <p className="font-normal p-4">Our products are more than just items; they are a reflection of your unique taste and a commitment to quality living.</p>
                </div>
                <div className="info-img-1">
                  <img className=" " src="https://images.pexels.com/photos/19271742/pexels-photo-19271742/free-photo-of-man-walking-down-a-boardwalk-between-giant-reeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div> 
              </div>
              <div className={isCardTwo ? "info-card-2 fade-right" : "info-card-2"}><div className="info-img-2">
                  <img className=" " src="https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </div> 
                <div className={isCardTwo ? "info-text-2 fade-text" : "info-text-2"}>
                    <p className="font-normal">Whether you're enhancing your home, refining your style, or seeking thoughtful gifts, Brilliant Basics is your destination for must-have essentials that stand the test of time.</p>
                </div>
                
              </div>
            </div>

            
            <section className="inset-border">
                {/* <header className="looped-product-title">See What we Have to Offer...</header> */}
                
                  <ProductSlider/> 
                         <div className="flex-grow"></div>

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
                              <p className="font-thin text-justify-left text-left ">{productList[isActive].title}</p>
                        )}
                        <SlidingButton/>
                    </div> 
                
                  
                  
                </div>
              </div>      
</section>

               

            








                
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



{/* <Slider className="slider-2" {...settings}>
                    {productList.map((card, index) => (
                      <div className="looped-product-card-container">
                        <div className="looped-product-card">
                          <img className="" key={index} src={card.image} alt={`Product ${index}`} /> 
                        </div>
                        <div>
                            <header>{card.title}</header>
                            <p className="flex flex-row items-center">
                                <span>
                                    <StarIconSvg/>
                                </span>
                                {card.rating.rate}
                                <span className="pl-2 text-xs font-medium">
                                ({card.rating.count}) Global Ratings
                                </span>
                            </p>
                        </div>
                      </div>
                        
                    ))}
                  </Slider>   */}