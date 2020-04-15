import React from "react";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { getStoreProductArray } from '../../reducers/cart-reducer';
import { useSelector } from 'react-redux';


const CartIcon = () => {
  const storeProduct = useSelector(getStoreProductArray);
  return (
    <>
      <Icon icon={shoppingCart} size={30}></Icon>
      <div>{storeProduct.length}</div>
    </>
  );
};

export default CartIcon;
