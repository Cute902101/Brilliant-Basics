import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartSvg from "../assets/images/CartSvg";
import { useProductContext } from "../Services/ProductContext";
import { useCartContext } from "../Services/CartContext";

// Navbar component displays Link to homepage, cart icon and subtotal
export default function Navbar() {
  const { productList } = useProductContext();
  const { shoppingCart, setShoppingCart } = useCartContext();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <>
      <div className="fixed flex flex-row w-[180px] sm:w-[100vw] justify-between h-16 bg-black shadow-lg overflow-hidden z-[1000]">
        <Link to="/Brilliant-Basics" className="text-slate-300 text-[18px] sm:text-[20px] font-semibold p-4">
          {/* Link to the home page */}
          Brilliant Basics.
        </Link>

        {/* Display cart icon along with the subtotal via roundedTotalPrice */}
        <div className="z-[1000] fixed right-[-40px] top-0 bg-black text-white items-center flex flex-row justify-center w-full sm:w-[350px] h-16 mr-10">
          {isMobileScreen ? (
            <Link
              className="object-scale-down" 
              to="/Brilliant-Basics/MobileCart"
            >
              <CartSvg />
            </Link>
          ) : (
            <CartSvg />
          )}
        </div>

        <div className="z-[1000] fixed right-[20px]">
          <p className="flex flex-col border-r-0 border-l-0 border-t-0 border-b-2 border-white text-white">
            Subtotal
          </p>
          <div className="text-white">${roundedTotalPrice}</div>
        </div>
      </div>
    </>
  );
}