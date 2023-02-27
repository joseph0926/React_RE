import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "./MealsSummary";

import IMG from "../../meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <nav className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onModalOpen={props.onModalOpen}></HeaderCartButton>
      </nav>
      <div className={styles["main-image"]}>
        <img src={IMG}></img>
      </div>
      <MealsSummary></MealsSummary>
    </Fragment>
  );
};

export default Header;
