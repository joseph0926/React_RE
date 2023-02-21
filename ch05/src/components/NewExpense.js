import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const showFormHandler = () => {
    setIsFormOpen(true);
  };
  const hideFormHandler = () => {
    setIsFormOpen(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormOpen && <button onClick={showFormHandler}>Add New Expenese</button>}
      {isFormOpen && <ExpenseForm onClose={hideFormHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
