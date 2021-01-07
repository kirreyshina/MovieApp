import React, { useState, useEffect } from 'react';
import Movie_item from '../movie_item/movie_item';
import ModalWindow from '../modal/modal';
import Pagination from '../Pagination/Pagination';

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=e7c5fa2d6252bbbcb1bc5fc52508bc02&query=`; 
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e7c5fa2d6252bbbcb1bc5fc52508bc02&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;

const Movie_list = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalActive, setModalActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [results, setResults] = useState(0);

  useEffect(() => {
    getMovies(FEATURED_API);
  }, [searchTerm]);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      setResults(data.total_results);
      setTotalPage(data.total_pages);
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm(searchTerm);
    }
  };
   
  const handleOnChange = (searchTerm) => {
    setSearchTerm(searchTerm.target.value);
  };

  const pageClick = ({selected:selectedPage}) => {
    if(searchTerm){
      setSearchTerm(searchTerm);
      setCurrentPage(selectedPage)
    }
    setCurrentPage(selectedPage);
 }

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
     <div className="total_movies">{results}</div>
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