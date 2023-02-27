import React from "react";

import MealItem from "./MealItem";
import Card from "../UI/Card";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          <MealItem></MealItem>
          <MealItem></MealItem>
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
