import React from "react";
import { ProductProvider } from "../Services/ProductContext";
import { CartProvider } from "../Services/CartContext";
import Navbar from "../components/Navbar/Navbar";
import ProductCardList from "../components/ProductCardList/ProductCardList";
import ShoppingCartList from "../components/ShoppingCartList/ShoppingCartList";

export default function Store() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <ProductCardList />
         
      </CartProvider>
    </ProductProvider>
  );
}