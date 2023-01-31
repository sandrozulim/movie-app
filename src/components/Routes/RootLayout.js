import React from "react";
import Header from "../Header/Header";
import { FavoritesContextProvider } from "../../context/favorites.context";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <FavoritesContextProvider>
          <Outlet />
        </FavoritesContextProvider>
      </main>
    </>
  );
}

export default RootLayout;
