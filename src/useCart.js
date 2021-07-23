import {  useContext } from "react";
import { store } from "./store";

const useCart =  () => {
  const {
    state: { products,cartItems },
    dispatch,
  } = useContext(store);

  const setCartItems = (items) => {
    dispatch({ type: "SET_CART_ITEMS", payload: items });
  };

  const addCartItem = (id) => {
    const item = products.find((product) => product.id === id);

    const itemIndex = cartItems.findIndex(
      (currentItem) => currentItem.id === id
    );
    if (itemIndex === -1) {
      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.id === id
            ? {
                ...item,
                quantity: parseInt(currentItem.quantity) + 1,
              }
            : currentItem
        )
      );
    }
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    const res = window.confirm("Are sure perform the Action ?");
    if (res === true) {
      setCartItems([]);
    }
  };

  const total = cartItems.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );

  return {
    total,
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart,
  };
};

export default useCart;
