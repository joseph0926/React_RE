import React, { Fragment, useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (evnet) => {
    setEnteredAmount(evnet.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseDate);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  /*
  const [userInput, setUserInput] = useState({
    title: "",
    amount: ""
  });
  const titleInputHandler = (e) => {
    /*
    setUserInput({
      ...userInput,
      title: e.target.value
    })
    
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value
      }
    });
  }
  */

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onClose}>
            Cancle
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>

      {/* {!isFormOpen && <button onClick={showFormHandler}>Add New Expense</button>} */}
    </Fragment>
  );
};

export default ExpenseForm;
