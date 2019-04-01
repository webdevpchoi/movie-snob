import React, { Component } from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import { Transition } from "react-transition-group";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as PrevArrow } from "../icons/prev-arrow.svg";
import { ReactComponent as NextArrow } from "../icons/next-arrow.svg";
import MovieThumb from "./MovieThumb";
import MoviePreview from "./MoviePreview";
import { getCast, getVideo, getDetails } from "../helper";

const animationSpeed = 300;

const defaultStyle = {
  transition: `opacity ${animationSpeed}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

const StyledMovieRow = styled.div`
  width: 100%;
  background: transparent;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  transition: all 2s;

  > div:first-child {
    padding: 15px;
    font-size: 1.5rem;
    color: #fff;
    text-transform: capitalize;
  }
  .slick-list {
    overflow: visible;
  }
  .slick-prev,
  .slick-next {
    fill: #fff;
    height: 100%;
    z-index: 1;
    width: 50px;
    opacity: 0;
    transition: background 150ms, opacity 150ms;
    :hover {
      background: rgba(0, 0, 0, 0.6);
      opacity: 1;
    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
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
    popularity: "",
    cast: [],
    videoKey: "",
    fadeIn: false
  };

  //this is the handler that runs when you click on a MovieThumbnail, and takes the endpoint data and sets it into state
  clickHandler = async id => {
    getCast(id).then(cast => this.setState({ cast }));
    getVideo(id).then(video => this.setState({ videoKey: video.key }));
    getDetails(id).then(details => {
      const {
        title,
        poster_path: posterPath,
        id,
        overview: desc,
        release_date: releaseDate,
        popularity,
        backdrop_path: backdrop,
        runtime
      } = details;

      this.setState({
        title,
        posterPath,
        desc,
        releaseDate,
        popularity,
        backdrop,
        runtime,
        showPreview: true,
        fadeIn: true
      });
    });
  };

  exitPreview = () => {
    this.setState(state => {
      return { showPreview: false, fadeIn: false };
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
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
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
      <Transition timeout={animationSpeed} in={this.state.fadeIn}>
        <MoviePreview
          details={this.state}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
          movieType={movieType}
          exitPreview={this.exitPreview}
        />
      </Transition>
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
