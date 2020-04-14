import React from "react";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";

const CartIcon = () => {
  return (
    <>
      {/* <div>Cart Icon</div> */}

      <Icon icon={shoppingCart} size={30}></Icon>
    </>
  );
};

export default CartIcon;
