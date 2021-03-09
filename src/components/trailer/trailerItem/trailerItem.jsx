import React from 'react';
import './trailer.css';

const TrailerItem = ({keyObj, name}) => {
  const urlTrailer = `https://www.youtube.com/watch?v=${keyObj}`;

  return (
    <div className="trailer">
      <button 
        type="button"
      >
        <a href={urlTrailer} rel="noreferrer" target="_blank">
          <i className="fas fa-eye"></i>
        </a>
      </button>
    </div>
  )
};

export default TrailerItem;
