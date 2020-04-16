import React from "react";
import NavBar from "../NavBar";
import styled from "styled-components";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <h1>DRAGON FOR LIFE</h1>

      <FeatureHeader>Featured Products</FeatureHeader>
      <FeaturedProducts />
    </>
  );
};

const FeatureHeader = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;
export default MainPage;
