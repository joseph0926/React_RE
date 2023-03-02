import { useSelector, useDispatch } from "react-redux";

import { authAction } from "../store/auth-slice";

import classes from "./Header.module.css";

const Header = () => {
  const dispatchFn = useDispatch();
  const isLoggedIn = useSelector((state) => {
    return state.auth.isAuth;
  });

  const logoutHandler = () => {
    dispatchFn(authAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLoggedIn && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
