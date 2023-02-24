import React from "react";

import styled from "styled-components";

const UserItem = (props) => {
  const { user } = props;
  console.log(user);
  return (
    <Wrapper key={user.userId}>
      {user.userName} ({user.userAge} years old)
    </Wrapper>
  );
};

const Wrapper = styled.li`
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  padding: 0.5rem;
`;

export default UserItem;
