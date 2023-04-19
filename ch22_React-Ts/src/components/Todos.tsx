import React, { useContext } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

const Todos = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul>
      {todoCtx.items.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default Todos;
