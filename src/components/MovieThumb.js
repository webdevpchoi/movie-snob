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
  //while this method seems redundant because we are passing the function down through props,
  // it is to prevent from using an inline arrow function in the render method
  getMovieDetails = () => {
    this.props.clickHandler(this.props.id);
  };

  render() {
    const { poster } = this.props;
    return (
      <StyledThumbnail>
        <div className='movie' onClick={this.getMovieDetails}>
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
