import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  return (
  <>
  <NavContainer>
    <StyledLink to="/categories/:category1">Category 1</StyledLink>
    <StyledLink to="/categories/:category2">Category 2</StyledLink>
    <StyledLink to="/categories/:category3">Category 3</StyledLink>
    <StyledLink to="/categories/:category4">Category 4</StyledLink>
    <StyledLink to="/categories/:category5">Category 5</StyledLink>
    <StyledLink to="/categories/:category6">Category 6</StyledLink>
    <StyledLink to="/categories/:category7">Category 7</StyledLink>
  </NavContainer>
  </>
  )
};

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
flex-grow: 0.25
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: red
    border: 2px solid red
    border-radius: 50px;
  }
`

export default NavBar;
