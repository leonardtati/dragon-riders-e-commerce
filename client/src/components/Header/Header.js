import React from "react";
import styled from "styled-components";
import CartIcon from "../Cart/CartIcon";
import DragonIcon from "../Header/DragonIcon";

const Header = () => {
  return (
    <Wrapper>
      <CompanyInfo>
        <DragonIcon />
        <Title>Dragon Riders</Title>
      </CompanyInfo>
      <CartIconWrapper>
        <CartIcon />
      </CartIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

const CompanyInfo = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 10px;
`;

const CartIconWrapper = styled.div`
  margin-right: 40px;
  display: flex;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 800;
  color: black;
  margin: 0;
  margin-left: 10px;
  align-self: center;
`;

export default Header;
