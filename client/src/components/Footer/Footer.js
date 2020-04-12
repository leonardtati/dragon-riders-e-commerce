import React from "react";
import styled from 'styled-components';
// import "./Footer.css";

function Footer() {
  return (
    <Wrapper>
      <footer>
        <h1>Footer</h1>
        <input className="message-input" />
        <li>@DragonRiders</li>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color:  rgb(242, 242, 242)
`;

export default Footer;
