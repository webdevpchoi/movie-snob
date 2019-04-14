import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as SearchIcon } from "../icons/search.svg";

const StyledForm = styled.form`
  background: transparent;
  margin-right: 15px;
  display: flex;
  align-items: center;
  label {
    position: relative;
    input {
      width: 40px;
      height: 33px;
      text-indent: 10px;
      font-family: ${props => props.theme.headerFont};
      border-radius: 5px;
      border: none;
      box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
      transition: width 200ms, background 200ms;
      background: rgba(252, 213, 129, 1);
      color: transparent;
    }
    input::placeholder {
      color: transparent;
    }
    input:focus {
      width: 250px;
      background: #fff;
      color: #000;
    }
    input:focus::placeholder {
      color: #000;
    }
    .search-icon {
      width: 20px;
      height: auto;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      fill: #161e35;
    }
  }
`;
const SearchForm = ({ changeHandler, className, submitHandler }) => {
  return (
    <StyledForm onSubmit={submitHandler} className={className}>
      <label htmlFor='search-movie'>
        <input
          type='text'
          id='search-movie'
          className='movie-input'
          placeholder='Search Movie...'
          onChange={changeHandler}
        />
        <SearchIcon className='search-icon' />
      </label>
    </StyledForm>
  );
};

export default SearchForm;
