import React, { Component } from "react";
import styled from "styled-components/macro";
import MovieRow from "./MovieRow";

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

  removeFavorite = id => {
    this.setState(state => {
      return state.favorites.filter(movie => {
        return id === movie.id;
      });
    });
    console.log("removed favorite");
  };

  render() {
    const { movies } = this.props;
    return (
      <StyledMovieDisplay>
        <MovieRow
          movieData={this.state.favorites}
          movieType='favorites'
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
        />
        <MovieRow
          movieData={movies.trending.results}
          movieType='trending'
          addFavorite={this.addFavorite}
          removeFavorite={this.removeFavorite}
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
