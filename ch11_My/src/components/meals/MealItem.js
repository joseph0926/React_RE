import React from "react";

import MealItemForm from "./MealItemForm";

import styles from "./MealItem.module.css";

const MealItem = () => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>Name</h3>
        <p className={styles.description}>dummy</p>
        <h3 className={styles.price}>$19.99</h3>
      </div>
      <MealItemForm></MealItemForm>
    </li>
  );
};

export default MealItem;
