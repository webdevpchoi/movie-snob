import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledThumbnail = styled.div`
  img {
    width: 100%;
  }
  img:hover {
    cursor: pointer;
  }
`;
class MovieThumb extends Component {
  render() {
    const { poster } = this.props;
    return (
      <StyledThumbnail>
        <div
          className='movie'
          onClick={() => {
            this.props.getMovieDetails(this.props.id);
          }}
        >
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
    );
  }
}

export default MovieThumb;
