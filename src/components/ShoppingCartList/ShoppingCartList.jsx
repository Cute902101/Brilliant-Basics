import React, { useState, useEffect } from "react";
import { useCartContext } from "../../Services/CartContext";
import { retrieveLocalStorage, updateLocalStorage } from "../../Services/localStorage";
import EmptyCartSvg from "../../assets/images/EmptyCartSvg";
import "./ShoppingCartList.css"

// Display the shopping cart
export default function CartList({isCartVisible}) {
  const { shoppingCart, setShoppingCart } = useCartContext();
 

  const handleEditCart = (productId, newQuantity) => {
    // Replace the old quantity with the edited quantity of the item
    const editedCartItem = shoppingCart.map((cartItem) =>
      cartItem.product.id === productId
        ? { ...cartItem, quantity: newQuantity }
        : cartItem
    );

    // Filter the item from the cart if the new quantity falls below one. Else, update with new quantity
    if (newQuantity <= 0) {
      const removedCartItem = shoppingCart.filter(
        (cartItem) => cartItem.product.id !== productId
      );
      setShoppingCart(removedCartItem);
      updateLocalStorage(removedCartItem);
    } else {
      setShoppingCart(editedCartItem);
      updateLocalStorage(editedCartItem);
    }
  };

  useEffect(() => {
    const savedCart = retrieveLocalStorage();
    setShoppingCart(savedCart);
  }, [setShoppingCart]);


  // Check for empty shopping cart
  if (shoppingCart.length <= 0) {
    // Render UI for an empty shopping cart
    return (
      <div className="shopping-cart-container cart-slide-in">
        <ul className="shopping-cart">
          <EmptyCartSvg />
          <li className="text-white">Your Cart is Empty</li>
          <li onClick={isCartVisible} className="text-green-400 hover:text-blue-400 hover:cursor-pointer">Continue Shopping</li>
        </ul>
      </div>
    );
  } else {
    // Render UI for shopping cart
    return (
      <div className="shopping-cart-container cart-slide-in">
        <div className="p-2 absolute"><img onClick={isCartVisible} className="hover:cursor-pointer" width="34" height="34" src="https://img.icons8.com/plumpy/24/delete-sign--v2.png" alt="delete-sign--v2"/></div>
        <ul className="mt-10 flex flex-col list-none gap-x-[10px] p-[20px] w-[100%] h-[100vh] rounded-md overflow-y-auto hidden-scrollbar">
          {/* Loop through each shopping cart item */}
          {shoppingCart.map((cart) => (
            <li className="flex flex-col w-full h-[250px] mb-36" key={cart.product.id}>
              <div className="border border-b-white border-t-transparent border-r-transparent border-l-transparent">
                <div className="text-white grid grid-col-2 grid-rows-2 gap-4 items-center">
                  {/* Display product image */}
                  <img className="w-40 h-40 bg-white rounded-lg object-scale-down col-span-1 row-span-1" src={cart.product.image} alt={cart.product.title} />
                  <div className="mt-[-100px] col-span-1 row-span-2">
                    {/* Display product price */}
                    <p className="text-white">${cart.product.price}</p>
                    {/* Edit the quantity of this cart item */}
                    <div>
                      <button
                        className="p-2 font-bold"
                        onClick={() => handleEditCart(cart.product.id, cart.quantity - 1)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        className="w-10 h-10 px-1 bg-inherit text-white border-b-2"
                        type="number"
                        value={cart.quantity}
                      />
                      <button
                        className="p-2 font-bold"
                        onClick={() => handleEditCart(cart.product.id, cart.quantity + 1)}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                  {/* Display product title */}
                  <div className="text-[18px] font-medium leading-[1.2] text-white col-span-2 row-span-1 mt-[-300px]">
                    {cart.product.title}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}