import React, { useState, useEffect } from "react";
import { useProductContext } from "../../Services/ProductContext";
import { useCartContext } from "../../Services/CartContext";
import { updateLocalStorage } from "../../Services/localStorage";
import AddToCart from "./AddToCart";
import EmptyCartSvg from "../../assets/images/EmptyCartSvg";
import StarIconSvg from "../../assets/images/StarIconSvg";

// Main product list component for use in store page
export default function ProductCardList() {
  const { productList, loading, error } = useProductContext();
  const { shoppingCart, setShoppingCart } = useCartContext();
  
  // Function for adding an item to shoppingCart
  const addToCart = (count, product, setCount) => {
    const newCartItem = { product, quantity: count };

    // Check if there is an existing item in the shoppingCart
    const existingCartItemIndex = shoppingCart.findIndex(
      (cartItem) => cartItem.product.id === newCartItem.product.id
    );

    // If product already exists in the cart, update quantity  Otherwise, add the new item to the cart
    if (existingCartItemIndex !== -1) {
      const updatedShoppingCart = [...shoppingCart];
      updatedShoppingCart[existingCartItemIndex].quantity += count;
      setShoppingCart(updatedShoppingCart);
      updateLocalStorage(updatedShoppingCart)
    } else if (newCartItem.quantity === 0) { // If submitted item quantity equals zero, alert a quantity is necessary 
      alert("Try adding a quantity");
    } else { // Else, add new item to shoppingCart
      setShoppingCart([...shoppingCart, newCartItem]);
      updateLocalStorage([...shoppingCart, newCartItem])
    }

    setCount(0);
  };


    // Function to reformat price display
    const priceHelper = (price) => {
    const priceToStr = price.toString();
    const splitPrice = priceToStr.split(".");
    const newPrice =
      priceToStr.includes(".") ? (
        <>
          {splitPrice[0]} <span className="text-sm">{splitPrice[1]}</span>
        </>
      ) : (
        <>
          {price} <span className="text-sm">00</span>
        </>
      );

    return newPrice;
  };


  // Render product list for store page
  if(loading) {
    const n = 5;
    return (
      <div className="overflow-hidden pt-20">
      <ul className="flex flex-col">
        {[...Array(n)].map((product, i) => (
          <div
            className="ml-20 w-[70vw] justify-between drop-effect mb-10 rounded-md text-white"
            key={i}
          >
            <div className="rounded-md mb-10 drop-shadow-[100pxw]">
              <div className="flex flex-row p-10" key={i}>
                <div className="w-72 h-72 bg-white rounded-md halo-effect">
                  <a href="/">
                    <div
                      className="w-full h-full object-scale-down">

                      <EmptyCartSvg></EmptyCartSvg>
                      </div>
                    
                  </a>
                </div>
                <div className="flex flex-col w-96 pl-10 hover:shadow-black">
                  <a
                    href="/Brilliant-Basics/"
                    className="font-bold hover:text-blue-400"
                  >
                    Loading...
                  </a>
                  <p className="flex flex-row">
                    <span>
                      <img
                        className="w-6"
                        src="../../src/assets/images/star-icon.png"
                        alt="Star Icon"
                      />
                    </span>
                    
                    <span className="pl-2 text-xs font-medium">
                      Loading Global Ratings...
                    </span>
                  </p>
                  <p className="pl-4 text-[28px] font-normal">
                    Loading..
                  </p>
                  <div className="mt-[65px]">
                    <AddToCart
                      product={product}
                      addToCart={addToCart}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>

    );
  };

  if(error) {
    return <div className="text-white text-xl">I'm sorry, something went wrong with our connection to the products. Contact me to get it back up and working.</div>
  }

  
  
  return (
  <div className="overflow-hidden pt-10 sm:pt-20">
  <ul className="flex flex-col justify-center items-center">
    {productList.map((product) => (
      <div
        className="mx-4 sm:mx-0 w-full sm:w-[70vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[70vw] justify-between drop-effect mb-10 rounded-md text-white"
        key={product.id}
      >
        <div className="rounded-md mb-10 drop-shadow-[100pxw]">
          <div className="flex flex-col sm:flex-row p-4 sm:p-10" key={product.id}>
            <div className="w-full sm:w-72 h-52 sm:h-72 bg-[] rounded-md halo-effect mb-4 sm:mb-0">
              <a href="/">
                <img
                  className="w-full h-full object-scale-down"
                  src={product.image}
                  alt={product.title}
                />
              </a>
            </div>
            <div className="flex flex-col w-full sm:w-96 pl-4 sm:pl-10 hover:shadow-black">
              <a
                href="/Brilliant-Basics"
                className="font-bold hover:text-blue-400"
              >
                {product.title}
              </a>
              <p className="flex flex-row items-center">
                <span>
                  <StarIconSvg/>
                </span>
                {product.rating.rate}
                <span className="pl-2 text-xs font-medium">
                  ({product.rating.count}) Global Ratings
                </span>
              </p>
              <p className="pl-4 text-lg font-normal">
                $ {priceHelper(product.price)}
              </p>
              <div className="mt-4 sm:mt-8">
                <AddToCart
                  product={product}
                  addToCart={addToCart}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </ul>
</div>
  );
  


}