import React from "react";
import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <>
      <EventForm></EventForm>
    </>
  );
};

export default NewEventPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const enteredValue = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enteredValue),
  });
  if (!response.ok) {
    return json(
      {
        message: "이벤트를 정상적으로 저장하지 못하였습니다,,,",
      },
      { status: 500 }
    );
  }
  return redirect("/events");
};
