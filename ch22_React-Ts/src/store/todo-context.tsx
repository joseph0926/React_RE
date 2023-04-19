import React, { PropsWithChildren, createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = { items: Todo[]; addTodo: (todo: string) => void; removeTodo: (id: string) => void };

export const TodoContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };
  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;
