import { useState, useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartForm from "./CartForm";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [hasConfirm, setHasConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [didOrder, setDidOrder] = useState(false);

  const hasConfirmHandler = (isComfirm) => {
    isComfirm ? setHasConfirm(true) : setHasConfirm(false);
  };

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const didOrderHandler = () => {
    setDidOrder(true);
    props.onClose();
  };

  const submitOrderHandler = async (userData) => {
    setIsLoading(true);
    const response = await fetch("https://react-customhooks-22616-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsLoading(false);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {hasItems && !hasConfirm && (
        <div className={classes.form}>
          <CartForm onConfirm={hasConfirmHandler} onSubmitOrder={submitOrderHandler} onDidOrder={didOrder}></CartForm>
        </div>
      )}
      {hasItems && hasConfirm && <h2>Confirm Success!</h2>}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && hasConfirm && (
          <button className={classes.button} onClick={didOrderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
