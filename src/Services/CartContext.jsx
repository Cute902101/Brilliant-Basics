import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([]);


    return ( 
        <CartContext.Provider value={{shoppingCart, setShoppingCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext (CartContext)
}
