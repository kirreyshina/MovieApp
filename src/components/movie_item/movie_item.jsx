import React from 'react';
import TrailerMovies from '../trailer/trailerMovies/trailerMovies';

export const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green'
  }else if (vote >= 6) {
    return 'orange'
  } else {
    return 'red'
  }
};

const Movie_item = ({ movie, onMovieClick }) => {
  const { title, poster_path, vote_average, id } = movie;

  return (  
    <div 
      className="movie" 
      onClick={() => onMovieClick(movie)}
    >
      <img src={`${IMG_API}${poster_path}`} alt={title}/>
      <div className="box">
        <div className="title">{title}</div>
        <div className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
        </div>
      </div>
      <TrailerMovies openTrailer={id} /> 
  </div> 
  )
};

export default Movie_item;
