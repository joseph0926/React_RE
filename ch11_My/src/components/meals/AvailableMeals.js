import React from "react";

import MealItem from "./MealItem";
import Card from "../UI/Card";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <div className={styles.meals}>
      <Card>
        <ul>
          {props.meals.map((meal) => {
            return <MealItem key={meal.id} meal={meal}></MealItem>;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
