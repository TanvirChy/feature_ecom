import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import ListProduct from "./ListProduct";
import useCart from "../useCart";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addCartItem } = useCart(data);



  const product = data.find((p) => p.id === parseInt(productId));
  return (
    <div>
      <ListProduct {...product} addCartItem={addCartItem} />
    </div>
  );
};

export default ProductDetails;
