import React from "react";

import UserItem from "./UserItem";

import styled from "styled-components";

const UserList = (props) => {
  return (
    <Wrapper>
      <UserItem></UserItem>
    </Wrapper>
  );
};

const Wrapper = styled.ul``;

export default UserList;
