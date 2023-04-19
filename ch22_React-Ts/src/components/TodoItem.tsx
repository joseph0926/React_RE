import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodoContext } from "../store/todo-context";

const TodoItem: React.FC<{ item: Todo }> = ({ item }) => {
  const todoCtx = useContext(TodoContext);

  return <li onClick={todoCtx.removeTodo.bind(null, item.id)}>{item.text}</li>;
};

export default TodoItem;
