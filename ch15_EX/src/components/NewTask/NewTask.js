import { useCallback, useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const httpData = useHttp();

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const { isLoading, error, httpDataFn: sendTaskRequest } = httpData;

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-customhooks-22616-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: { "Content-type": "application/json" },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
