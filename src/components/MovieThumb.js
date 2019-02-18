import React from "react";
import { Link } from "react-router-dom";

const MovieThumb = ({ id, img, alt }) => {
  return (
    <Link to={{ pathname: `/movies/${id}`, movieid: id }}>
      <div className='movie'>
        <img
          src={
            img
              ? `https://image.tmdb.org/t/p/w300${img}`
              : "https://via.placeholder.com/300"
          }
          alt={alt}
        />
      </div>
    </Link>
  );
};

export default MovieThumb;
