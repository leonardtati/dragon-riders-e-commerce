import React from "react";
import styled from "styled-components";
// import ListingGrid from '../ListingGrid/ListingGrid';
// import Paragraph from './Paragraph';

// import { items } from '../data/data';
import { useSelector } from 'react-redux';
import DropDown from "../DropDown/DropDown";
import ErrorPage from '../ErrorPage/ErrorPage';

function Home() { 
  
  const countriesStatus = useSelector((state) => state.country.status);
  const getCountries = useSelector((state) => state.country.countries)
  return (
    <>
      <LandingWrapper>
        <PageDescription>
          Weary Sweaty sells the finest wearable equipment to help you stay
          healthy.
        </PageDescription>
        <DropDown />
      </LandingWrapper>
    </>
  );
}

const LandingWrapper = styled.div`
  padding-bottom: 24px;
  width: 100%;
  height: 100vh;
  background-image: url("/bgimage.png");
  background-size: cover;
`;

const PageDescription = styled.p`
  background-color: black;
  color: white;
  text-align: center;
  font-size: 20px;
  padding: 10px;
`;

export default Home;
