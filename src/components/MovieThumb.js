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
const MovieThumb = props => {
  //while this method seems redundant because we are passing the function down through props,
  // it is to prevent from using an inline arrow function in the render method
  const getMoviePreview = () => {
    props.clickHandler(props.id);
  };

  return (
    <MovieLink enabled={false} to={{ pathname: props.id }}>
      <StyledThumbnail>
        <h1>SEARCH</h1>
        <div className='movie' onClick={getMoviePreview}>
          <img
            src={
              props.poster
                ? `https://image.tmdb.org/t/p/w300${props.poster}`
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
