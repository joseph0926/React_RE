import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-action";
import { fetchCartData } from "./store/cart-action";

let isInitial = true;

function App() {
  const dispatchFn = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => {
    return state.cart;
  });
  const notification = useSelector((state) => {
    return state.ui.notification;
  });

  /* useEffect(() => {
    const sendCartData = async () => {
      dispatchFn(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch("https://react-customhooks-22616-default-rtdb.firebaseio.com/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Error!");
      }
      const data = await response.json();

      dispatchFn(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatchFn(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed",
        })
      );
    });
  }, [cart, dispatchFn]); */

  useEffect(() => {
    dispatchFn(fetchCartData());
  }, [dispatchFn]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatchFn(sendCartData(cart));
    }
  }, [cart, dispatchFn]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}></Notification>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
