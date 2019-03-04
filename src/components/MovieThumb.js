import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const StyledThumbnail = styled.div`
  width: 200px;
  margin: 15px;
  .movie img {
    height: 100px;
    width: 100px;
  }
`;
const MovieThumb = ({ id, img, alt }) => {
  return (
    <StyledThumbnail>
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
    </StyledThumbnail>
  );
};

export default MovieThumb;
