import React from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar'
// import ListingGrid from '../ListingGrid/ListingGrid';
// import Paragraph from './Paragraph';

// import { items } from '../data/data';

function Home() {
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
}

const Intro = styled.div`
    padding-bottom: 24px;
`;

export default Home;
