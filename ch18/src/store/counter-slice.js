import { createSlice } from "@reduxjs/toolkit";

const counterInitState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitState,
  reducers: {
    add(state) {
      state.counter++;
    },
    sub(state) {
      state.counter--;
    },
    add5(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
