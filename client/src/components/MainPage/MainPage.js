import React from "react";
import NavBar from '../NavBar'
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

export default MainPage;
