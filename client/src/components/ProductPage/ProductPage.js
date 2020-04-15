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
  <div>
    <Header>Product Details</Header>
  {Object.values(oneProduct).map(product => {
    return (
      <ProductContainer>
    <ProductImage src={product.imageSrc}></ProductImage>
    <ProductName>{product.name}</ProductName>
    <ProductPrice>{product.price}</ProductPrice>
    <ProductCategory>Location: {product.body_location}</ProductCategory>
    <ProductCategory>Category: {product.category}</ProductCategory>
    {product.numInStock < 5 ? 
    `There are only ${product.numInStock} item(s) left!` : 
     `Stock: ${product.numInStock}`
     
  }
    </ProductContainer>
    )
  })}

  </div>
  
  )
};
const Header = styled.h1`
  text-align: center;
`

const ProductContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  width: 300px;

  &:hover {
    box-shadow: 2px 4px 24px rgba(0,0,0, 0.6)
  }
`
const ProductImage = styled.img`
  width: 80%
`

const ProductName = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  padding: 20px
`

const ProductPrice = styled.div`
    color: red;
    text-align: center
`
const ProductCategory = styled.div`
  color: #333;
  font-size: 18px;
`

export default ProductPage;
