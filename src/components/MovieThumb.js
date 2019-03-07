import React from "react";
import styled from "styled-components/macro";

const StyledThumbnail = styled.div`
  img {
    width: 100%;
  }
  img:hover {
    cursor: pointer;
  }
`;
const MovieThumb = ({ showPreview, movie }) => {
  return (
    <StyledThumbnail>
      <div
        className='movie'
        onClick={() => {
          showPreview(movie);
        }}
      >
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : "https://via.placeholder.com/300"
          }
          alt={movie.original_title}
        />
      </div>
    </StyledThumbnail>
  );
};

export default MovieThumb;
