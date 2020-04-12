import React, { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Header from '../Header/Header';
// import About from './About';
import LandingPage from '../LandingPage/LandingPage';
import MainPage from '../MainPage/MainPage';
import CategoryPage from '../CategoryPage/CategoryPage';
import ProductPage from '../ProductPage/ProductPage';
import ErrorPage from '../ErrorPage/ErrorPage';
// import ItemDetails from './ItemDetails';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import styled from 'styled-components';
// import Sellers from './Sellers';
// import ItemDetailsSeller from './ItemDetailsSeller';
import Footer from '../Footer/Footer';
import Cart from '../Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Cart />
        <Main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/companies/:country">
              <MainPage />
            </Route>
            <Route path="/categories/:country">
              <CategoryPage />
            </Route>
            <Route path="/products/:country">
              <ProductPage />
            </Route>
            <Route path="/error">
              <ErrorPage />
            </Route>
          </Switch>
        </Main>
      </Wrapper>

      <GlobalStyles />
      <Footer />
    </BrowserRouter>

  );
}

const Wrapper = styled.div`
max-width: 800px;
margin: auto;
`;

const Main = styled.main`
padding-top: 32px;
padding-bottom: 32px;
`;

export default App;


// function App() {
//   const [bacon, setBacon] = useState(null);

//   useEffect(() => {
//     fetch('/bacon')
//       .then(res => res.json())
//       .then(data => setBacon(data));
//   }, []);

//   return <div>{bacon ? bacon : `...where's my stuff?...`}</div>;
// }

// export default App;
