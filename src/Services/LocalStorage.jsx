export const retrieveLocalStorage = () => {
    const cartData = localStorage.getItem('shoppingCart');
    return cartData ? JSON.parse(cartData) : [];
  };
  
  export const updateLocalStorage = (shoppingCart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  };