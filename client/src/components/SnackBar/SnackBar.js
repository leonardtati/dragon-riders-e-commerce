import React from "react";
import styled from "styled-components";
const SnackBar = () => {
  return (
    <Wrapper>
      <Message>Congrats on Wasting your money on us LOSER!!!</Message>;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  height: 650px;
  width: 1150px
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  border-radius: 20px;
`;

const Message = styled.div`
  font-size: 30px;
  color: #fff;
`;

export default SnackBar;
