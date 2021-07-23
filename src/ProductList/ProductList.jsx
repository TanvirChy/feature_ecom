import React, { useContext, useEffect } from "react";
import ThemeContext from "../ThemeContext";
import ListProduct from "./ListProduct";
import useCart from "../useCart";
import { store } from "../store";
import data from "../data";

const ProductList = () => {
  const { addCartItem } = useCart();
  const { dark } = useContext(ThemeContext);


  const {
    state: { keyword, products },
    dispatch,
  } = useContext(store);
  
  useEffect(() => {
    const results = data.filter(
      (product) =>
        product.title.includes(keyword) || product.brand.includes(keyword)
    );
    dispatch({ type: "SET_PRODUCTS", payload: results });
  }, [dispatch, keyword]);



  return (
    <div className={`product-list ${dark ? "dark" : "light"}`}>
      {products.map((product) => (
        <ListProduct {...product} key={product.id} addCartItem={addCartItem} />
      ))}
    </div>
  );
};

export default ProductList;
