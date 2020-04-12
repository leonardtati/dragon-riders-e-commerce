import React from 'react';
// import dragon from '../../../public/dragon.png'
import styled from 'styled-components'
// const dragonIcon = dragon;

const DragonIcon = () => {
    return (
        <>
            {/* <div>Cart Icon</div> */}
            <ImageContainer>
            <img  src='/dragon.png' alt="Dragon" width="40px" height="40px"></img>
            </ImageContainer>
           
        </>
    )
}

const ImageContainer = styled.div`
background-color: #ffffff;
`
export default DragonIcon;