import React, { Fragment } from "react";
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "Error!";
  let message = "에러가 발생하였습니다,,,";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "404 Error!...Page Not Found";
    message = "페이지를 찾을 수 없습니다,,,";
  }

  return (
    <Fragment>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </Fragment>
  );
};

export default ErrorPage;
