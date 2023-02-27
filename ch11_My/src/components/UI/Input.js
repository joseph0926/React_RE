import React from "react";

import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.input}>
      <label htmlFor="amount">Amount</label>
      <input type="number" id="amount"></input>
    </div>
  );
};

export default Input;
