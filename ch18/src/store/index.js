import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "ADD") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "ADD5") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "SUB") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
