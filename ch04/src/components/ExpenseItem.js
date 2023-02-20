import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>제품명</h2>
        <div className="expense-item__price">$251.2</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
