import React from "react";
import styled from "styled-components";
const SnackBar = () => {
  return (
    <Message>
      <div>Congrats on Wasting your money on us LOSER!!!</div>
    </Message>
  );
};

const Message = styled.div`
  font-size: 30px;
  color: #fff;
  position: absolute;
  height: 650px;
  width: 1150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
`;

export default SnackBar;
