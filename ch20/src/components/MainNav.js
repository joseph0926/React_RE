import React from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? styles.active : undefined;
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive ? styles.active : undefined;
              }}
            >
              Proucts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
