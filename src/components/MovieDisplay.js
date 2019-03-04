import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";

const StyledMovieDisplay = styled.div`
  background: black;
  height: 70vh;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default class MovieDisplay extends Component {
  render() {
    const { movies } = this.props;
    return (
      <StyledMovieDisplay>
        <MovieRow movies={movies.trending.results} movieType='trending' />
        <MovieRow movies={movies.topRated.results} movieType='top rated' />
        <MovieRow movies={movies.nowPlaying.results} movieType='now playing' />
        <MovieRow movies={movies.upcoming.results} movieType='upcoming' />
      </StyledMovieDisplay>
    );
  }
}
