import React, { useState, useEffect } from 'react';
import Movie_item from '../movie_item/movie_item';
import Pagination from '../Pagination/Pagination';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e7c5fa2d6252bbbcb1bc5fc52508bc02&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=e7c5fa2d6252bbbcb1bc5fc52508bc02&query="; 

const Movie_list = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
}, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };
   
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
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
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
        // eslint-disable-next-line react/jsx-pascal-case
        <Movie_item key={movie.id} {...movie} />
        )}
      </div>
      <Pagination />
    </div>
  )
};

export default Movie_list;

