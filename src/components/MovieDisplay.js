import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";

const StyledMovieDisplay = styled.div`
  background: ${props => props.theme.mainColor};
  display: flex;
  align-items: center;
  flex-direction: column;

  .jawboneOpen ~ .movie-row {
    transform: translate3d(0, 938px, 0);
  }
`;

export default class MovieDisplay extends Component {
  state = {
    favorites: []
  };

  addFavorite = currentMovie => {
    //if favorite exists, prevent it from adding a duplicate
    //technically, you don't need to check for this, since the add button is disabled once it's in the favorites array...but it's always good to check!
    const favExists = this.state.favorites.some(
      movie => movie.id === currentMovie.id
    );
    if (favExists) {
      alert("Movie already exists in favorites!");
      return;
    } else {
      //if it doesn't exist, add it
      //get current movie data, and store it into an array
      //push that new array into state
      this.setState(state => {
        return state.favorites.push(currentMovie);
      });
    }
  };

  removeFavorite = id => {
    this.setState(state => {
      const updatedArr = state.favorites.filter(movie => !(id === movie.id));
      return { favorites: updatedArr };
    });
  };

  render() {
    const { movies, disableAddButton } = this.props;
    const displayFavorites = (
      <MovieRow
        movieData={this.state.favorites}
        movieType='favorites'
        addFavorite={this.addFavorite}
        removeFavorite={this.removeFavorite}
      />
    );
    return (
      <StyledMovieDisplay>
        {/* hide favorites component if there are none in state */}
        {this.state.favorites.length !== 0 ? displayFavorites : null}
        <MovieRow
          movieData={movies.trending.results}
          movieType='trending'
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
          disableAddButton={disableAddButton}
        />
        <MovieRow
          movieData={movies.topRated.results}
          movieType='top rated'
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
        />
        <MovieRow
          movieData={movies.nowPlaying.results}
          movieType='now playing'
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
        />
        <MovieRow
          movieData={movies.upcoming.results}
          movieType='upcoming'
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
        />
      </StyledMovieDisplay>
    );
  }
}
