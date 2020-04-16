import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>ErRoR 404 SOmEtHinG WeNT WRong :/</h1>
      <Link to="/">Home Page</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 24px
  width: 100%;
  height: 100vh;
  background-image: url("/Error404.jpg");
  background-size: cover;
`;

export default ErrorPage;
