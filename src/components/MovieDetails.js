import React, { Component } from "react";
import styled from "styled-components/macro";

import Cast from "./Cast";
import Header from "./Header";

const StyledMoviePreview = styled.div`
  .cast-container {
    display: flex;
    flex-flow: row wrap;
  }
`;

export default class MovieDetails extends Component {
  state = {
    cast: []
  };

  getMovieDetails = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const movieId = this.props.location.movieId;
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
    await fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          cast: [...data.cast]
        })
      );
  };

  componentDidMount() {
    this.getMovieDetails();
  }

  render() {
    return (
      <StyledMoviePreview>
        <Header />
        <h1>This is the details page </h1>
        <div className='cast-container'>
          {this.state.cast.map(cast => (
            <Cast details={cast} />
          ))}
        </div>
      </StyledMoviePreview>
    );
  }
}
