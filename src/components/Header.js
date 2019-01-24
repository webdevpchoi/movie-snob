import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: #403f4c;
  overflow: hidden;
`;

const H1 = styled.h1``;

const Header = () => {
  return (
    <StyledHeader>
      <H1>Movie Snob!</H1>
      <p>amongst other things...</p>
    </StyledHeader>
  );
};

export default Header;
