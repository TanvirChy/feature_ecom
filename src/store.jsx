import { createContext, useReducer } from "react";

const init = {
  products:[],
  cartItems: [],
  keyword:''
};

const store = createContext(init);
const { Provider } = store;

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      };
    case "SET_KEYWORD":
      return {
        ...state,
        keyword: action.payload
      };

    default:
      return state;
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
