import React, { Component } from "react";
import styled from "styled-components";
import "../App.css";

import Header from "./Header";
import MovieThumb from "./MovieThumb";
import Loader from "./Loader";

const StyledHeader = styled.header`
  background: green;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

class Home extends Component {
  state = {
    searchTerm: null,
    movies: [],
    loading: false
  };

  getMovies = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const search = this.state.searchTerm;
    const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const searchedMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
    // if there is search term, use the popular movies api url, otherwise, use the search movies api url
    let movieURL = !this.state.searchTerm ? popularMovies : searchedMovies;
    try {
      const response = await fetch(movieURL);
      const movieData = await response.json();
      this.setState({ movies: [...movieData.results], loading: false });
    } catch (e) {
      // if something goes wrong during the fetch operation, set the movies data array to be empty and alert developer of error
      console.log(e);
      this.setState({ movies: [] });
    }
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
    //if the movie array is empty, it shouldn't display anything, but provide user with feedback
    const displayMovies = movies.map(movie => (
      <MovieThumb
        img={movie.poster_path}
        key={movie.id}
        id={movie.id}
        alt={movie.title}
      />
    ));
    return (
      <div className='App'>
        <Header
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
        />
        <StyledHeader>Popular Movies</StyledHeader>
        {this.state.loading ? <Loader /> : null}
        <Grid>{displayMovies}</Grid>
      </div>
    );
  }
}

export default Home;
