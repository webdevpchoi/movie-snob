import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledHero = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-overlay {
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .movie-panel {
    position: absolute;
    padding: 15px;
    max-width: 500px;
    bottom: 0;
    color: #fff;
  }
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .movie-panel {
    div {
      font-size: 4.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

export default class HeroImage extends Component {
  render() {
    const { backdrop_path: backdrop, title, overview } = this.props.randomMovie;
    return (
      <StyledHero>
        <div className='hero-overlay'>
          <div className='overlay' />
          <div className='movie-panel '>
            <div>{title}</div>
            <p>{overview}</p>
          </div>
        </div>
        <img src={`https://image.tmdb.org/t/p/w1280/${backdrop}`} alt='' />
      </StyledHero>
    );
  }
}
