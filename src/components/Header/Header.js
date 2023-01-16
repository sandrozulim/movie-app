import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaVideo, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import PrimaryButton from "../UI/PrimaryButton";
import "./Header.scss";

function Header() {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const navigate = useNavigate();
  const linkIsActive = ({ isActive }) => {
    return !isActive ? "header__link" : "header__link header__link--active";
  };

  const toggleExpandedNav = () => {
    setNavIsExpanded((prevState) => !prevState);
  };

  const searchInputChangeHandler = (e) => setInputQuery(e.target.value);

  const searchInputSubmitHandler = () => {
    navigate(`/search/${inputQuery}`);
    setInputQuery("");
  };

  const links = [
    {
      to: "/",
      title: "home",
      end: true,
    },

    {
      to: "/movies",
      title: "movies",
    },

    {
      to: "/tv-shows",
      title: "tv shows",
    },

    {
      to: "/favorites",
      title: "favorites",
    },
  ];

  const navigationContent = links.map((link) => {
    return (
      <li key={link.title}>
        <NavLink
          onClick={toggleExpandedNav}
          className={linkIsActive}
          to={link.to}
          end={link.end}
        >
          {link.title}
        </NavLink>
      </li>
    );
  });

  return (
    <header className="header">
      <div className="header__logo">
        <h1 className="header__title">Movies</h1>
        <FaVideo className="header__icon" />
      </div>

      <div className="header-search">
        <input
          value={inputQuery}
          onChange={searchInputChangeHandler}
          className="header-search__input"
          type="text"
        />
        <PrimaryButton
          onClick={searchInputSubmitHandler}
          className="header-search__btn"
        >
          <FaSearch />
        </PrimaryButton>
      </div>

      <PrimaryButton
        onClick={toggleExpandedNav}
        className="header__hamburger-btn"
      >
        <FiMenu className="header__hamburger-icon" />
      </PrimaryButton>

      <nav>
        <ul
          className={
            !navIsExpanded ? "header__nav-list" : "header__nav-list--expanded"
          }
        >
          {navigationContent}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
