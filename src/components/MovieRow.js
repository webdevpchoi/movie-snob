import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieThumb from "./MovieThumb";

const StyledMovieRow = styled.div`
  background: white;
  height: 200px;
  width: 100%;
  margin: 15px 0;
  .row-title {
    text-transform: capitalize;
  }
  .movies-container {
    display: flex;
    justify-content: space-around;
  }
`;

export default class MovieRow extends Component {
  render() {
    const { movieType, movies } = this.props;
    return (
      <StyledMovieRow>
        <div className='row-title'>{movieType}</div>
        <div className='movies-container'>
          <MovieThumb />
          <MovieThumb />
          <MovieThumb />
        </div>
      </StyledMovieRow>
    );
  }
}
