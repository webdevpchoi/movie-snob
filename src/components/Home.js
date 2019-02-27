import React, { Component } from "react";
import styled from "styled-components/macro";
import "../App.css";
//components
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

  componentDidMount() {
    //if there are movies in session storage, put them in the cachedMovies variable; otherwise, it will assign 'null'
    const cachedMovies = sessionStorage.getItem("movies");
    //if there are cached movies, change the data
    if (cachedMovies) {
      const cachedData = JSON.parse(cachedMovies);
      this.setState({ movies: [...cachedData] });
    } else {
      //continue with rest of code if there's nothing cached
      console.log(cachedMovies);
      this.getMovies();
    }
  }

  //on home page load, get several different genres of movies and tvs
  getInitalMovies = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    //set loading to true
    this.setState({ loading: true });
    //create an object with all movie URLs
    const allMovieURLs = {
      trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
      topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
      upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    };

    const promiseEntries = Promise.all(
      Object.entries(allMovieURLs).map(entry => {
        let [key, value] = entry;
        return fetch(value).then(res =>
          res.json().then(data => {
            return [key, data];
          })
        );
      })
    );

    console.log(promiseEntries);

    //use Promise.all to ensure that all of the data is received at the same time so that the initial page load isn't missing any data!
    // Promise.all(promiseArr).then(data =>
    //   data.forEach(dataObj => {
    //     console.log(dataObj.results);
    //   })
    // );

    //
  };

  getMovies = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const search = this.state.searchTerm;
    const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const searchedMovies = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`;
    // if there is search term, use the popular movies api url, otherwise, use the search movies api url
    let movieURL = !this.state.searchTerm ? popularMovies : searchedMovies;
    //let users know something is loading in case they're on a slow network
    this.setState({ loading: true, movies: [] });
    try {
      const response = await fetch(movieURL);
      const movieData = await response.json();
      console.log(movieData.results);
      this.setState({ movies: [...movieData.results], loading: false });
      //stringify the movies you just put into state and store it into HTML5 Session Storage
      const moviesJSON = JSON.stringify(this.state.movies);
      sessionStorage.setItem("movies", moviesJSON);
    } catch (e) {
      // if something goes wrong during the fetch operation, set the movies data array to be empty and alert developer of error
      console.log(e);
      //load the movies, and turn off the loading modal
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
