import React from "react";
import { ProductProvider } from "../Services/ProductContext";
import { CartProvider } from "../Services/CartContext";
import Navbar from "../components/Navbar";
import MobileShoppingCart from "../components/ShoppingCartList/mobileShoppingCart";

export default function MobileCart() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar/>
        <MobileShoppingCart/>
      </CartProvider>
    </ProductProvider>
  );
}