import React, { useState, Fragment } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);

  return (
    <Fragment>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSelected={filterHandler}></ExpenseFilter>
        <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date}></ExpenseItem>
      </Card>
    </Fragment>
  );
};

export default Expense;
