import React from "react";
import { ProductProvider } from "../Services/ProductContext";
import { CartProvider } from "../Services/CartContext";
import ProductCardList from "../components/ProductCardList/ProductCardList";


export default function Store () {

    return(
        <>
        <ProductProvider>
            <CartProvider>
                <ProductCardList></ProductCardList>
            </CartProvider>
        </ProductProvider>
        </>
    );
};