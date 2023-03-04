import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";

import styles from "./Root.module.css";

const Root = () => {
  return (
    <Fragment>
      <MainNav></MainNav>
      <div className={styles.container}>
        <Outlet></Outlet>
      </div>
    </Fragment>
  );
};

export default Root;
