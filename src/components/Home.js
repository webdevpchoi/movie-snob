import React, { Component } from "react";
import "../App.css";
//components
import Header from "./Header";
import HeroImage from "./HeroImage";
import MovieDisplay from "./MovieDisplay";
import MovieSearch from "./MovieSearch";
import Loader from "./Loader";

class Home extends Component {
  state = {
    searchTerm: null,
    searchResults: null,
    movies: null,
    loading: true
  };

  componentDidMount() {
    this.getInitalMovies();
  }

  //on home page load, get several different genres of movies and tvs
  getInitalMovies = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    //set loading to true
    this.setState({ loading: true });
    //create an object with all movie URLs
    const allMovieURLs = {
      trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    };

    //break down the movieURL object into entries, fetch the URL, and reassign entries with actual data
    //encapsulate within a Promise.all to ensure they all resolve at the same time.
    const moviePromises = Promise.all(
      Object.entries(allMovieURLs).map(entry => {
        const [key, url] = entry;
        return fetch(url).then(res => res.json().then(data => [key, data]));
      })
    );
    //with the returned promise from Promise.all, reconstruct the array of entries back into an object with relevant key pair values
    const movies = moviePromises.then(movieArr => {
      const dataObj = {};
      for (const [movie, movieData] of movieArr) {
        dataObj[movie] = movieData;
      }
      return dataObj;
    });
    //with the returned object, push it into current state, then turn off loading
    movies.then(movieObj => {
      this.setState({ movies: movieObj, loading: false });
    });
  };
  //event handler for search functionality
  changeHandler = async e => {
    const searchTerm = e.currentTarget.value;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchTerm}&include_adult=false`;
    const searchResults = await fetch(searchUrl).then(res => res.json());
    this.setState({ searchResults });
  };

  render() {
    const { movies, searchResults } = this.state;
    return (
      <div className='App'>
        <Header
          searchMovie={this.searchMovie}
          changeHandler={this.changeHandler}
        />
        <HeroImage />
        {this.state.loading ? <Loader /> : null}
        {this.state.movies && !this.state.searchResults ? (
          <MovieDisplay movies={movies} />
        ) : (
          <MovieSearch movies={searchResults} />
        )}
      </div>
    );
  }
}

export default Home;
