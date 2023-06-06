import React from "react";

const Pagination = ({ currentPage, dogsPerPage, totalDogs, onPageChange }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalDogs / dogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8 text-white-normal">
      <nav>
        <ul className="pagination flex space-x-4">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
