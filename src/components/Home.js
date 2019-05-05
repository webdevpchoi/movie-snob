import React, { Component } from "react";
import "../App.css";
import { getMovie } from "../helper";
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
    randomMovie: null,
    loading: true
  };

  componentDidMount() {
    this.getInitalMovies();
  }

  //on home page load, get several different genres of movies and tvs
  getInitalMovies = () => {
    const API_KEY = "2a61a6489e9fd7b7761f5c3db7f1f9b8";
    // const API_KEY = process.env.REACT_APP_API_KEY;
    console.log(process.env.REACT_APP_TEST_VAR);
    // const API_KEY = process.env.REACT_APP_API_KEY;
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
        //add disableButton property to every movie object
        for (const eachMovie of movieData.results) {
          eachMovie.disableAddButton = "false";
        }
        dataObj[movie] = movieData;
      }
      this.setRandomMovie(dataObj.trending.results);
      return dataObj;
    });
    //with the returned object, push it into current state, then turn off loading
    movies.then(movieObj => {
      this.setState({ movies: movieObj, loading: false });
    });
  };
  //get a random movie from trending and place it in HeroImage
  setRandomMovie = movieArr => {
    const randomMovie = movieArr[Math.floor(Math.random() * movieArr.length)];
    this.setState({ randomMovie });
  };
  //event handler for search functionality
  changeHandler = e => {
    const searchTerm = e.currentTarget.value;
    if (searchTerm) {
      this.setState({ searchTerm });
    } else {
      this.setState({ searchTerm: null });
    }
  };
  //submit handler for search functionality
  submitHandler = e => {
    e.preventDefault();
    const searchPromise = getMovie(this.state.searchTerm);
    searchPromise.then(searchResults => this.setState({ searchResults }));
  };

  render() {
    const { movies, searchResults, searchTerm, randomMovie } = this.state;
    return (
      <div className='App'>
        <Header
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        {this.state.randomMovie ? (
          <HeroImage randomMovie={randomMovie} />
        ) : null}
        {this.state.loading ? <Loader /> : null}
        {this.state.movies && !this.state.searchResults ? (
          <MovieDisplay
            movies={movies}
            disableAddButton={this.disableAddButton}
          />
        ) : (
          <MovieSearch movies={searchResults} searchTerm={searchTerm} />
        )}
      </div>
    );
  }
}

export default Home;
