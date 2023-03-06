import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

const EventRoot = () => {
  return (
    <Fragment>
      <EventsNavigation></EventsNavigation>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default EventRoot;
