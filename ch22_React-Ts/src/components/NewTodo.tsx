import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/todo-context";

const NewTodo = () => {
  const todoCtx = useContext(TodoContext);

  const inputTodoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredTodo = inputTodoRef.current!.value;
    if (enteredTodo.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo Text</label>
      <input type="text" id="todo" ref={inputTodoRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
