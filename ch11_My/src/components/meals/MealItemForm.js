import React, { useContext } from "react";

import Input from "../UI/Input";
import CartContext from "../../context/cart-context";

import styles from "./MealItemForm.module.css";

const MealItemForm = () => {
  const cartCtx = useContext(CartContext);

  return (
    <form className={styles.form} onSubmit={cartCtx.submitHandler}>
      <Input></Input>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
