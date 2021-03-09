import React, { useEffect, useState } from 'react';
import TrailerItem from '../trailerItem/trailerItem';
import { trailerMovies } from '../../../api/search';

const TrailerMovies = ({ openTrailer }) => {
  const [ trailer, setTrailer ] = useState('');

  useEffect(() => {
    const init = async() => {
      const data = await trailerMovies(openTrailer);
      const { results } = data;
      setTrailer(results);
    }

    init();
  }, [openTrailer]);

  return (
    <div>
      {trailer.length > 0 && trailer.map((item) => (
        <TrailerItem 
          key={item.id}
          keyObj={item.key}
          name={item.name}
        />
      ))}
    </div>
  )
};

export default TrailerMovies;

