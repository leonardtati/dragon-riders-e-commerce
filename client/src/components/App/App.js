import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../MainPage/MainPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import ProductPage from "../ProductPage/ProductPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import styled from "styled-components";
import Footer from "../Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyles />
        <TheHead>
          <Header />
        </TheHead>
        <Main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/products/:country">
              <MainPage />
            </Route>
            <Route path="/categories/:country">
              <CategoryPage />
            </Route>
            <Route path="/products/detail/:productId">
              <ProductPage />
            </Route>
            <Route path="/error">
              <ErrorPage />
            </Route>
          </Switch>
        </Main>
        <TheFooter>
          <Footer />
        </TheFooter>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas:
    "header header header header"
    "main main main main"
    "main main main main"
    "main main main main"
    "main main main main"
    "main main main main"
    "main main main main"
    "footer footer footer footer";
  /* grid-gap: 32px; */
  width: 100vw;
  min-height: 100vh;
`;

const TheHead = styled.header`
  grid-area: header;
  box-shadow: 5px 0px 5px 10px #f5f5f5;
`;

const Main = styled.main`
  grid-area: main;
  padding: 0px;
`;

const TheFooter = styled.div`
  grid-area: footer;
  padding: 0px;
  /* margin-top: -50px; */
  height: 70px;
`;

export default App;
