import React, { useState, useEffect } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // const nameInputValue = nameInputRef.current.value;
    if (!enteredNameIsValid) {
      return;
    }

    resetName();
  };

  const nameInputclasses = nameInputHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputclasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">입력값이 없습니다</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
