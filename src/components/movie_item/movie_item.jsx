import React from 'react';
import ModalWindow from '../modal/modal';

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

const Movie_item = ({ title, poster_path, release_date, vote_average, overview }) => {

  return (  
    <div className="movie">
      <img src={`${IMG_API}${poster_path}`} alt={title}/>
      <div className="box">
        <div className="title">{title}</div>
        <div className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
        </div>
      </div>  
    
      <ModalWindow 
        title={title}
        posterPath={poster_path}
        overview={overview}
        releaseData={release_date}
        voteAverage={vote_average}
      />
  </div> 
  )
};

export default Movie_item;
