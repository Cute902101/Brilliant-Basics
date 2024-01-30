import React, { useState, useEffect } from "react";
import { useProductContext } from "../../Services/ProductContext";
import { useCartContext } from "../../Services/CartContext";
import { updateLocalStorage } from "../../Services/localStorage";
import AddToCart from "./AddToCart";
import EmptyCartSvg from "../../assets/images/EmptyCartSvg";
import StarIconSvg from "../../assets/images/StarIconSvg";
import GithubMark from "../../assets/images/GithubMark";
import "./ProductCardList.css";

export default function ProductCardList() {
  const { productList, loading, error } = useProductContext();
  const { shoppingCart, setShoppingCart } = useCartContext();
  const [githubLink, setGithubLink] = useState("https://github.com/marcelo-Hernandez/");

  const addToCart = (count, product, setCount) => {
    const newCartItem = { product, quantity: count };

    const existingCartItemIndex = shoppingCart.findIndex(
      (cartItem) => cartItem.product.id === newCartItem.product.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedShoppingCart = [...shoppingCart];
      updatedShoppingCart[existingCartItemIndex].quantity += count;
      setShoppingCart(updatedShoppingCart);
      updateLocalStorage(updatedShoppingCart);
    } else if (newCartItem.quantity === 0) {
      alert("Try adding a quantity");
    } else {
      setShoppingCart([...shoppingCart, newCartItem]);
      updateLocalStorage([...shoppingCart, newCartItem]);
    }

    setCount(0);
  };

  const priceHelper = (price) => {
    const priceToStr = price.toString();
    const splitPrice = priceToStr.split(".");
    const newPrice = priceToStr.includes(".") ? (
      <>
        {splitPrice[0]} <span className="text-sm text-[#3A5A40]">{splitPrice[1]}</span>
      </>
    ) : (
      <>
        {price} <span className="text-sm text-[#3A5A40]">00</span>
      </>
    );

    return newPrice;
  };

  if (error) {
    return <div className="text-white text-xl">I'm sorry, something went wrong with our connection to the products. Contact me to get it back up and working.</div>;
  }

  return (
    <>
      <div className="store-container">
        <ul className="product-list-container">
          {productList.map((product) => (
            <div className="product-card text-[#3A5A40] halo-effect" key={product.id}>
              <div className="product-image-bg">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-text">
                <h1 className="font-bold">{product.title}</h1>
                <p className="flex flex-row items-center">
                  <span><StarIconSvg/></span>
                  {product.rating.rate}
                  <span className="pl-2 text-xs font-medium">({product.rating.count}) Global Ratings</span>
                </p>
                <p className="pl-4 text-lg font-normal text-[#3A5A40]">$ {priceHelper(product.price)}</p>
                <div className="mt-1">
                  <AddToCart product={product} addToCart={addToCart} />
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <footer className="footer-style">
        <div className="github-link-style">
          <GithubMark/>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">@Marcelo-Hernandez</a>
        </div>
      </footer>
    </>
  );
}
