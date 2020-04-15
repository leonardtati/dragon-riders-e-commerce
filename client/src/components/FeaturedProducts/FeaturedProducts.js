import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { requestFeatures, receiveFeatures, receiveFeaturesErrors, addProduct } from '../../actions'
import CircularProgress from "@material-ui/core/CircularProgress"
// import CategoryPage from "../CategoryPage/CategoryPage"
function FeaturedProducts() {
  const features = useSelector((state) => state.feature.features);
  const status = useSelector((state) => state.feature.status);
  const productState = useSelector((state) => state.cart);
  const feature = useSelector((state) => state.cart.feature);
  const countryId = useParams();
  const dispatch = useDispatch();
  const [isloaded, setIsLoaded] = React.useState(false);

  console.log("PRODUCTSTATEINFEATUREPRODUCTS");

    useEffect(() => {
        dispatch(requestFeatures())
        fetch(`/countries/${countryId.country.replace(" ", "")}/featuredproducts`)
            .then(res => res.json())
            .then(data => {
                console.log("DATE", data)
                dispatch(receiveFeatures({ data, countryId }));
            })
            .catch(error => {
                dispatch(receiveFeaturesErrors(error));
            })
    }, [])
    console.log('addProduct', addProduct)
    return (

        <FeatureWrapper>
            {status === "loading" ? <CircularProgress /> :
                features.map(feature => {
                    return (
                        <ProductWrapper>
                            <ProductImage src={feature.imageSrc}></ProductImage>
                            <ProductName>{feature.name}</ProductName>
                            <ProductPrice>{feature.price}</ProductPrice>
                            <button>Add To Cart</button>
                        </ProductWrapper>
                    )
                })}
            {/* <CategoryPage countryId={countryId.country}/> */}
        </FeatureWrapper>
    )
}

const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 32px;
  margin: 32px 0;
`;

const ProductWrapper = styled.div`
  padding: 36px;
  border-radius: 16px;
  box-shadow: 2px 5px 36px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  border-radius: 12px;
  width: 80%;
`;
const ProductName = styled.h3`
  font-size: 24px;
  color: #333;
  margin-top: 12px;
`;

const ProductPrice = styled.div`
  color: red;
`;

export default FeaturedProducts;
