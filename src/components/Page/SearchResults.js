import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemsList from "../ItemsList/ItemsList";
import Spinner from "../UI/Spinner";
import Pagination from "../UI/Pagination";
import ErrorModal from "../UI/ErrorModal";
import useGetData from "../../hooks/useGetData";
import { ITEMS_PER_PAGE } from "../../constants/api.constants";
import { buildApiUrl } from "../../utilities/generic.utils";

function SearchResults() {
  const [currentPage, setCurrentPage] = useState(1);
  const { inputQuery } = useParams();
  const searchEndpoint = buildApiUrl("SearchTitle");

  const { data, isLoading, error, setError } = useGetData(
    `${searchEndpoint}/${inputQuery}`
  );

  return (
    <>
      <h2>Search results</h2>

      {isLoading && <Spinner />}

      {data.length > 0 && (
        <ItemsList
          items={data.slice(
            currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
          )}
        />
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfItems={data.length}
      />

      {error && <ErrorModal onClose={() => setError(null)}>{error}</ErrorModal>}
    </>
  );
}

export default SearchResults;
