import React from "react";
import styled from 'styled-components';
// import "./Footer.css";

function Footer(props) {
  return (
    <Wrapper>
      <footer>
        <p>Footer</p>
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
    background-color: grey;
`;

export default Footer;
