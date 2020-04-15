import React, { useState }from 'react';
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
  const [product, setProduct] = useState()
  const dispatch = useDispatch();
  const productId = useParams();
  const oneProduct = useSelector((state) => state.product.products)
  useEffect(() => {
    dispatch(requestCountryProducts())
    fetch(`/products/detail/${productId.productId}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data.product)
      dispatch(receiveCountryProducts(data))
    })
    .catch(error => {
      dispatch(receiveCountryProductsError(error))
    })
  }, [productId])
  console.log(product)
  return (
  <div>
    <Header>Product Details</Header>
  {Object.values(oneProduct).map(product => {
    const inStock = product.numInStock <= 0;
    return (
      <ProductContainer>
        <div className="imageContainer">
    <ProductImage src={product.imageSrc}></ProductImage>
    </div>
    <ProductName>{product.name}</ProductName>
    <ProductPrice>{product.price}</ProductPrice>
    <ProductCategory>Location: {product.body_location}</ProductCategory>
    <ProductCategory>Category: {product.category}</ProductCategory>
   <ProductCategory>{inStock ? 
          `We're Out of Stock! Come Back For This Shortly!` :
          product.numInStock <= 5 && product.numInStock >= 2 ?
          `There are only ${product.numInStock} item(s) left!` : 
          product.numInStock <= 1 ?
          `Only ${product.numInStock} left!` :
          `Stock: ${product.numInStock}`}
  </ProductCategory>
  <div className="buttonContainer">
  <Button disabled={inStock} onClick={()=> console.log("Clicked")}>Add To Cart </Button>
  </div>
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
  padding: 30px;
  &:hover {
    box-shadow: 2px 4px 24px rgba(0,0,0, 0.6)
  }
  .imageContainer {
    display: flex;
    justify-content: center;
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
`
const ProductImage = styled.img`
  width: 80%
  display: flex;
  justify-content: center;
  align-items: center;
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
const Button = styled.button`
  background-color: #048BA9;
  color: white;
  padding: 10px;
  font-size: 12px;
  border-radius: 7px;
  cursor: pointer;
  &: disabled {
    background-color: grey;
  }
}`
export default ProductPage;
