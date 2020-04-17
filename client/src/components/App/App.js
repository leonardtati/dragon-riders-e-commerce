import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../MainPage/MainPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import ProductPage from "../ProductPage/ProductPage";
import CartPage from "../CartPage/CartPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

function App() {
  // const countriesStatus = useSelector((state) => state.country.status);
  // const categoryStatus = useSelector((state) => state.category.status);
  // const productStatus = useSelector((state) => state.product.status);
  // const cartStatus = useSelector((state) => state.cart.status)
  const isError = useSelector((state) => {
    return Object.keys(state)
      .map((reducer) => {
        return state[reducer].status;
      })
      .filter((status) => status === "error");
  });

  return (
    <BrowserRouter>
      <Wrapper>
        <GlobalStyles />
        {isError.length ? (
          <ErrorPage />
        ) : (
          <>
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
                <Route path="/detail/:productId">
                  <ProductPage />
                </Route>
                <Route path="/cart">
                  <CartPage />
                </Route>
              </Switch>
            </Main>
            <TheFooter>
              <Footer />
            </TheFooter>
          </>
        )}
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
`;

const Main = styled.main`
  grid-area: main;
  padding: 0px;
`;

const TheFooter = styled.div`
  grid-area: footer;
  padding: 0px;
  height: 70px;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #f2f2f2;
  color: #050594;
`;

export default App;
