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

  console.log("CARTSTATEINCAR", cartState);

  const [open, setOpen] = useState(false);
  console.log("open", open);
  return (
    <Wrapper>
      <Top>
        <Title>Your Cart</Title>
        <Description>
          <span>QTY</span>
          <span>ITEMS</span>
          <span>PRICE</span>
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
              <RemoveItem
                style={{ width: 50 }}
                onClick={() => dispatch(removeProduct(item.id))}
              >
                X
              </RemoveItem>
            </Subtitle>
          );
        })}
      </Top>
      <Bottom>
        <Total>
          Total: <strong>{formatPriceForHumans(subtotal)}</strong>
        </Total>
        <ProceedTocheckOut style={{ width: 140 }} onClick={() => setOpen(true)}>
          Proceed to checkout
        </ProceedTocheckOut>
      </Bottom>
      {open ? (
        <ConfirmPaymentModal
          open={open}
          cartStateArray={cartStateArray}
          price={formatPriceForHumans(subtotal)}
        />
      ) : (
        <></>
      )}
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
  justify-content: space-around;
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
  display: flex;
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
  justify-content: center;
`;

const Subtitle = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 66px;
  margin-right: 66px;
  margin-bottom: 6px;
  font-size: 16px;
  border-bottom: solid;
  justify-content: space-around;
  border-bottom-color: #e6e6e6;
`;

const Qty = styled.input`
  border: none;
  text-align: center;
  margin-left: 55px;
  color: #048ba9;
`;
const ItemList = styled.span`
  display: inline-block;
  font-size: 16px;
  background-color: white;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 200px;

  &:hover {
    overflow: wrap;
  }
`;

const Price = styled.div`
  width: 100px;
  margin-left: 269px;
  margin-bottom: 0px;
  color: #e28181;
`;
const RemoveItem = styled.button`
  border: none;
`;

const Total = styled.div`
  font-size: 22px;
  padding: 10px 20px;
  color: black;
`;

const ProceedTocheckOut = styled.button`
  padding: 15px;
  color: white;
  background-color: #404040;
`;

export default Cart;
