import React, { Component } from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieThumb from "./MovieThumb";
import MoviePreview from "./MoviePreview";

const StyledMovieRow = styled.div`
  width: 85%;
  background: transparent;
  margin: 15px 0;
  display: flex;
  flex-direction: column;

  .row-title {
    font: 1.2rem Playfair Display;
    text-transform: capitalize;
    margin: 7.5px 15px;
    color: #fff;
  }
`;

export default class MovieRow extends Component {
  state = {
    showPreview: false,
    title: "",
    id: "",
    desc: "",
    backdrop: "",
    releaseDate: "",
    popularity: ""
  };

  //this is the handler that runs when you click on a MovieThumbnail, and takes the endpoint data and sets it into state
  clickHandler = async id => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const movieId = id;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        title: data.title,
        posterPath: data.poster_path,
        id: data.id,
        desc: data.overview,
        releaseDate: data.release_date,
        popularity: data.popularity,
        backdrop: data.backdrop_path,
        runtime: data.runtime,
        showPreview: true
      });
    } catch (err) {
      console.log(`Couldn't fetch the endpoint!`);
      console.log(err);
    }
  };

  exitPreview = () => {
    this.setState(state => {
      return { showPreview: false };
    });
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { movieType, movieData } = this.props;
    const moviePreview = (
      <MoviePreview
        details={this.state}
        addFavorite={this.props.addFavorite}
        removeFavorite={this.props.removeFavorite}
        movieType={movieType}
        exitPreview={this.exitPreview}
      />
    );
    return (
      <StyledMovieRow>
        <div className='row-title'>{movieType}</div>
        <Slider {...settings}>
          {movieData.map(movie => (
            <MovieThumb
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path || movie.posterPath}
              clickHandler={this.clickHandler}
            />
          ))}
        </Slider>
        {this.state.showPreview ? moviePreview : null}
      </StyledMovieRow>
    );
  }
}
