import React from "react";
import styled from "styled-components";
// import ListingGrid from '../ListingGrid/ListingGrid';
// import Paragraph from './Paragraph';

// import { items } from '../data/data';
import { useSelector } from 'react-redux';
import DropDown from "../DropDown/DropDown";

function Home() {
  const countriesStatus = useSelector((state) => state.country.status);
  return (
    <>
      <LandingWrapper>
        {/* <p>
          Weary Sweaty sells the finest wearable equipment to help you stay
          healthy.
        </p> */}
        <DropDown />
      </LandingWrapper>
      {/* <ListingGrid itemList={Object.values(items)} /> */}
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

export default Home;
