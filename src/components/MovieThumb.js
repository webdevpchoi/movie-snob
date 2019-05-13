import React from "react";
import styled from "styled-components/macro";
import MovieLink from "./MovieLink";

const StyledThumbnail = styled.div`
  margin: 2.5px;
  transition: transform 200ms;
  transform-origin: center;
  :hover {
    box-shadow: 0 0 0 3px ${prop => prop.theme.accentColor};
  }
  img {
    width: 100%;
  }
  img:hover {
    cursor: pointer;
  }
`;
const MovieThumb = ({ id, poster, enable, clickHandler }) => {
  //while this method seems redundant because we are passing the function down through props,
  // it is to prevent from using an inline arrow function in the render method
  const getMoviePreview = () => {
    clickHandler(id);
  };

  return (
    <MovieLink enable={enable} to={{ pathname: id, state: { movieId: id } }}>
      <StyledThumbnail>
        <div className='movie' onClick={enable ? null : getMoviePreview}>
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w300${poster}`
                : "https://via.placeholder.com/300"
            }
            alt='something here'
          />
        </div>
      </StyledThumbnail>
    </MovieLink>
  );
};

export default MovieThumb;
