import React, { useState, useEffect } from "react";
import { useProductContext } from "../../Services/ProductContext";
import { useCartContext } from "../../Services/CartContext";
import { updateLocalStorage } from "../../Services/localStorage";
import AddToCart from "./AddToCart";
import EmptyCartSvg from "../../assets/images/EmptyCartSvg";
import StarIconSvg from "../../assets/images/StarIconSvg";
import GithubMark from "../../assets/images/GithubMark";
import "./ProductCardList.css"

// Main product list component for use in store page
export default function ProductCardList() {
  const { productList, loading, error } = useProductContext();
  const { shoppingCart, setShoppingCart } = useCartContext();
  const [ githubLink, setGithubLink ] = useState("https://github.com/marcelo-Hernandez/");
  
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
          {splitPrice[0]} <span className="text-sm text-[#3A5A40]">{splitPrice[1]}</span>
        </>
      ) : (
        <>
          {price} <span className="text-sm text-[#3A5A40]">00</span>
        </>
      );

    return newPrice;
  };


  // Render product list for store page
  // if(loading) {
  //   const n = 5;
  //   return (
  //     <div className="overflow-hidden pt-20">
  //     <ul className="flex flex-col">
  //       {[...Array(n)].map((product, i) => (
  //         <div
  //           className="ml-20 w-[70vw] justify-between drop-effect mb-10 rounded-md text-white"
  //           key={i}
  //         >
  //           <div className="rounded-md mb-10 drop-shadow-[100pxw]">
  //             <div className="flex flex-row p-10" key={i}>
  //               <div className="w-72 h-72 bg-white rounded-md halo-effect">
  //                 <a href="/">
  //                   <div
  //                     className="w-full h-full object-scale-down">

  //                     <EmptyCartSvg></EmptyCartSvg>
  //                     </div>
                    
  //                 </a>
  //               </div>
  //               <div className="flex flex-col w-96 pl-10 hover:shadow-black">
  //                 <a
  //                   href="/Brilliant-Basics/"
  //                   className="font-bold hover:text-blue-400"
  //                 >
  //                   Loading...
  //                 </a>
  //                 <p className="flex flex-row">
  //                   <span>
  //                     <img
  //                       className="w-6"
  //                       src="../../src/assets/images/star-icon.png"
  //                       alt="Star Icon"
  //                     />
  //                   </span>
                    
  //                   <span className="pl-2 text-xs font-medium">
  //                     Loading Global Ratings...
  //                   </span>
  //                 </p>
  //                 <p className="pl-4 text-[28px] font-normal">
  //                   Loading..
  //                 </p>
  //                 <div className="mt-[65px]">
  //                   <AddToCart
  //                     product={product}
  //                     addToCart={addToCart}
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </ul>
  //   </div>

  //   );
  // };

  if(error) {
    return <div className="text-white text-xl">I'm sorry, something went wrong with our connection to the products. Contact me to get it back up and working.</div>
  }

  
  
  return (
    <>
    <div className="store-container">
    <ul className="product-list-container">
      {productList.map((product) => (
        <div
          className="product-card text-[#3A5A40] halo-effect"
          key={product.id}
        >
          <div className="product-image-bg">
            <img src={product.image} alt={product.title}/>
          </div>
          <div className="product-text">
            <h1 className="font-bold">
              {product.title}
            </h1>
            <p className="flex flex-row items-center">
                  <span>
                    <StarIconSvg/>
                  </span>
                  {product.rating.rate}
                  <span className="pl-2 text-xs font-medium">
                    ({product.rating.count}) Global Ratings
                  </span>
            </p>
            <p className="pl-4 text-lg font-normal text-[#3A5A40]">
                  $ {priceHelper(product.price)}
             </p>
              <div className="mt-1">
                  <AddToCart
                    product={product}
                    addToCart={addToCart}
                  />
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