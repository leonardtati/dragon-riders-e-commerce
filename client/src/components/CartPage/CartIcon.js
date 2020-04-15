import React from "react";
import { Icon } from "react-icons-kit";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import { getStoreProductsArray } from "../../reducers/cart-reducer";

/*
  {Object.keys(products[4]).length > 0 ? (
        <NumProducts>{Object.keys(products[4]).length}</NumProducts>
      ) : (
        <></>
      )}

       const productQuantity = useSelector((state) => {
    const productItems = Object.values(state.cart);
    console.log("INCARTICON", productItems);
    return productItems.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
  });
 <div>{productQuantity}</div>
 <div>{productQuantity}</div>

*/

const CartIcon = () => {
  const feature = useSelector((state) => state.cart.feature);

  //console.log("PRODUCTQUANTITY", productQuantity);
  const products = useSelector(getStoreProductsArray);

  const productQuantity = useSelector((state) => {
    const productItems = Object.values(state.cart);
    console.log("INCARTICON", productItems);
    return productItems.reduce((acc, item) => {
      return item.quantity + acc;
    }, 0);
  });

  console.log("PRODUCTS", products);

  const productState = useSelector((state) => state.cart);

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const cartlength = Object.keys(products[4]).length;
    setIsLoaded(!isLoaded);

    console.log(products);
    console.log(cartlength);
    console.log("FEATUREINCARTICON", feature);
  }, []);

  return (
    <>
      <Icon icon={shoppingCart} size={30}></Icon>
      {productQuantity > 0 ? (
        <NumProducts>{productQuantity}</NumProducts>
      ) : (
        <></>
      )}
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

export default CartIcon;
