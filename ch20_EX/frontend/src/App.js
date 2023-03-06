// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

/*
도전 / 연습

1. 5개의 새로운 (더미) 페이지 구성요소 추가 (내용은 단순 <h1> 요소가 될 수 있음)
- 홈페이지
- 이벤트 페이지
- 이벤트 세부 정보 페이지
- 새 이벤트 페이지
- 이벤트 페이지 편집
2. 이 다섯 페이지에 대한 라우팅 및 경로 정의 추가
- / => 홈페이지
- /https => 이벤트 페이지
- /https/<some-id> => 이벤트 세부 정보 페이지
- /filename/new => 새 이벤트 페이지
- /disc/<some-id>/편집 => 이벤트 페이지 편집
3. 모든 페이지 구성요소 위에 <Main Navigation> 구성요소를 추가하는 루트 레이아웃 추가
4. 제대로 작동하는 링크를 기본 탐색에 추가합니다
5. 활성화 시 기본 탐색의 링크가 "활성" 클래스를 수신하는지 확인합니다
6. 더미 이벤트 목록을 이벤트 페이지로 출력합니다
모든 목록 항목에는 해당 이벤트 세부 정보 페이지에 대한 링크가 포함되어야 합니다
7. 이벤트 세부 정보 페이지에서 선택한 이벤트의 ID를 출력합니다
보너스: 모든 /이벤트 위에 <이벤트 탐색> 구성 요소를 추가하는 다른 (내포된) 레이아웃 경로를 추가합니다... 페이지 구성 요소
*/

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventPage, { loader as eventsLoader } from "./pages/EventPage";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventRoot></EventRoot>,
        children: [
          {
            index: true,
            element: <EventPage></EventPage>,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            action: deleteEventAction,
            children: [
              { index: true, element: <EventDetailPage></EventDetailPage>, action: deleteEventAction },
              { path: "edit", element: <EditEventPage></EditEventPage> },
            ],
          },
          { path: "new", element: <NewEventPage></NewEventPage>, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
