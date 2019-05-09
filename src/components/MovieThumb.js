import React, { Component } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { getDetails } from "../helper";

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
class MovieThumb extends Component {
  state = {
    test: "hello?"
  };
  //while this method seems redundant because we are passing the function down through props,
  // it is to prevent from using an inline arrow function in the render method
  getMoviePreview = () => {
    this.props.clickHandler(this.props.id);
  };

  render() {
    const { poster } = this.props;
    const searchThumbnail = (
      <Link
        to={{
          pathname: `/${this.props.id}`,
          state: this.state
        }}
      >
        <StyledThumbnail>
          <h1>SEARCH</h1>
          <div className='movie'>
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
      </Link>
    );

    const defaultThumbnail = (
      <StyledThumbnail>
        <h1>DEFAULT</h1>
        <div className='movie' onClick={this.getMoviePreview}>
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
    return this.props.moviesExist ? searchThumbnail : defaultThumbnail;
  }
}

export default MovieThumb;
