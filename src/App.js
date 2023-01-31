import React from "react";
import Favorites from "./components/Routes/Favorites";
import RootLayout from "./components/Routes/RootLayout";
import GenericPage from "./components/Routes/GenericPage";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import SearchResults from "./components/Routes/SearchResults";
import { buildApiUrl } from "./utilities/generic.utils";
import "./App.scss";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={
          <GenericPage
            pageTitle="Coming soon"
            endpoint={buildApiUrl("ComingSoon")}
          />
        }
      />
      <Route
        path="movies"
        element={
          <GenericPage
            pageTitle="Popular movies"
            endpoint={buildApiUrl("MostPopularMovies")}
          />
        }
      />
      <Route
        path="tv-shows"
        element={
          <GenericPage
            pageTitle="Popular tv-shows"
            endpoint={buildApiUrl("MostPopularTVs")}
          />
        }
      />
      <Route path="favorites" element={<Favorites />} />
      <Route path=":id" element={<ItemDetails />} />
      <Route path="search/:inputQuery" element={<SearchResults />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
