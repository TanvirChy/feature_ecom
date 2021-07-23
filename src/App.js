import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import ThemeContext from "./ThemeContext";
import Checkout from "./Checkout/Checkout";
import ProductDetails from "./ProductList/ProductDetails";
import Home from "./Home/Home";
import { StateProvider } from "./store";
import Cart from './Cart/Cart'


const App = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((isDark) => !isDark);
  };

  return (
    <StateProvider>
      <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
        <div className={`App ${dark ? "dark" : "light"}`}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/product/:productId" component={ProductDetails} />
              <Route path="/" component={Home} />
            </Switch>
            <Cart />
          </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
};

export default App;
