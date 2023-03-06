import { Suspense } from "react";
import { defer, json, useLoaderData, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvent) => {
          return <EventsList events={loadedEvent}></EventsList>;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvent = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: "데이터를 가져올 수 없습니다."}

    // throw new Response(
    //   JSON.stringify({
    //     message: "데이터를 가져오는데 실패햐였습니다,,,",
    //   }),
    //   { status: 500 }
    // );

    return json(
      {
        message: "데이터를 가져오는데 실패햐였습니다,,,",
      },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvent(),
  });
};
