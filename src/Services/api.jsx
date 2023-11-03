import React from "react";
import { useState, useEffect} from "react";
// Hook to fetch the list of products from API
const fetchProducts = () => {
  // State variables to manage list of products, loading screen, and error screen
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use effect for fetching API data when components mount
  useEffect(() => {
    fetch ('https://fakestoreapi.com/products', {mode: "cors"})
      .then(response => {
        if (!response.ok) {
          throw new Error (`Failed to fetch: ${response.status} - ${response.statusText}`); // Request error status for debugging
        }
          return response.json();
      })
      .then(data => {
        setProductList(data); // Set data to productList
      })
      
      .catch((error) => {
        setError(error.message);
        console.error('An error occurred:', error);
      })
      .finally(()=> setLoading(false));

  }, []);
  
  return {productList, loading, error}; // Return products, loading, error states for components to use 
  
};

export {fetchProducts};