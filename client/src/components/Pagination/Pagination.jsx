import React from 'react';
import './Pagination.css';

const Pagination = ({ productPerPage, filteredProducts, pagination, currentPage }) => {
  const totalPages = isNaN(filteredProducts) ? 0 : Math.ceil(filteredProducts / productPerPage);
  let pageNumbers = [];

  if (currentPage === 1) {
    pageNumbers = [1, 2];
  } else if (currentPage === totalPages) {
    pageNumbers = [totalPages - 1, totalPages];
  } else {
    pageNumbers = [currentPage - 1, currentPage, currentPage + 1];
  }

  return (
    <nav>
      <ul className='paginas'>
        {currentPage > 1 && (
          <li className='numero' key="prev">
            <button
              className='prev-next'
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
                pagination(currentPage - 1);
              }}>
              Prev
            </button>
          </li>
        )}

        {pageNumbers.map((number, i) => (
          <li className='numero' key={i}>
            <button
              className={number === currentPage ? 'active button3' : 'button3'}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
                pagination(number);
              }}>
              {number}
            </button>
          </li>
        ))}

        {currentPage < totalPages && (
          <li className='numero' key="next">
            <button
              className='prev-next'
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: 'smooth'
                });
                pagination(currentPage + 1);
              }}>
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;