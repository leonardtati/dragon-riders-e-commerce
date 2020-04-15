import React from "react";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { getStoreProductArray } from "../../reducers/cart-reducer";

import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { useSelector } from "react-redux";

// import { getStoreProductsArray } from "../../reducers/cart-reducer";

const CartIcon = () => {
  const productQuantity = useSelector((state) => {
    const productItems = Object.values(state.cart);
    console.log("INCARTICON", productItems);
    return productItems.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
  });

  return (
    <>
      <LinkToCart to={"/cart"}>
        <Icon icon={shoppingCart} size={30}></Icon>
        {productQuantity > 0 ? (
          <NumProducts>{productQuantity}</NumProducts>
        ) : (
          <></>
        )}
      </LinkToCart>
    </>
  );
};

const NumProducts = styled.div`
  margin-left: 5px;
  display: flex;
  align-content: center;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background-color: red;
  color: white;
`;
const LinkToCart = styled(NavLink)`
  color: black;
`;

export default CartIcon;
