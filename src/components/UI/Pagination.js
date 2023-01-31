import PrimaryButton from "./PrimaryButton";
import { ITEMS_PER_PAGE } from "../../constants/api.constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Pagination.scss";
import { useEffect } from "react";

function Pagination({ currentPage, setCurrentPage, numberOfItems }) {
  const lastPage = Math.ceil(numberOfItems / ITEMS_PER_PAGE);

  const paginationArrowClasses = (condition) => {
    return currentPage === condition
      ? "pagination__arrow pagination__arrow--disabled"
      : "pagination__arrow";
  };

  const previousPageHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => prevState - 1);
  };

  const nextPageHandler = () => {
    if (currentPage === lastPage) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <>
      {numberOfItems > ITEMS_PER_PAGE && (
        <div className="pagination">
          <PrimaryButton
            className={paginationArrowClasses(1)}
            onClick={previousPageHandler}
          >
            {<FaArrowLeft />}
          </PrimaryButton>

          <span className="pagination__state">
            {currentPage} / {lastPage}
          </span>

          <PrimaryButton
            className={paginationArrowClasses(lastPage)}
            onClick={nextPageHandler}
          >
            {<FaArrowRight />}
          </PrimaryButton>
        </div>
      )}
    </>
  );
}

export default Pagination;
