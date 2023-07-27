import React from "react";

const Pagination = ({
  itemPerpage,
  totalItems,
  setPageNumber,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemPerpage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => {
          return (
            <li
              onClick={() => setPageNumber(number)}
              className={`pagination__item ${
                currentPage === number ? "active" : ""
              }`}
              key={number}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
