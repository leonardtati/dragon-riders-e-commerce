import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function FeaturedProducts() {
const [features, setFeature] = useState('');
const [load, setLoad] = useState("loading")
const countryId = useParams()

    useEffect(() => {
        fetch(`/countries/${countryId.country.replace(" ", "")}/featuredproducts`)
        .then(res => res.json())
        .then(data => {
            setFeature(data.features);
            setLoad("idle")
        })
    }, [])
    return (
        <FeatureWrapper>
            {load === "loading" ? <div>LOAD</div> :
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
        </FeatureWrapper>
    )
}

const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 32px;
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
    width: 80%;
`
const ProductName = styled.h3`
    font-size: 24px;
    color: #333;
    margin-top: 12px;
`

const ProductPrice = styled.div`
    color: red;
`


export default FeaturedProducts
