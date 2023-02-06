import { useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import ItemsList from "../ItemsList/ItemsList";
import Pagination from "../UI/Pagination";
import { ITEMS_PER_PAGE } from "../../constants/api.constants";
import { buildApiUrl } from "../../utilities/generic.utils";
import "./SearchResults.scss";

function SearchResults() {
  const { inputQuery } = useParams();
  const { results } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h2 className="search-title">Search results for "{inputQuery}"</h2>

      <ItemsList
        items={results.slice(
          currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )}
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfItems={results.length}
      />
    </>
  );
}

export default SearchResults;

export const searchLoader = async ({ params }) => {
  const url = buildApiUrl("Search");
  const response = await fetch(`${url}/${params.inputQuery}`);
  if (!response.ok) throw json({ message: "Could not fetch data!" }, {status: 500});
  return response;
};
