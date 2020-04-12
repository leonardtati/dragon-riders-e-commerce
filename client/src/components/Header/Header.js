import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { COLORS } from '../theme/theme';
import CartIcon from '../Cart/CartIcon';
import DragonIcon from '../Header/DragonIcon';

const Header = () => {
  return (
    <Wrapper>
      <DragonIcon />

      <Title>Welcome To Dragon Riders</Title>

      <NavigationList>
        <Middle>
          <NavigationLink exact activeClassName="active" to="/">
            Home
            </NavigationLink>
        </Middle>
        {/* <li>
            <NavigationLink activeClassName="active" to="/about">
              About
          </NavigationLink>
          </li>
          <li>
            <NavigationLink activeClassName="active" to="/sellers">
              Sellers
          </NavigationLink>
          </li> */}
      </NavigationList>

    </Wrapper>
  );
};

const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color:  #ffffff;
`;

const Middle = styled.div`
display: flex;`

const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: black;
`;

const NavigationList = styled.ul`
    list-style-type: none;
    display: flex;
`;

const NavigationLink = styled(NavLink)`
    position: relative;
    text-decoration: none;
    padding: 0 16px;

    &.active {
        color: ${COLORS.secondary};
    }

    &:after {
        content: '';
        position: absolute;
        background-color: currentColor;
        left: 0;
        right: 0;
        bottom: -5px;
        width: 50%;
        margin: auto;
        height: 3px;
        transform: scaleX(0);
        transform-origin: center center;
        border-radius: 2px;
    }

    &.active:after {
        /* transition: transform 250ms, opacity 150ms; */
        transform: scaleX(1);
        opacity: 1;
    }
`;

export default Header;
