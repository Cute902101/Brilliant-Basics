import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SlidingButton from "../components/SlidingButton";
import HomepageSlider from "../components/HomepageSlider/HomepageSlider";
import ProductSlider from "../components/ProductSlider/ProductSlider.jsx"
import StarIconSvg from "../assets/images/StarIconSvg";
import GithubMark from "../assets/images/GithubMark.jsx";
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
    const [ githubLink, setGithubLink ] = useState("https://github.com/marcelo-Hernandez/");

    // Set the initial slide index
    const [isActive, setIsActive] = useState(0);

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
                        <Link to="/Brilliant-Basics/store">
                            <img className="w-10" src="https://img.icons8.com/plumpy/96/shopaholic.png" alt="shopaholic"/>
                        </Link>
                    </div>
                </nav>
            </header>
            <section>
                <HomepageSlider/>
                <div className="loop-background glowing-text"></div> 
            </section>
            <section>
                <div className="info-card-container">
                    <div className={isCardOne ? "info-card-1 fade-left" : "info-card-1"}>
                        <div className={isCardOne ? "info-text-1 fade-text": "info-text-1"}>
                            <header className="font-normal">Elevate Your Lifestyle...</header>
                            <p className="font-normal p-4">Our products are more than just items; they are a reflection of your unique taste and a commitment to quality living.</p>
                        </div>
                        <div className="info-img-1">
                            <img  src="https://images.pexels.com/photos/19271742/pexels-photo-19271742/free-photo-of-man-walking-down-a-boardwalk-between-giant-reeds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </div> 
                    </div>
                    <div className={isCardTwo ? "info-card-2 fade-right" : "info-card-2"}>
                        <div className="info-img-2">
                            <img  src="https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </div> 
                        <div className={isCardTwo ? "info-text-2 fade-text" : "info-text-2"}>
                            <p className="font-normal">Whether you're enhancing your home, refining your style, or seeking thoughtful gifts, Brilliant Basics is your destination for must-have essentials that stand the test of time.</p>
                        </div>
                    </div>
                </div>
                <section className="inset-border">
                    <ProductSlider setIsActive={setIsActive}/> {/* Pass the setIsActive function as a prop */}
                    <div className="flex-grow"></div>
                    <div className="focus-card-container bg-transparent">
                        <div className="focus-card flex flex-row hover:scale-[101%] transition-all">
                            <div className="focus-card-upper">
                                <div className="focus-image">
                                    {productList.length > 0 && (
                                        <img
                                            className={isActive ? "try" : ""}
                                            src={productList[isActive].image}
                                            alt={`Product ${isActive}`}
                                            lazy="true"
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
            <footer className="footer-style">
                <div className="github-link-style">
                    <GithubMark/>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">@Marcelo-Hernandez</a>
                </div>
            </footer>
        </div>
        </>
    );
}

