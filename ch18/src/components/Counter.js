import { useSelector, useDispatch } from "react-redux";

import { counterAction } from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFn = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  const toggle = useSelector((state) => {
    return state.counter.showCounter;
  });

  const addHandler = () => {
    dispatchFn(counterAction.add());
  };
  const add5Handler = () => {
    dispatchFn(counterAction.add5(5));
  };
  const subHandler = () => {
    dispatchFn(counterAction.sub());
  };

  const toggleCounterHandler = () => {
    dispatchFn(counterAction.toggleCounter());
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
