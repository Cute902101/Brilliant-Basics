import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartList from "../ShoppingCartList/ShoppingCartList"
import CartSvg from "../../assets/images/CartSvg"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useProductContext } from "../../Services/ProductContext";
import { useCartContext } from "../../Services/CartContext";
import "./Navbar.css"

// Navbar component displays Link to homepage, cart icon and subtotal
export default function Navbar() {
  const { productList } = useProductContext();
  const { shoppingCart, setShoppingCart } = useCartContext();
  const [ isCartVisible, setIsCartVisible ] = useState(false);

  // Calculate total cart price
  const cartTotalPrice = shoppingCart.reduce(
    (accumulator, product) =>
      accumulator + product.product.price * product.quantity,
    0
  );

  // Helper function rounds total price to nearest 100th
  function roundTotalHelper(number) {
    return Math.round(number * 100) / 100;
  }

  const roundedTotalPrice = roundTotalHelper(cartTotalPrice);

  return (
    
      <nav className="shopping-nav">
        <div className="nav-text-container text-white">
                        <div className=" font-bold text-5xl">Brilliant</div>
                        <h2 className=" font-thin text-4xl">Basics</h2>
        </div>
       <div className="flex flex-row gap-10">
         <a href="/Brilliant-Basics/" >
          <img className="w-10" src="https://img.icons8.com/plumpy/24/exterior--v1.png" alt="Home"/>
        </a>
        <div className=" cursor-pointer " onClick={() => setIsCartVisible(!isCartVisible)}>
          <CartSvg/>
          {isCartVisible ? <p className="text-white absolute">${roundedTotalPrice}</p> : <></>}
        </div>
          <TransitionGroup>
            {isCartVisible && (
              <CSSTransition 
                in={isCartVisible}
                timeout={3000}
                classNames="cart-slide-in"
                >
                  <CartList isCartVisible={()=> setIsCartVisible(!isCartVisible)}/>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div> 
       
      </nav>
  
  );
}