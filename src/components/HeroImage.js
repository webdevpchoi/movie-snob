import React, { Component } from "react";
import styled from "styled-components/macro";
import placeholder from "../images/placeholder.jpg";

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
  }
`;

export default class HeroImage extends Component {
  render() {
    return (
      <StyledHero>
        <div className='hero-overlay'>
          <div className='movie-panel '>
            <div className='title'>Some Movie</div>
            <div className='movie-buttons'>
              <button>Play Trailer</button>
              <button>Add To Favorites</button>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              voluptate unde adipisci nisi repudiandae nesciunt qui odio. Eos
              itaque dolorem, officiis laboriosam animi, repellat, nulla
              praesentium minus ipsam beatae omnis?
            </p>
          </div>
        </div>
        <img src={placeholder} alt='' />
      </StyledHero>
    );
  }
}
