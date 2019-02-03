import React, { Component } from "react";
import { getMovieDetails } from "../helper";

export default class Movie extends Component {
  state = {
    title: null,
    overview: null
  };

  componentDidMount() {
    console.log("mounted");
    const movieid = this.props.location.movieid;
    const movieData = getMovieDetails(movieid);
    movieData.then(results => {
      this.setState({
        title: results.original_title,
        overview: results.overview
      });
    });
  }

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
