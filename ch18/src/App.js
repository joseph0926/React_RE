import { Fragment } from "react";
import { useSelector } from "react-redux";

import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedIn = useSelector((state) => {
    return state.auth.isAuth;
  });

  return (
    <Fragment>
      <Header></Header>
      {!isLoggedIn && <Auth></Auth>}
      {isLoggedIn && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
