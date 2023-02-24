import React, { useState } from "react";

import styled from "styled-components";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const nameHandler = (event) => {
    if (enteredName.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredName(event.target.value);
  };
  const ageHandler = (event) => {
    if (enteredAge.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
    }

    const userData = {
      userName: enteredName,
      userAge: enteredAge,
      userId: Math.random().toString(),
    };

    props.onSaveUser(userData);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Wrapper inValid={!isValid}>
      <form className="form-control" onSubmit={submitHandler}>
        <div className="input">
          <label htmlFor="username">UserName</label>
          <input type="text" value={enteredName} id="username" onChange={nameHandler}></input>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" value={enteredAge} min={"0"} onChange={ageHandler}></input>
        </div>
        <div className="btn">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  .form-control {
    position: relative;
    height: 15rem;
    width: 40rem;
    border-radius: 14px;
    background: #fff;
    display: flex;
    flex-direction: column;
  }

  .input {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem 2rem;
  }
  .input label {
    width: 100%;
    text-align: left;
    font-size: 1.3rem;
    font-weight: bold;
    color: ${(props) => {
      return props.inValid ? "red" : "black";
    }};
  }
  .input input {
    width: 100%;
    height: 1.7rem;
    background: ${(props) => {
      return props.inValid ? "orange" : "#fff";
    }};
  }

  .btn {
    margin: 0 0 1.2rem 2rem;
  }
  .btn button {
    padding: 0.5rem 1.8rem;
    background: blueviolet;
    color: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
  }
`;

export default UserForm;
