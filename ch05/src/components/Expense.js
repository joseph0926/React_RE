import React, { useState, Fragment } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expense.css";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);
  const filteredExpense = props.expense.filter((fe) => {
    return fe.date.getFullYear().toString() === filteredYear;
  });

  const isEmpty = filteredExpense.length === 0;

  return (
    <Fragment>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSelected={filterHandler}></ExpenseFilter>
        <ExpenseChart expense={filteredExpense}></ExpenseChart>
        {isEmpty && <p>No Expense Found</p>}
        {!isEmpty &&
          filteredExpense.map((item) => {
            return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}></ExpenseItem>;
          })}
      </Card>
    </Fragment>
  );
};

export default Expense;
