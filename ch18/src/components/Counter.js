import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFn = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });
  const toggle = useSelector((state) => {
    return state.showCounter;
  });

  const addHandler = () => {
    dispatchFn({ type: "ADD" });
  };
  const add5Handler = () => {
    dispatchFn({ type: "ADD5", payload: 5 });
  };
  const subHandler = () => {
    dispatchFn({ type: "SUB" });
  };

  const toggleCounterHandler = () => {
    dispatchFn({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={addHandler}>+</button>
        <button onClick={add5Handler}>+ 5</button>
        <button onClick={subHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
