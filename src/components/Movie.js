import React from "react";
import "./Movie.scss";

function Movie({ poster, title }) {
  return (
    <>
      <img className="poster" src={poster} alt={title}></img>
      <span className="title">{title}</span>
    </>
  );
}

export default Movie;
