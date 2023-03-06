import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return (
    <>
      <EventItem event={event}></EventItem>
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!response.ok) {
    return json(
      {
        message: "해당 상품의 자세한 데이터를 가져오는데 실패햐였습니다,,,",
      },
      { status: 500 }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    return json(
      {
        message: "해당 상품을 삭제하는데 실패햐였습니다,,,",
      },
      { status: 500 }
    );
  }
  return redirect("/events");
};
