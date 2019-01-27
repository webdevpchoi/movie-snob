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
    popularMovies: [],
    movieResults: null
  };

  getPopularMovies = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const getPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(getPopularMovies);
    const movieData = await response.json();
    this.setState({ popularMovies: [...movieData.results] });
  };

  getMovies = async e => {
    e.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const getMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(getMovies);
    const movieData = await response.json();
    this.setState({ movieResults: [...movieData.results] });
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    const { popularMovies } = this.state;
    return (
      <div className='App'>
        <Header getMovies={this.getMovies} />
        <StyledHeader>Popular Movies</StyledHeader>
        {popularMovies.map(movie => (
          <MovieThumb details={movie} key={movie.id} />
        ))}
      </div>
    );
  }
}

export default Home;
