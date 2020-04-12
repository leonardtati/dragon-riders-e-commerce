import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const [categories, setCategories] = useState('')
  useEffect(() => {
    fetch('/categories/unitedstates')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setCategories(data.categories)
    })
  }, [])
  console.log(categories)
  return (
  <>
  <NavContainer>
    {Object.values(categories).map(category => {
      return (
        <StyledLink to={`/categories/${category.categories}`}>{category}</StyledLink>
      )
    })}
  </NavContainer>
  </>
  )
};

const NavContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-grow: 0.25;
background-color: #333;
padding-top: 20px;
padding-bottom: 20px;
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #111
    border: 2px solid red
    border-radius: 50px;
  }

`

{/* <StyledLink to="/categories/:category2">Category 2</StyledLink>
<StyledLink to="/categories/:category3">Category 3</StyledLink>
<StyledLink to="/categories/:category4">Category 4</StyledLink>
<StyledLink to="/categories/:category5">Category 5</StyledLink>
<StyledLink to="/categories/:category6">Category 6</StyledLink>
<StyledLink to="/categories/:category7">Category 7</StyledLink> */}

export default NavBar;
