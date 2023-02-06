import React from "react";
import Header from "../Header/Header";
import Spinner from "../UI/Spinner";
import { FavoritesContextProvider } from "../../context/favorites.context";
import { Outlet, useNavigation } from "react-router-dom";

function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {navigation.state === "loading" && <Spinner />}
        <FavoritesContextProvider>
          <Outlet />
        </FavoritesContextProvider>
      </main>
    </>
  );
}

export default RootLayout;
