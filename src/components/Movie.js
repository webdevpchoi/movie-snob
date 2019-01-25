import React from "react";

const Movie = ({ details }) => {
  return (
    <div className='movie'>
      <h1>some movie</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
        alt=''
      />
    </div>
  );
};

export default Movie;
