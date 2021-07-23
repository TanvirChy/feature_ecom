import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import { store } from "../store";

const NavBar = () => {
  const { dark, toggle } = useContext(ThemeContext);
  const { dispatch } = useContext(store);
  const handleChange = (e) => {
    dispatch({ type:'SET_KEYWORD', payload: e.target.value});
  };

  return (
    <div className="nav-bar">
      <span>My Shop {dark ? "dark" : "light"}</span>
      <input type="text" onChange={handleChange} placeholder="search" />
      <button onClick={toggle}>Change Theme</button>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default NavBar;
