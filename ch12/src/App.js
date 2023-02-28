import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const toggleShowPHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevState) => {
        return !prevState;
      });
    }
  }, []);

  const allowHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP}></DemoOutput>
      <Button onClick={toggleShowPHandler}>Toggle</Button>
      <Button onClick={allowHandler}>Allow</Button>
    </div>
  );
}

export default App;
