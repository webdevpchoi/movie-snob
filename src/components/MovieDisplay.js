import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";

const StyledMovieDisplay = styled.div`
  background: black;
  height: 70vh;
  padding: 15px;
`;

export default class MovieDisplay extends Component {
  render() {
    const { movies } = this.props;
    return (
      <StyledMovieDisplay>
        <MovieRow movies={movies} movieType='trending' />
        <MovieRow movies={movies} movieType='top rated' />
        <MovieRow movies={movies} movieType='now playing' />
        <MovieRow movies={movies} movieType='upcoming' />
      </StyledMovieDisplay>
    );
  }
}
