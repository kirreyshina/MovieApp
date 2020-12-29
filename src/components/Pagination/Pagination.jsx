import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({totalPage, handlePageClick, selectedPage }) => {

  return (
    <div className="pagination_box">
      <ReactPaginate 
        previousLabel={"prev"}
        nextLabel={"next"}
        breakClassName={"points"}
        pageCount={totalPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageClassName={"page"}
        forcePage={selectedPage}
      />
    </div>
  )
};

export default Pagination;