import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeProduct, updateProduct } from "../../actions";
import { formatPriceForHumans } from "../../helpers";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const cartStateArray = Object.values(cartState);
  const subtotal = useSelector((state) => {
    const itemsPrice = Object.values(state.cart);
    return itemsPrice.reduce((acc, item) => {
      return item.price * item.quantity + acc;
    }, 0);
  });

  console.log("IN CART");

  return (
    <Wrapper>
      <Top>
        <Title>Your Cart</Title>
        <Subtitle>
          <TitleRow>
            <span>QTY</span>
            <span>ITEM</span>
            <span>PRICE</span>
            <span></span>
            <Qty>
              12
              {/* {items.length} {items.length === 1 ? 'Item' : 'Items'} */}
            </Qty>
            <ItemList>
              Product I want to buy
              {}
            </ItemList>
            <Price>$120.99</Price>
            <ButtonX>X</ButtonX>
          </TitleRow>
        </Subtitle>
      </Top>
      <Bottom>
        <Total>
          Total: <strong>{formatPriceForHumans(subtotal)}</strong>
        </Total>
        <button style={{ width: 140 }}>Purchase</button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #E5E5E5;
  color: black;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 100px;
`;

const Top = styled.div`
  display: grid;
  grid-gap: 0px;
  margin: 0;
  grid-template-columns: 2fr 1fr 1fr 1fr;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 64px;
  padding-left: 32px;
  padding-right: 32px;
`;

const Title = styled.h2`
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Subtitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0;
  margin: 0;
  margin-top: 0px;
  font-size: 16px;
 `;

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0;
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
`;

const ButtonX = styled.button`
  background-color: #C4C4C4;
  width: 50px;
  font-size: 16px;
`;

const ItemList = styled.ul`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: white;
  width: 300px;
  height: 25px;
  text-align: left;
`;

const Qty = styled.div`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: white;
  width: 60px;
`;

const Price = styled.div`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: white;
  width: 80px;
`;

const Total = styled.div`
  font-size: 22px;
  padding: 10px 20px;
`;
export default Cart;
