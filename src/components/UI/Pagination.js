import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ITEMS_PER_PAGE } from "../../constants/api.constants";
import "./Pagination.scss";

function Pagination({ currentPage, setCurrentPage, numberOfItems }) {
  const lastPage = Math.round(numberOfItems / ITEMS_PER_PAGE);

  const previousPageHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => prevState - 1);
  };

  const nextPageHandler = () => {
    if (currentPage === lastPage) return;
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      {numberOfItems > ITEMS_PER_PAGE && (
        <div className="pagination">
          <PrimaryButton
            className={
              currentPage === 1
                ? "pagination__arrow pagination__arrow--disabled"
                : "pagination__arrow"
            }
            onClick={previousPageHandler}
          >
            {<FaArrowLeft />}
          </PrimaryButton>

          <PrimaryButton
            className={
              currentPage === lastPage
                ? "pagination__arrow pagination__arrow--disabled"
                : "pagination__arrow"
            }
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
