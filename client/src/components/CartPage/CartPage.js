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
        <span>QTY</span>
        <span>ITEM</span>
        <span>PRICE</span>
        <span></span>

        {cartStateArray.map((item) => {
          return (
            <Subtitle>
              <Qty
                value={item.quantity}
                onChange={(ev) =>
                  dispatch(updateProduct(item.id, ev.target.value))
                }
              ></Qty>

              <ItemList>{item.name}</ItemList>
              <Price>{item.price}</Price>
              <button
                style={{ width: 50 }}
                onClick={() => dispatch(removeProduct(item.id))}
              >
                X
              </button>
            </Subtitle>
          );
        })}
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
  /* position: sticky;
  top: 0;
  min-width: 300px;
  height: 100vh; */
  background: hsl(258deg, 100%, 50%);
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  /* display: flex;
  flex-direction: row;
  justify-content: center; */
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin: 32px 0; */
`;

const Top = styled.div`
  /* max-height: calc(100vh - 240px);
  overflow: auto;
  padding-left: 32px;
  padding-right: 32px; */
  display: grid;
  /* flex-direction: row;
  justify-content: center; */
  /* grid-template-columns: 1fr; */
  grid-gap: 32px;
  margin: 32px 0;
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
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Subtitle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
  margin: 32px 0;
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  /* opacity: 0.75; */
`;

const Qty = styled.input`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: orange;
  width: 100px;
  border: none;
  text-align: center;
  /* opacity: 0.75; */
`;

const Price = styled.ul`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: orange;
  width: 100px;
  /* opacity: 0.75; */
`;

const ItemList = styled.ul`
  /* list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 20px; */
  /* padding-top: 32px; */
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: orange;
  width: 300px;
`;

const Total = styled.div`
  font-size: 22px;
  padding: 10px 20px;
`;
export default Cart;
