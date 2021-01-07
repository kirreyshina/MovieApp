import React from 'react';
import ReactPaginate from 'react-paginate';
import '../Pagination/pagination.css';

const Pagination = ({ totalPage, pageClick, selectedPage }) => {

  return (
    <div className="pagination_box">
      <ReactPaginate 
        previousLabel={'prev'}
        nextLabel={'next'}
        breakClassName={'points'}
        pageCount={totalPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={5}
        onPageChange={pageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page'}
        forcePage={selectedPage}
      />
    </div>
  )
};

export default Pagination;
