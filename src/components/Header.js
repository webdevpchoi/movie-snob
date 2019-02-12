import React from "react";
import styled from "styled-components";

import SearchForm from "./SearchForm";

const StyledHeader = styled.header`
  background: #403f4c;
  overflow: hidden;
`;

const H1 = styled.h1``;

const Header = ({ submitHandler, changeHandler }) => {
  return (
    <StyledHeader>
      <H1>Movie Snob</H1>
      <SearchForm submitHandler={submitHandler} changeHandler={changeHandler} />
    </StyledHeader>
  );
};

export default Header;
