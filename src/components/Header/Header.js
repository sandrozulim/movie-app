import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaVideo, FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import PrimaryButton from "../UI/PrimaryButton";
import "./Header.scss";

function Header() {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const navigate = useNavigate();

  const linkClasses = ({ isActive }) => {
    return !isActive ? "header__link" : "header__link header__link--active";
  };

  const searchInputChangeHandler = (e) => setInputQuery(e.target.value);

  const searchInputSubmitHandler = (e) => {
    e.preventDefault();
    if (inputQuery.trim() === "") return;
    navigate(`search/${inputQuery}`);
    setInputQuery("");
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h1 className="header__title">Movies</h1>
        <FaVideo className="header__icon" />
      </div>

      <form onSubmit={searchInputSubmitHandler} className="header-search">
        <input
          value={inputQuery}
          onChange={searchInputChangeHandler}
          className="header-search__input"
          type="text"
        />
        <PrimaryButton className="header-search__btn">
          <FaSearch />
        </PrimaryButton>
      </form>

      <PrimaryButton
        onClick={() => setNavIsExpanded(!navIsExpanded)}
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
          <li onClick={() => setNavIsExpanded(false)}>
            <NavLink className={linkClasses} to="/" end>
              home
            </NavLink>
          </li>

          <li onClick={() => setNavIsExpanded(false)}>
            <NavLink className={linkClasses} to="movies">
              movies
            </NavLink>
          </li>

          <li onClick={() => setNavIsExpanded(false)}>
            <NavLink className={linkClasses} to="tv-shows">
              tv-shows
            </NavLink>
          </li>

          <li onClick={() => setNavIsExpanded(false)}>
            <NavLink className={linkClasses} to="favorites">
              favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
