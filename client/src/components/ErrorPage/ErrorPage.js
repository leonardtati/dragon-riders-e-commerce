import React from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import LandingPage from "../LandingPage/LandingPage";
const ErrorPage = () => {
  return (
    <Wrapper>
      {/* <h1>ErRoR 404 SOmEtHinG WeNT WRong :/</h1> */}
      <Redirect to="/">
        <Link to="/">Home Page</Link>
        <LandingPage />
      </Redirect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 24px;
  width: 1000px;
  height: 100vh;
  background-image: url("/error_page.png");
  background-size: cover;
`;

export default ErrorPage;
