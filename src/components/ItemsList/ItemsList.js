import PrimaryButton from "../UI/PrimaryButton";
import FavoritesContext from "../../context/favorites.context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import "./ItemsList.scss";

function ItemsList({ items }) {
  const { favorites, addFavoriteHandler, removeFavoriteHandler } =
    useContext(FavoritesContext);

  const manageFavorites = (item) => {
    if (favorites.find((favorite) => favorite.id === item.id)) {
      removeFavoriteHandler(item.id);
    } else {
      addFavoriteHandler(item);
    }
  };

  const content = items.map((item) => {
    return (
      <li key={item.id}>
        <Link className="items-list__link" to={`/${item.id}`}>
          <img
            className="items-list__poster"
            src={item.image}
            alt={item.title}
          />

          <h3 className="items-list__title">{item.title}</h3>

          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              manageFavorites(item);
            }}
            className={
              favorites.find((favorite) => favorite.id === item.id)
                ? "items-list__favorite-btn items-list__favorite-btn--active"
                : "items-list__favorite-btn "
            }
          >
            <MdFavorite />
          </PrimaryButton>
        </Link>
      </li>
    );
  });

  return <ul className="items-list">{content}</ul>;
}

export default ItemsList;
