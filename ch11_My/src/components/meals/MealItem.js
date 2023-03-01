import React, { useState, useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../context/cart-context";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  cartCtx.selctItem(props.meal.id);

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={styles.description}>{props.meal.description}</p>
        <h3 className={styles.price}>${props.meal.price}</h3>
      </div>
      <MealItemForm></MealItemForm>
    </li>
  );
};

export default MealItem;
