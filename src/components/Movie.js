import React, { Component } from "react";

export default class Movie extends Component {
  state = {
    title: null,
    overview: null
  };

  componentDidMount() {
    const movieid = this.props.location.movieid;
    const movieData = this.getMovieDetails(movieid);
    movieData.then(results => {
      this.setState({
        title: results.original_title,
        overview: results.overview
      });
    });
  }

  getMovieDetails = async id => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const getDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(getDetails);
    const movieData = await response.json();
    return movieData;
  };

  render() {
    const { title, overview } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{overview}</p>
      </div>
    );
  }
}
