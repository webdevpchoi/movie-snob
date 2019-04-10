import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../icons/film.svg";
import SearchForm from "./SearchForm";

const StyledHeader = styled.div`
  background: transparent;
  font-family: ${props => props.theme.headerFont};
  font-weight: 900;
  font-style: italic;
  font-size: 1.2rem;
  display: flex;
  color: ${props => props.theme.accentColor};
  padding: 15px 15px;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100vw;

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
`;

const Header = ({ changeHandler, submitHandler }) => {
  return (
    <StyledHeader>
      <div className='logo-container'>
        <h1>MovieSnob</h1>
        <Logo />
      </div>
      <div className='spacer' />
      <SearchForm changeHandler={changeHandler} submitHandler={submitHandler} />
    </StyledHeader>
  );
};

export default Header;
