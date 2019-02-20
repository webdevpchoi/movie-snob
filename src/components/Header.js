import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../icons/film.svg";

const NavBar = styled.div`
  background: ${props => props.theme.mainColor};
  font-family: ${props => props.theme.headerFont};
  font-weight: 900;
  font-style: italic;
  font-size: 1.2rem;
  display: flex;
  color: ${props => props.theme.accentColor};
  padding: 15px 15px;

  h1 {
    margin: 0;
    position: relative;
    z-index: 10;
    margin-left: 30px;
  }

  svg {
    height: 50px;
    width: 50px;
    z-index: 0;
    position: absolute;
    top: 20px;
  }

  .logo-container {
    position: relative;

    h1 {
      margin: 0;
      position: relative;
      z-index: 10;
      margin-left: 30px;
    }
    svg {
      height: 50px;
      width: 50px;
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .spacer {
    flex: 1;
  }

  .inner-nav {
    display: flex;
    background: transparent;
    padding: 0 15px;
    flex: 0 0 400px;
    align-items: center;
    justify-content: space-around;
    h4 {
      margin: 0;
      font-weight: 300;
      font-style: normal;
    }
  }
`;

const Header = ({ submitHandler, changeHandler }) => {
  return (
    <React.Fragment>
      <NavBar>
        <div className='logo-container'>
          <h1>MovieSnob</h1>
          <Logo />
        </div>
        <div className='spacer' />
        <div className='inner-nav'>
          <h4>Popular</h4>
          <h4>Now Playing</h4>
          <h4>Upcoming</h4>
        </div>
      </NavBar>
    </React.Fragment>
  );
};

export default Header;
