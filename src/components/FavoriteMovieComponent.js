import React, { useState } from "react";
import "./FavoriteMovieComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FavoriteMovieComponent({
  icon,
  favoriteHandler,
  movieObject,
  buttonText,
}) {
  const [clicked, setClicked] = useState(false);

  function clickHandler() {
    setClicked(true);
    favoriteHandler(movieObject);
  }

  return (
    <button onClick={() => clickHandler()} className="favorite">
      <span>{buttonText}</span>
      <FontAwesomeIcon
        className={!clicked ? "icon-false" : "icon-true"}
        icon={icon}
      />
    </button>
  );
}

export default FavoriteMovieComponent;
