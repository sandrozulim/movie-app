import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";
import "./ErrorPage.scss";

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

  return (
    <>
      <Header />
      <div className="error-msg">
        <h2 className="error-msg__title">Oops!</h2>
        <p className="error-msg__text">{message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
