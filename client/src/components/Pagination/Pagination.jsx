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
    <nav className={style.container}>
      <div className={style.buttons}>
        <button
          className={currentPage === 1 ? style.is_disable : style.is_enable}
          onClick={onPreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
      </div>
      <ul className={style.pagination}>
        {pageNumber.map((p) => (
          <li key={p} className={style.index}>
            <a
              className={p === currentPage ? style.current : ""}
              onClick={() => onSpecificPage(p)}
            >
              {p}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <button
          className={
            currentPage >= pageNumber.legth ? style.is_enable : style.is_disable
          }
          onClick={onNextPage}
          disabled={currentPage >= pageNumber.length}
        >
          Siguiente
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
