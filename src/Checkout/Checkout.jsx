import React, { useState } from "react";
import useCart from "../useCart";
import data from "../data";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const { total, clearCart } = useCart(data);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="checkout">
      <h3> Checkout total :{total} </h3>
      <div>
        { total > 0 ? (<div className="cart-item">
          <div className="info">
            <span>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Adress "
              />
            </span>
            <button
              style={{
                backgroundColor: !address ? "grey" : "green",
                color: "white",
              }}
              disable={`${!address}`}
              onClick={() => address && clearCart()}
            >
              Chekout
            </button>
          </div>
        </div>):("Cart is empty")}
      </div>
    </div>
  );
};

export default Checkout;
