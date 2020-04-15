import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { requestCategoriesProducts, receiveCategoriesProducts, receiveCategoriesProductsError} from '../../actions'
import styled from "styled-components"

const CategoryPage = () => {

  const dispatch = useDispatch();
  const productType = useParams();
  const categoryProducts = useSelector((state) => state.categoryProduct.categoryProducts)
  const categories = useSelector((state) => state.category.categories)
  const currentCountry = useSelector((state) => state.feature.currentCountry)

  useEffect(() => {
    dispatch(requestCategoriesProducts())
    fetch(`/products/${currentCountry.replace(" ", "")}`)
    .then(res => res.json())
    .then(data => {
      dispatch(receiveCategoriesProducts(data.products));
    })
    .catch(error => {
      dispatch(receiveCategoriesProductsError(error))
    })
  }, [categories])
  return (
  <FeatureWrapper>
  {categoryProducts.map(product => {
    if (productType.country === product.category){
      return (
    <>  
    <ProductLink to={`/detail/${product.id}`}>
    <ProductWrapper>
        <ProductImage src={product.imageSrc}></ProductImage>
        <ProductName>{product.name}</ProductName>
        <ProductCategory>{product.price}</ProductCategory>
        <ProductPrice>{product.category}</ProductPrice>
         <div>{product.numInStock}</div>
          <button>Buy Now</button>
          </ProductWrapper>
    </ProductLink>
  
   </>
   )
    }
  })}
  </FeatureWrapper>
  
  );
}

const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 30px;
  margin: 32px 0;
`

const ProductWrapper = styled.div`
    padding: 36px;
    border-radius: 16px;
    box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
    text-align: center;
`

const ProductImage = styled.img`
  border-radius: 12px;
  width 60%;
`

const ProductName = styled.h2`
  font-size: 24px;
  color: #333;
  margin-top: 12px;
`
const ProductPrice = styled.div`
    color: red;
`
const ProductCategory = styled.div`
  color: #333;
  font-size: 18px;
`


const ProductLink = styled(Link)`
  text-decoration: none;
  transition: transform 250ms;

  &:hover {
    transform: scale(1.1);
    transform-origin: center;
  }
`

export default CategoryPage;
