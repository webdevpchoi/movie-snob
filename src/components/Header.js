import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../icons/film.svg";

import SearchForm from "./SearchForm";

const StyledHeader = styled.header`
  background: #403f4c;
  overflow: hidden;
`;

const HeaderLogo = styled.div`
  /* font: italic 3rem 700 ${props => props.theme.headerFont}; */
  font-family: ${props => props.theme.headerFont};
  font-weight: 900;
  font-style: italic;
  font-size: 1.2rem;
  display: flex;
  position: relative;
  color: ${props => props.theme.accentColor};
  padding: 15px 15px;

  h1 {
    margin : 0;
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
`;

const Header = ({ submitHandler, changeHandler }) => {
  return (
    <StyledHeader>
      <HeaderLogo>
        <h1>MovieSnob</h1>
        <Logo />
      </HeaderLogo>
      <SearchForm submitHandler={submitHandler} changeHandler={changeHandler} />
    </StyledHeader>
  );
};

export default Header;
