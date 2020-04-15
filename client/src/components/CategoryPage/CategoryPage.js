import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { requestCategoriesProducts, receiveCategoriesProducts, receiveCategoriesProductsError} from '../../actions'
import styled from "styled-components"
import NavBar from '../NavBar/NavBar'

const CategoryPage = () => {

  const dispatch = useDispatch();
  const productType = useParams();
  const categoryProducts = useSelector((state) => state.categoryProduct.categoryProducts)
  const categories = useSelector((state) => state.category.categories)
  const countryList = useSelector((state) => state.country.countries);
  const currentCountry = useSelector((state) => state.feature.currentCountry)

  console.log(currentCountry)

  useEffect(() => {
    dispatch(requestCategoriesProducts())
    //ISSUE 1
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
  <>
  {categoryProducts.map(product => {
    if (productType.country === product.category){
     //ISSUE 2
      return (
   
   <ProductWrapper>

   <h2>{`Shop All Things ${product.category} here!`}</h2>
   <img src={product.imageSrc}></img>
   <div>{product.name}</div>
   <div>{product.price}</div>
   <div>{product.category}</div>
   <button>Buy Now</button>

   </ProductWrapper>
   )
    }
  })}
  </>
  
  );
}

const ProductWrapper = styled.div`
    padding: 36px;
    border-radius: 16px;
    box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
    text-align: center;
`

export default CategoryPage;
