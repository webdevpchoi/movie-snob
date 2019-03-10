import React, { Component } from "react";
import styled from "styled-components/macro";
import YouTube from "react-youtube";

const StyledMoviePreview = styled.div`
  height: 300px;
  background: url(${props => props.img}) no-repeat 100% / cover;
  padding: 25px;
  .movie-details > span {
    margin: 0 10px;
  }
`;

export default class MoviePreview extends Component {
  render() {
    const {
      title,
      desc,
      releaseDate,
      poster,
      popularity,
      backdrop,
      runtime
    } = this.props.details;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      }
    };
    return (
      <StyledMoviePreview
        img={backdrop ? `https://image.tmdb.org/t/p/w1280${backdrop}` : null}
      >
        <h1>{title}</h1>
        <div className='movie-details'>
          <span>{releaseDate}</span>
          <span>{popularity}</span>
          <span>{runtime}</span>
        </div>
        <p>{desc}</p>
        {/* <YouTube videoId='PzcaR1N0pTI' opts={opts} /> */}
      </StyledMoviePreview>
    );
  }
}
