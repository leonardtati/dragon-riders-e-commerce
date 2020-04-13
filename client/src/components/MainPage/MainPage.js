import React from "react";
import NavBar from '../NavBar'
import styled from 'styled-components'
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const MainPage = () => {
  return (
    <>
    <NavBar/>
  <h1>DRAGON FOR LIFE</h1>
 
  <h2>Featured Products</h2>
  <FeaturedProducts />
  </>
  );
};

// const FeatureWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//   grid-gap: 32px;
//   margin: 32px 0;
// `
export default MainPage;
