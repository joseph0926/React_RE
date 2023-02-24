import React from "react";

import UserItem from "./UserItem";
import Card from "../UI/Card";

import styled from "styled-components";

const UserList = (props) => {
  return (
    <Card>
      <Wrapper>
        {props.userList.map((user) => {
          return <UserItem user={user}></UserItem>;
        })}
      </Wrapper>
    </Card>
  );
};

const Wrapper = styled.ul`
  list-style: none;
  padding: 1rem;
`;

export default UserList;
