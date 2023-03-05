import React, { useState } from "react";
import useInput from "../../hooks/use-input";

import styles from "./CartForm.module.css";

const CartForm = (props) => {
  const confirmHandler = () => {
    props.onConfirm(true);
  };

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameIsError,
    valueChangeHandler: nameChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => {
    return value.trim() !== "";
  });
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsError,
    valueChangeHandler: emailChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => {
    return value.trim() !== "" && value.includes("@");
  });

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    const userData = {
      name: enteredName,
      email: enteredEmail,
    };
    props.onConfirm(true);

    props.onSubmitOrder(userData);
    resetName();
    resetEmail();
  };

  const valueInputClasses =
    enteredNameIsError || enteredEmailIsError ? `${styles["form-control"]} ${styles.invalid}` : `${styles["form-control"]}`;

  return (
    <>
      <form
        onSubmit={
          props.onDidOrder
            ? submitHandler
            : (e) => {
                e.preventDefault();
              }
        }
        className={valueInputClasses}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameInputBlurHandler}></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailInputBlurHandler}></input>
        </div>
        <div>
          <button type="button" disabled={!formIsValid}>
            Confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default CartForm;
