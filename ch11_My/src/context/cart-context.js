import React, { useState, useReducer } from "react";

import DUMMY_MEALS from "../dummy-meals";

const CartContext = React.createContext({
  cart: [],
  selctItem: (id) => {},
  submitHandler: () => {},
});

// const cartReducerFn = (state, action) => {
//   if (action.type === "ADD_TO_CART") {
//     return {};
//   }
//   return { amount: 0 };
// };

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [addItem, setAddItem] = useState({});
  // const [cartState, dispatchCart] = useReducer(cartReducerFn, { amount: 0 });

  let selectedItem;
  const selctItem = (id) => {
    selectedItem = DUMMY_MEALS.find((meal) => {
      return meal.id === id;
    });

    setAddItem(selectedItem);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setCart((prevItem) => {
      return [...prevItem, addItem];
    });
    console.log(addItem);
    console.log(selectedItem);
  };

  return (
    <CartContext.Provider value={{ cart: cart, selctItem: selctItem, submitHandler: submitHandler }}>{props.children}</CartContext.Provider>
  );
};

export default CartContext;
