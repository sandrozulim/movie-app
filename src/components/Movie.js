import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Movie.scss";

function Movie({ poster, title }) {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} alt={title}></img>
      <div className="movie__control">
        <span>Add to favorites</span>
        <FontAwesomeIcon className="movie__control--favorite" icon={faHeart} />
      </div>
    </div>
  );
}

export default Movie;
