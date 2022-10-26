import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

function Header({ searchValue, setSearchValue }) {
  const [activeLink, setActiveLink] = useState("movies");

  return (
    <header className="header">
      <div className="header__title">
        <h1>
          Movies <FontAwesomeIcon icon={faVideo} />
        </h1>
      </div>

      <nav className="header__nav">
        <Link
          className={activeLink === "movies" ? "link-active" : ""}
          onClick={(e) => setActiveLink(e.target.innerText.toLowerCase())}
          to="/"
        >
          Movies
        </Link>

        <Link
          className={activeLink !== "movies" ? "link-active" : ""}
          onClick={(e) => setActiveLink(e.target.innerText.toLowerCase())}
          to="/favorites"
        >
          Favorites
        </Link>
      </nav>

      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
      />
    </header>
  );
}

export default Header;
