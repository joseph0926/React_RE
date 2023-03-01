import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmout = `$${cartCtx.totalAmout.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={removeCartItemHandler.bind(null, item.id)}
              onAdd={addCartItemHandler.bind(null, item)}
            ></CartItem>
          );
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmout}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
