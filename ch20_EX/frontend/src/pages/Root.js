import React, { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const Root = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet></Outlet>
      </main>
    </Fragment>
  );
};

export default Root;
