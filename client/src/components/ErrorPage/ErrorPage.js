import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <>
      <ErrorWrapper>
        <h1>Something Went Wrong! Please Use the Following Link to get back to Shopping</h1>
        <Link to="/">Link</Link>
        <div>ErrorPage</div>
      </ErrorWrapper>
    </>
  )
}

const ErrorWrapper = styled.div`
  padding-bottom: 24px;
  width: 100%;
  height: 100vh;
  background-image: url("/bgimage.png");
  background-size: cover;
`;

export default ErrorPage;

