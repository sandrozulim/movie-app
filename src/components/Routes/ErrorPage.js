import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  let message = "Something went wrong";

  if (error.status === 404) {
    message = "Page not found!";
  }

  if (error.status === 500) {
    message = error.data.message;
  }

  return <p>{message}</p>;
}

export default ErrorPage;
