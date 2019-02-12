import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

import Header from "./Header";
import MovieThumb from "./MovieThumb";

const StyledHeader = styled.header`
  background: green;
`;

class Home extends Component {
  state = {
    searchTerm: null,
    movies: []
  };

  getMovies = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const searchedMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    let movieURL = !this.state.searchTerm ? popularMovies : searchedMovies;
    const response = await fetch(movieURL);
    const movieData = await response.json();
    this.setState({ movies: [...movieData.results] });
  };

  changeHandler = e => {
    const searchTerm = e.currentTarget.value;
    this.setState({ searchTerm });
  };

  submitHandler = e => {
    e.preventDefault();
    this.getMovies();
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <div className='App'>
        <Header
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
        />
        <StyledHeader>Popular Movies</StyledHeader>
        {movies.map(movie => (
          <MovieThumb
            img={movie.poster_path}
            key={movie.id}
            id={movie.id}
            alt={movie.title}
          />
        ))}
      </div>
    );
  }
}

export default Home;
