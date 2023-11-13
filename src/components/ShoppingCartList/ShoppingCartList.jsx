import React from "react";
import { useCartContext } from "../../Services/CartContext"; 
import EmptyCartSvg from "../../assets/images/EmptyCartSvg";

// Display the shopping cart
export default function CartList() {
  const { shoppingCart, setShoppingCart } = useCartContext();

  const handleEditCart = (productId, newQuantity) => {
    // Replace the old quantity with the edited quantity of the item
    const editedCartItem = shoppingCart.map((cartItem) => 
      cartItem.product.id === productId
      ? {...cartItem, quantity: newQuantity}
      : cartItem
    );
  
    // Filter the item from the cart if the new quantity falls below one. Else, update with new quantity 
    if (newQuantity <= 0) {
      const removedCartItem = shoppingCart.filter(
        (cartItem) => cartItem.product.id != productId
      );
      setShoppingCart(removedCartItem);    
    } else {
      setShoppingCart(editedCartItem)
    }

  }

  // Check for empty shopping cart
  if (shoppingCart.length <= 0) {
    // Render UI for an empty shopping cart
    return (
      <div className="fixed right-0 overflow-scroll hidden-scrollbar">
        <ul className="m-0 flex justify-center items-center flex-col list-none gap-x-[10px] p-[20px] w-[350px] sm:grid-cols-[0.75fr_1fr] bg-gradient-to-b from-black to-slate-800 h-[100vh]">
          <EmptyCartSvg />
          <li className="text-white">Your Cart is Empty</li>
        </ul>
      </div>
    );
  } else {

    // Render UI for shopping cart
    return (
      <div className="fixed right-0 overflow-scroll hidden-scrollbar bg-gradient-to-b from-black to-slate-800 h-[full]">
        <ul className="m-0 flex flex-col list-none gap-x-[10px] p-[20px] w-[350px] sm:grid-cols-[0.75fr_1fr]  h-[100vh] rounded-md">
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
                        > - </button>
                      <input
                        className="w-10 h-10 px-1 bg-inherit text-white border-b-2"
                        type="number"
                        value={cart.quantity}
                      />
                      <button 
                        className="p-2 font-bold"
                        onClick={() => handleEditCart(cart.product.id, cart.quantity + 1)}
                        > + </button>
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