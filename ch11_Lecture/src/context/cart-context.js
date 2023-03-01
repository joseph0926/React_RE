import React, { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmout: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const initCartState = {
  items: [],
  totalAmout: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const newTotalAmount = state.totalAmout + action.payload.price * action.payload.amount;

    const exCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.payload.id;
    });
    const exCartItem = state.items[exCartItemIndex];
    let updatedItems;
    if (exCartItem) {
      const updatedItem = {
        ...exCartItem,
        amount: exCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }
    return { items: updatedItems, totalAmout: newTotalAmount };
  }
  if (action.type === "REMOVE_FROM_CART") {
    const exCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.payload.id;
    });
    const exCartItem = state.items[exCartItemIndex];
    const updatedTotalAmount = state.totalAmout - exCartItem.price;
    let updatedItems;
    if (exCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    } else {
      const updatedItem = { ...exCartItem, amount: exCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmout: updatedTotalAmount,
    };
  }

  return initCartState;
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartFn] = useReducer(cartReducer, initCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartFn({ type: "ADD_TO_CART", payload: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartFn({ type: "REMOVE_FROM_CART", payload: id });
  };

  const ContextValue = {
    items: cartState.items,
    totalAmout: cartState.totalAmout,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={ContextValue}>{props.children}</CartContext.Provider>;
};

export default CartContext;
