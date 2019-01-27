import React from "react";
import { Link } from "react-router-dom";

const MovieThumb = ({ details }) => {
  return (
    <Link to={`/movies/${details.id}`}>
      <div className='movie'>
        <img
          src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
          alt={`${details.title}`}
        />
      </div>
    </Link>
  );
};

export default MovieThumb;
