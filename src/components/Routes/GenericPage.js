import { useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import Pagination from "../UI/Pagination";
import Spinner from "../UI/Spinner";
import ErrorModal from "../UI/ErrorModal";
import useGetData from "../../hooks/useGetData";
import { ITEMS_PER_PAGE } from "../../constants/api.constants";
import "./GenericPage.scss";

function GenericPage({ pageTitle, endpoint }) {
  const { data, isLoading, error, setError } = useGetData(endpoint);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <h2 className="page-title">{pageTitle}</h2>

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

export default GenericPage;
