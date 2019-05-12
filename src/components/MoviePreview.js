import React, { Component } from "react";
import styled from "styled-components/macro";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import { formatDate } from "../helper";
import { ReactComponent as PrevArrow } from "../icons/prev-arrow.svg";
import { ReactComponent as NextArrow } from "../icons/next-arrow.svg";
import { ReactComponent as ExitIcon } from "../icons/exit.svg";
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { ReactComponent as AddIcon } from "../icons/plus-icon.svg";
import { ReactComponent as RightArrow } from "../icons/right-arrow.svg";
import Slider from "react-slick";
import Cast from "./Cast";
import YouTube from "react-youtube";

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
};

const StyledMoviePreview = styled.div`
  background: url(${props => props.img}) no-repeat 100% / cover;
  padding: 25px;
  position: absolute;
  transition: all 500ms;
  opacity: 0;
  top: 100%;
  max-height: 938px;

  .movie-details > span {
    margin: 0 10px;
    font-style: italic;
    color: ${props => props.theme.accentColor};
  }
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  .content {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    position: relative;
    z-index: 2;
    color: #fff;
    .cast-container {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 100%;
      .cast-row {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
  .movie-details {
    max-width: 700px;
    padding: 15px;
  }
  .trailer {
    min-width: 640px;
    padding-top: 50px;
  }
  .movie-buttons {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    > button:active {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
        0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
    button {
      cursor: pointer;
      transition: background 250ms;
    }
    .add {
      background: #2f6832;
      :hover {
        background: #1e401f;
      }
    }
    .remove {
      background: #860000;
    }
    .details {
      background: #a18a57;
      :hover {
        background: #665635;
      }
    }
    .disabled {
      opacity: 0.58;
      cursor: default;
      background: #535353;
    }
  }
  .exit-icon {
    height: 25px;
    width: 25px;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 12px;
  margin: 5px;
  text-align: center;
  vertical-align: center;
  font: 1rem ${props => props.theme.headerFont};
  > span {
    margin: 0 10px;
  }
  svg {
    height: 25px;
    width: 25px;
    color: white;
    fill: #fff;
  }
`;

export default class MoviePreview extends Component {
  //this function is so that you don't have to use an arrow function in the render method, which will cause a re-render every time the component mounts
  addFavorite = () => {
    const movie = this.props.details;
    this.props.disableAddButton();
    this.props.addFavorite(movie);
  };
  removeFavorite = () => {
    const { id } = this.props.details;
    this.props.removeFavorite(id);
  };

  render() {
    const {
      title,
      desc,
      releaseDate,
      backdrop,
      runtime,
      cast,
      id,
      videoKey,
      disableAddButton
    } = this.props.details;

    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      }
    };

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      className: "cast-row",
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

    const AddButton = (
      <Button
        onClick={this.addFavorite}
        className={disableAddButton ? "disabled" : "add"}
        disabled={disableAddButton}
      >
        <AddIcon />
        <span>{disableAddButton ? "Added!" : "Add to Favorites"}</span>
      </Button>
    );

    const MoreDetails = (
      <Link
        to={{
          pathname: id,
          state: {
            movieId: id
          }
        }}
      >
        <Button onClick={this.addFavorite} className='details'>
          <span>See Details</span>
          <RightArrow />
        </Button>
      </Link>
    );

    const RemoveButton = (
      <Button className='remove' onClick={this.removeFavorite}>
        {this.props.movieType === "favorites" ? <CloseIcon /> : null}
        <span>Remove</span>
      </Button>
    );

    return (
      <Transition in={this.props.animate} timeout={500} exit={false}>
        {state => (
          <StyledMoviePreview
            img={
              backdrop ? `https://image.tmdb.org/t/p/w1280${backdrop}` : null
            }
            style={{
              ...transitionStyles[state]
            }}
            className='jawbone'
            ref={this.jawboneRef}
          >
            <div className='overlay' />
            <div className='content'>
              <ExitIcon
                className='exit-icon'
                onClick={this.props.exitPreview}
              />
              <div className='movie-details'>
                <h1>{title}</h1>
                <span>Released:</span>
                {formatDate(releaseDate)}
                <span>Runtime:</span>
                {runtime} minutes
                <p>{desc}</p>
                <div className='movie-buttons'>
                  {AddButton}
                  {MoreDetails}
                  {this.props.movieType === "favorites" ? RemoveButton : null}
                </div>
              </div>
              <div className='trailer'>
                <YouTube videoId={videoKey} opts={opts} />
              </div>
              <div className='cast-container'>
                <h3>Cast</h3>
                <Slider {...settings}>
                  {cast.map(cast =>
                    cast.profile_path ? (
                      <Cast details={cast} key={cast.id} />
                    ) : null
                  )}
                </Slider>
              </div>
            </div>
          </StyledMoviePreview>
        )}
      </Transition>
    );
  }
}
