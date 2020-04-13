import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const params = useParams()
  console.log("PARAMS?", params)
  const [categories, setCategories] = useState('')
  useEffect(() => {
    fetch(`/categories/${params.country.replace(" ", "")}`)
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



export default NavBar;
