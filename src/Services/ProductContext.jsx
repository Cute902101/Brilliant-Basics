import { fetchProducts } from "./api";
import { createContext, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { productList, loading, error } = fetchProducts();

  return (
    <ProductContext.Provider value={{ productList, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
