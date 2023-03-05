import React, { useState, useEffect, useCallback } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMealse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchMeals = useCallback(async () => {
    setIsError(null);
    setIsLoading(true);

    try {
      const response = await fetch("https://react-customhooks-22616-default-rtdb.firebaseio.com/meals.json");
      if (!response.ok) {
        throw new Error("Error! -> 데이터를 가져오는 중 문제가 발생하였습니다.");
      }
      const data = await response.json();

      const DUMMY_MEALS = [];

      for (const key in data) {
        DUMMY_MEALS.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMealse(DUMMY_MEALS);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return (
    <section className={classes.meals}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
      {!isLoading && isError && <p>Error!!!!!</p>}
    </section>
  );
};

export default AvailableMeals;
