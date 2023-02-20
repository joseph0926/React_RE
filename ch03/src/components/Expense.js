import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

import "./Expense.css";

const Expense = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem title={props.expense[0].title} amount={props.expense[0].amount} date={props.expense[0].date}></ExpenseItem>
    </Card>
  );
};

export default Expense;
