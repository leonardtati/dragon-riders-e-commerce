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
  height: 100px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const Message = styled.div`
  font-size: 30px;
  color: #fff;
`;

export default SnackBar;
