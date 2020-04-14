import React from "react";
import NavBar from '../NavBar'
import styled from 'styled-components'
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const MainPage = () => {
  return (
    <>
    <NavBar/>
  <h1>DRAGON FOR  HILIFE</h1>
 
  <h2>Featured Products</h2>
  <FeaturedProducts />
  </>
  );
};


export default MainPage;
