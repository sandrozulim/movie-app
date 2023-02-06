import React, { useState } from "react";
import Pagination from "../UI/Pagination";
import ItemsList from "../ItemsList/ItemsList";
import { ITEMS_PER_PAGE } from "../../constants/api.constants";
import { json, useLoaderData } from "react-router-dom";
import { buildApiUrl } from "../../utilities/generic.utils";
import "./Home.scss";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { items } = useLoaderData();

  return (
    <>
      <h2 className="home-title">Coming soon</h2>

      <ItemsList
        items={items.slice(
          currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfItems={items.length}
      />
    </>
  );
}

export default Home;

export const homeLoader = async () => {
  const url = buildApiUrl("ComingSoon");
  const response = await fetch(url);
  if (!response.ok) throw json({ message: "Could not fetch data!" }, {status: 500});
  return response;
};
