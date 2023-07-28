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

  const ScrollToTop = () => {
    window.scrollTo({
      top: 270,
      behavior: "smooth",
    });
  };

  const prevPage = function () {
    if (currentPage <= 1) {
      return;
    }
    setPageNumber(currentPage - 1);
  };
  const nextPage = function () {
    if (currentPage >= pageNumbers.length) {
      return;
    }
    setPageNumber(currentPage + 1);
  };

  return (
    <nav className="pagination">
      {/* For desktop */}
      <ul
        className="pagination__list pagination--desktop"
        onClick={ScrollToTop}
      >
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

      {/* For Mobile */}
      <ul className="pagination__list pagination--mobile" onClick={ScrollToTop}>
        <button className="btn btn--page" onClick={prevPage}>
          Prev
        </button>
        <li className="pagination__item active">
          {pageNumbers[currentPage - 1]}
        </li>

        <button className="btn btn--page" onClick={nextPage}>
          Next
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
