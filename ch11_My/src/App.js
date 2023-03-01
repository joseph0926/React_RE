import React, { Fragment, useState } from "react";

import Header from "./components/home/Header";
import AvailableMeals from "./components/meals/AvailableMeals";
import Cart from "./components/cart/Cart";

import DUMMY_MEALS from "./dummy-meals";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpenHandler = () => {
    setIsModalOpen(true);
  };
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      {isModalOpen && <Cart onModalClose={modalCloseHandler}></Cart>}
      <Header onModalOpen={modalOpenHandler}></Header>
      <AvailableMeals meals={DUMMY_MEALS}></AvailableMeals>
    </Fragment>
  );
};

export default App;
