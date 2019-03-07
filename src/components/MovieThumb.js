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
const MovieThumb = ({ id, img, alt, showPreview }) => {
  return (
    <StyledThumbnail>
      <div className='movie' onClick={showPreview}>
        <img
          src={
            img
              ? `https://image.tmdb.org/t/p/w300${img}`
              : "https://via.placeholder.com/300"
          }
          alt={alt}
        />
      </div>
    </StyledThumbnail>
  );
};

export default MovieThumb;
