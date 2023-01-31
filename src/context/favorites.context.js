import React, { useState } from "react";

const FavoritesContext = React.createContext({
  favorites: [],
  addFavoriteHandler: () => {},
  removeFavoriteHandler: () => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const removeFavoriteHandler = (itemId) => {
    const updatedFavorites = favorites.filter(
      (favoriteItem) => favoriteItem.id !== itemId
    );
    setFavorites(updatedFavorites);
  };

  const addFavoriteHandler = (item) => {
    if (favorites.find((favorite) => favorite.id === item.id)) return;
    setFavorites((prev) => {
      return [...prev, item];
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavoriteHandler,
        removeFavoriteHandler,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
