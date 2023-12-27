import React from "react";
import style from "./Pagination.module.css";
import { useState } from "react";

const Pagination = ({
  countriesPerPage,
  totalCountries,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button
        className={currentPage === 1 ? style.is_disable : style.is_enable}
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        className={
          currentPage >= pageNumber.legth ? style.is_enable : style.is_disable
        }
        onClick={onNextPage}
        disabled={currentPage >= pageNumber.length}
      >
        Siguiente
      </button>
      <ul class="pagination-list">
        {pageNumber.map((p) => (
          <li key={p}>
            <a
              className={p === currentPage ? style.current : ""}
              onClick={() => onSpecificPage(p)}
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
