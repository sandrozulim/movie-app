import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.scss";

function Header({ searchValue, setSearchValue }) {
  return (
    <header className="header">
      <div className="header__title">
        <h1>
          Movies <FontAwesomeIcon icon={faVideo} />
        </h1>
      </div>

      <div className="header__search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        ></input>
      </div>
    </header>
  );
}

export default Header;
