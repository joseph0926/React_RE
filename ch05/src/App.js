import React, { Fragment, useState } from "react";

import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSE = [
  { id: "d1", title: "Messi", amount: 650, date: new Date(2023, 1, 30) },
  { id: "d2", title: "Pedri", amount: 1050, date: new Date(2025, 2, 30) },
  { id: "d3", title: "Dejong", amount: 650, date: new Date(2024, 2, 30) },
  { id: "d4", title: "Gavi", amount: 650, date: new Date(2024, 5, 30) },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseDataHandler = (expense) => {
    setExpense((prevEx) => {
      return [expense, ...prevEx];
    });
  };

  return (
    <Fragment>
      <NewExpense onExpense={addExpenseDataHandler}></NewExpense>
      <Expense expense={expense}></Expense>
    </Fragment>
  );
};

export default App;
