import React from "react";
import styled from 'styled-components';
// import "./Footer.css";

function Footer() {
  return (
    <Wrapper>
      <footer>
        <h1>Footer</h1>
        <li>@DragonRiders</li>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  #ffffff;
`;

export default Footer;
