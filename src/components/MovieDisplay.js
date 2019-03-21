import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";
import Favorites from "./Favorites";

const StyledMovieDisplay = styled.div`
  background: ${props => props.theme.mainColor};
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default class MovieDisplay extends Component {
  state = {
    favorites: []
  };

  addFavorite = currentMovie => {
    //get current movie data, and store it into an array
    //push that new array into state
    this.setState(state => {
      return state.favorites.push(currentMovie);
    });
  };

  render() {
    const { movies } = this.props;
    return (
      <StyledMovieDisplay>
        {/* <Favorites movies={this.state.favorites} /> */}

        <MovieRow
          movieData={this.state.favorites}
          movieType='favorites'
          addFavorite={this.addFavorite}
        />
        <MovieRow
          movieData={movies.trending.results}
          movieType='trending'
          addFavorite={this.addFavorite}
        />
        <MovieRow
          movieData={movies.topRated.results}
          movieType='top rated'
          addFavorite={this.addFavorite}
        />
        <MovieRow
          movieData={movies.nowPlaying.results}
          movieType='now playing'
          addFavorite={this.addFavorite}
        />
        <MovieRow
          movieData={movies.upcoming.results}
          movieType='upcoming'
          addFavorite={this.addFavorite}
        />
      </StyledMovieDisplay>
    );
  }
}
