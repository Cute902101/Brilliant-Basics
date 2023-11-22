import React, { useState } from "react";
import { useCartContext } from "../../Services/CartContext";
import { useProductContext } from "../../Services/ProductContext";
import { updateLocalStorage } from "../../Services/localStorage";

export default function AddToCart({ addToCart, product }) {
  const { productList, setProductList } = useProductContext();
  const { shoppingCart, setShoppingCart } = useCartContext();

  // State tracks button hovers and count
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [count, setCount] = useState(0);

  // Handles the button hover state
  const handleHover = () => {
    setIsButtonHovered(!isButtonHovered);
  };

  // Handles the addition of item quantity
  const handleAdd = () => {
    setCount(count + 1);
  };

  // Handles subtraction of item quantity
  const handleSubtract = () => {
    setCount(count >= 1 ? count - 1 : count);
  };

  // Render the UI for addition and subtraction of product quantity functions
  return (
    <div>
      {/* Add to cart button */}
      <div className="p-2 mb-10">
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={() => addToCart(count, product, setCount)}
          className="relative p-1 z-50 shadow-lg cursor-pointer bg-black text-white text-[14px] rounded w-[150px] h-10"
        >
          Add To Cart
          {/* Div for sliding button effect */}
          <div
            className={`absolute z-50 top-0 left-0 bg-[#a9a9a9] w-20 h-10 opacity-0 ${
              isButtonHovered ? "exit-sliding-button" : "sliding-button"
            }`}
          ></div>
        </button>
      </div>
      {/* UI for setting the desired item quantity */}
      <div className="flex">
        <button onClick={handleSubtract} className="p-2 font-bold">
          -
        </button>
        <input
          className="w-10 h-10 px-1 bg-inherit text-white border-b-2"
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
        />
        <button onClick={handleAdd} className="p-2 font-bold">
          +
        </button>
      </div>
    </div>
  );
}