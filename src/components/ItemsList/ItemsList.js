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
      <li key={item.id} className="item-list__item">
        <Link className="item-list__link" to={`/${item.id}`}>
          <img
            className="item-list__poster"
            src={item.image}
            alt={item.title}
          />
          <div className="item-list__info">
            <h3 className="item-list__title">{item.title}</h3>
            <PrimaryButton
              onClick={(e) => {
                e.preventDefault();
                manageFavorites(item);
              }}
              className={
                favorites.find((favorite) => favorite.id === item.id)
                  ? "item-list__favorite-btn item-list__favorite-btn--active"
                  : "item-list__favorite-btn "
              }
            >
              <MdFavorite />
            </PrimaryButton>
          </div>
        </Link>
      </li>
    );
  });

  return <ul className="item-list">{content}</ul>;
}

export default ItemsList;
