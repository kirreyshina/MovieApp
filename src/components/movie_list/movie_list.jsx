import React, { useState, useEffect } from 'react';
import Movie_item from '../movie_item/movie_item';
import ModalWindow from '../modal/modal';
import Pagination from '../Pagination/Pagination';

import { search, fetch } from '../../../src/api/search';

const Movie_list = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalActive, setModalActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [results, setResults] = useState(0);

  useEffect(() => {
    const init = async() => {
      if(searchTerm) {
        const data = await search(searchTerm);
        result(data);
      }else {
        const data = await fetch(currentPage + 1);
        result(data);
    }}
    
      init()
  }, [currentPage, searchTerm]);

  const result = (data) => {
    const { total_pages, results, total_results } = data;
      setTotalPage(total_pages);
      setMovies(results);
      setResults(total_results);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
      setSearchTerm(searchTerm);

  };
   
  const handleOnChange = (searchTerm) => {
    setSearchTerm(searchTerm.target.value);
  };

  const pageClick = ({selected:selectedPage}) => {
      setCurrentPage(selectedPage);
  };


  return (
    <div>
      <div className="header">
        <form onSubmit={handleOnSubmit}>
          <input className="search"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
     </div>
     <div className="results">
        <p>Found 
          <span>{results}</span> 
          movies
        </p>
      </div>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
        // eslint-disable-next-line react/jsx-pascal-case
        <Movie_item 
          key={movie.id} 
          movie={movie}
          onMovieClick={( _checkMovie => {
            setModalActive(_checkMovie);
          })} 
        />
        )}
      </div>
      <ModalWindow
        movie={modalActive}
        onClose={() => setModalActive(null)}
      />
      <Pagination 
        totalPage={totalPage}
        pageClick={pageClick}
        selectedPage={currentPage}
      />
    </div>
  )
};

export default Movie_list;