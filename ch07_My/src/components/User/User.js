import React, { Fragment, useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";

const User = (props) => {
  const [users, setUsers] = useState([]);
  const saveUserHandler = (userData) => {
    setUsers((prevState) => {
      return [userData, ...prevState];
    });
  };

  return (
    <Fragment>
      <UserForm onSaveUser={saveUserHandler}></UserForm>
      <UserList userList={users}></UserList>
    </Fragment>
  );
};

export default User;
