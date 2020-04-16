import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeProduct, updateProduct } from "../../actions";
import { formatPriceForHumans } from "../../helpers";
import ConfirmPaymentModal from "../ConfirmPaymentModal/ConfirmPaymentModal";

const Cart = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const cartStateArray = Object.values(cartState);
  const subtotal = useSelector((state) => {
    const itemsPrice = Object.values(state.cart);
    return itemsPrice.reduce((acc, item) => {
      const removeDollarSign = item.price.substr(1);
      const stringToNum = parseFloat(removeDollarSign);
      return stringToNum * item.quantity + acc;
    }, 0);
  });

  const [open, setOpen] = useState(false);
  console.log('open', open);
  return (
    <Wrapper>
      <Top>
        <Title>Your Cart</Title>
        <Description>
          <span>QTY</span>
          <span>ITEM</span>
          <span>PRICE</span>
          <span></span>
        </Description>

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
        <button style={{ width: 140 }} onClick={() => setOpen(true)}> Proceed to checkout</button>
      </Bottom>
      {open ? <ConfirmPaymentModal open={open} cartStateArray={cartStateArray} price={formatPriceForHumans(subtotal)} /> : <></>}

    </Wrapper>

  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Top = styled.div`
  color: black;
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
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
`;

const Subtitle = styled.div`
  display: flex;
  grid-gap: 32px;
  margin: 32px 0;
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  border-bottom: solid;
  justify-content: space-around;
  border-bottom-color: grey;
`;

const Qty = styled.input`
  border: none;
  text-align: center;
  /* opacity: 0.75; */
`;

const Price = styled.div`
  width: 100px;
`;

const ItemList = styled.div`
  margin: 0;
  margin-top: 8px;
  font-size: 16px;
  background-color: white;
  width: 300px;
`;

const Total = styled.div`
  font-size: 22px;
  padding: 10px 20px;
  color: black;
`;

export default Cart;
