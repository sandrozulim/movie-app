import React from "react";
import RootLayout from "./components/Routes/RootLayout";
import ErrorPage from "./components/Routes/ErrorPage";
import Home, { homeLoader } from "./components/Routes/Home";
import Movies, { moviesLoader } from "./components/Routes/Movies";
import TvShows, { tvShowsLoader } from "./components/Routes/TvShows";
import SearchResults, { searchLoader } from "./components/Routes/SearchResults";
import Favorites from "./components/Routes/Favorites";
import ItemDetails, {
  itemDetailsLoader,
} from "./components/ItemDetails/ItemDetails";

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.scss";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="movies" element={<Movies />} loader={moviesLoader} />
      <Route path="tv-shows" element={<TvShows />} loader={tvShowsLoader} />
      <Route path=":id" element={<ItemDetails />} loader={itemDetailsLoader} />
      <Route
        path="search/:inputQuery"
        element={<SearchResults />}
        loader={searchLoader}
      />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
