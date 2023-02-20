import React, { Fragment } from "react";

import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense";

const App = () => {
  const expense = [
    { title: "Messi", amount: 650, date: new Date(2023, 6, 30) },
    { title: "Pedri", amount: 1050, date: new Date(2025, 6, 30) },
    { title: "Dejong", amount: 650, date: new Date(2024, 6, 30) },
    { title: "Gavi", amount: 650, date: new Date(2024, 6, 30) },
  ];

  const addExpenseDataHandler = (expense) => {
    console.log(expense);
  };

  return (
    <Fragment>
      <NewExpense onExpense={addExpenseDataHandler}></NewExpense>
      <Expense expense={expense}></Expense>
    </Fragment>
  );
};

export default App;
