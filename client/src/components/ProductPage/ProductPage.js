import React from 'react';
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { 
          requestCountryProducts, 
          receiveCountryProducts, 
          receiveCountryProductsError, 
          } from '../../actions'

import styled from 'styled-components';

const ProductPage = () => {

  const dispatch = useDispatch();
  const productId = useParams();
  const oneProduct = useSelector((state) => state.product.products)
  console.log(oneProduct)
  useEffect(() => {
    dispatch(requestCountryProducts())
    fetch(`/products/detail/${productId.productId}`)
    .then(res => res.json())
    .then(data => {
      dispatch(receiveCountryProducts(data))
    })
    .catch(error => {
      dispatch(receiveCountryProductsError(error))
    })
  }, [productId])
  return (
  <>

  <div></div>
  </>
  
  )
};


export default ProductPage;
