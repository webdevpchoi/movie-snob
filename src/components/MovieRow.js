import React, { Component } from "react";
import styled from "styled-components/macro";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as PrevArrow } from "../icons/prev-arrow.svg";
import { ReactComponent as NextArrow } from "../icons/next-arrow.svg";
import MovieThumb from "./MovieThumb";
import MoviePreview from "./MoviePreview";
import { getCast, getVideo, getDetails } from "../helper";

const StyledMovieRow = styled.div`
  width: 100%;
  background: transparent;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 700ms;

  > div:first-child {
    padding: 15px;
    font-size: 1.5rem;
    color: #fff;
    text-transform: capitalize;
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
  //state of each movie preview that appears when you click on a thumbnail
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
    animate: false,
    jawboneOpen: false,
    isFavorited: false
  };

  //this is the handler that runs when you click on a MovieThumbnail, and takes the endpoint data and sets it into state
  clickHandler = async id => {
    getCast(id).then(cast => this.setState({ cast }));
    getVideo(id).then(video => this.setState({ videoKey: video.key }));
    getDetails(id).then(details => {
      const {
        title,
        poster_path: posterPath,
        overview: desc,
        id,
        release_date: releaseDate,
        popularity,
        backdrop_path: backdrop,
        runtime,
        revenue,
        budget
      } = details;

      this.setState({
        title,
        posterPath,
        desc,
        id,
        releaseDate,
        popularity,
        backdrop,
        runtime,
        revenue,
        budget,
        showPreview: true,
        isJawboneOpen: true
      });
      //had to separate this property so that all of the movie info would load before actually fading in the preview component
      setTimeout(() => {
        this.setState({ animate: true });
      }, 4);
    });
  };

  exitPreview = () => {
    this.setState({ animate: false, isJawboneOpen: false });
    setTimeout(() => {
      this.setState({ showPreview: false });
    }, 700);
  };
  x;
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
    const { isJawboneOpen } = this.state;
    const moviePreview = (
      <MoviePreview
        details={this.state}
        addFavorite={this.props.addFavorite}
        removeFavorite={this.props.removeFavorite}
        movieType={movieType}
        exitPreview={this.exitPreview}
        animate={this.state.animate}
      />
    );
    return (
      <StyledMovieRow
        className={isJawboneOpen ? "movie-row jawboneOpen" : "movie-row"}
      >
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
        {/* {moviePreview} */}
      </StyledMovieRow>
    );
  }
}
