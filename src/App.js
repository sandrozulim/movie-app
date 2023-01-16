import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Movie from "./components/ItemDetails/ItemDetails";
import Page from "./components/Page/Page";
import SearchResults from "./components/Page/SearchResults";
import { buildApiUrl } from "./utilities/generic.utils";
import "./App.scss";
import Favorites from "./components/Page/Favorites";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Page
                pageTitle="Coming soon"
                endpoint={buildApiUrl("ComingSoon")}
              />
            }
          />
          <Route
            path="movies"
            element={
              <Page
                pageTitle="Popular movies"
                endpoint={buildApiUrl("Top250Movies")}
              />
            }
          />
          <Route
            path="tv-shows"
            element={
              <Page
                pageTitle="Popular tv-shows"
                endpoint={buildApiUrl("Top250TVs")}
              />
            }
          />

          <Route path="search/:inputQuery" element={<SearchResults />} />

          <Route path="favorites" element={<Favorites />} />

          <Route path=":id" element={<Movie />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
