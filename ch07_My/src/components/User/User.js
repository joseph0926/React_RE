import React, { useState } from "react";

import UserForm from "./UserForm";
import UserList from "./UserList";

import styled from "styled-components";

const User = (props) => {
  const [users, setUsers] = useState([]);
  const saveUserHandler = (userData) => {
    console.log(userData);
    const { userName, userAge, userId } = userData;
    setUsers((prevState) => {
      return [
        ...prevState,
        {
          userName: userName,
          userAge: userAge,
          userId: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <Wrapper>
      <UserForm onSaveUser={saveUserHandler}></UserForm>
      <UserList userList={users}></UserList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default User;
