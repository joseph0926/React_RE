import React from "react";

import CartIcon from "../cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <div className={styles.button} onClick={props.onModalOpen}>
      <div className={styles.icon}>
        <CartIcon></CartIcon>
      </div>
      Your Cart
      <div className={styles.badge}>{0}</div>
    </div>
  );
};

export default HeaderCartButton;
