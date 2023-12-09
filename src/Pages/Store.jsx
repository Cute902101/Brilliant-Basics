import React from "react";
import { ProductProvider } from "../Services/ProductContext";
import { CartProvider } from "../Services/CartContext";
import Navbar from "../components/Navbar";
import ProductCardList from "../components/ProductCardList/ProductCardList";
import ShoppingCartList from "../components/ShoppingCartList/ShoppingCartList";

export default function Store() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <div className="flex flex-row justify-between">
          <ProductCardList />
          <ShoppingCartList/>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}