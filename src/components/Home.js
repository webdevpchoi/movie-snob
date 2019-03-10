import React, { Component } from "react";
import "../App.css";
//components
import Header from "./Header";
import HeroImage from "./HeroImage";
import MovieDisplay from "./MovieDisplay";
import Loader from "./Loader";

class Home extends Component {
  state = {
    searchTerm: null,
    movies: {
      trending: {},
      topRated: {},
      nowPlaying: {},
      upcoming: {}
    },
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

  // getMovies = async () => {
  //   const API_KEY = process.env.REACT_APP_API_KEY;
  //   const search = this.state.searchTerm;
  //   const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  //   const searchedMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
  //   // if there is search term, use the popular movies api url, otherwise, use the search movies api url
  //   let movieURL = !this.state.searchTerm ? popularMovies : searchedMovies;
  //   //let users know something is loading in case they're on a slow network
  //   this.setState({ loading: true, movies: [] });
  //   try {
  //     const response = await fetch(movieURL);
  //     const movieData = await response.json();

  //     this.setState({ movies: [...movieData.results], loading: false });
  //     //stringify the movies you just put into state and store it into HTML5 Session Storage
  //     const moviesJSON = JSON.stringify(this.state.movies);
  //     sessionStorage.setItem("movies", moviesJSON);
  //   } catch (e) {
  //     // if something goes wrong during the fetch operation, set the movies data array to be empty and alert developer of error
  //     console.log(e);
  //     //load the movies, and turn off the loading modal
  //     this.setState({ movies: [] });
  //   }
  // };

  changeHandler = e => {
    const searchTerm = e.currentTarget.value;
    this.setState({ searchTerm });
  };

  submitHandler = e => {
    e.preventDefault();
    this.getMovies();
  };

  render() {
    const { movies } = this.state;
    return (
      <div className='App'>
        <Header
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
        />
        <HeroImage />
        {this.state.loading ? <Loader /> : <MovieDisplay movies={movies} />}
      </div>
    );
  }
}

export default Home;
