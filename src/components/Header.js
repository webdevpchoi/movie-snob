import React from "react";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const StyledHeader = styled.header`
  background: #403f4c;
  overflow: hidden;
`;

const HeaderLogo = styled.h1`
  font-family: ${props => props.theme.headerFont};
`;

const Header = ({ submitHandler, changeHandler }) => {
  return (
    <StyledHeader>
      <HeaderLogo>Movie Snob</HeaderLogo>
      <SearchForm submitHandler={submitHandler} changeHandler={changeHandler} />
    </StyledHeader>
  );
};

export default Header;
