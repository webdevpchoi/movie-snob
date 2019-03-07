import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";

const StyledMovieDisplay = styled.div`
  background: black;
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
        <MovieRow movieData={movies.trending.results} movieType='trending' />
        <MovieRow movieData={movies.topRated.results} movieType='top rated' />
        <MovieRow
          movieData={movies.nowPlaying.results}
          movieType='now playing'
        />
        <MovieRow movieData={movies.upcoming.results} movieType='upcoming' />
      </StyledMovieDisplay>
    );
  }
}
