import React, { useReducer } from "react";

const CartContext = React.createContext({
  addAmount: () => {},
  addToCart: () => {},
  totalAmount: 0,
});

const cartReducerFn = (state, action) => {
  return { amount: 0, addToCart: () => {} };
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer();

  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartContext;
