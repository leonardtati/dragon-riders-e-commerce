<<<<<<< HEAD:client/src/components/Home/Home.js
import React from "react";
import styled from "styled-components";

=======
import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar'
>>>>>>> 35cb376ee54add2bf53117f94f7eeddcd9dced72:client/src/components/LandingPage/LandingPage.js
// import ListingGrid from '../ListingGrid/ListingGrid';
// import Paragraph from './Paragraph';

// import { items } from '../data/data';

import DropDown from "../DropDown/DropDown";

function Home() {
<<<<<<< HEAD:client/src/components/Home/Home.js
  return (
    <>
      <Intro>
        <p>
          Weary Sweaty sells the finest wearable equipment to help you stay
          healthy.
        </p>
        <DropDown />
      </Intro>
      {/* <ListingGrid itemList={Object.values(items)} /> */}
    </>
  );
=======
    return (
        <>
            <Intro>
                <p>
                    HELLO !!!!!!
                </p>
                
                {/* <Paragraph>
                    <strong>Browse items:</strong>
                </Paragraph> */}
            </Intro>
            {/* <ListingGrid itemList={Object.values(items)} /> */}
        </>
    );
>>>>>>> 35cb376ee54add2bf53117f94f7eeddcd9dced72:client/src/components/LandingPage/LandingPage.js
}

const Intro = styled.div`
  padding-bottom: 24px;
`;

export default Home;
