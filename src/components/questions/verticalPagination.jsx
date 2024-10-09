import React from "react";

const VerticalPagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="d-flex flex-column">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`btn btn-${
            currentPage === index + 1 ? "primary" : "secondary"
          } m-1`} // m-1 добавляет отступ
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default VerticalPagination;
