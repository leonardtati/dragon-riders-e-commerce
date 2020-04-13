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
            console.log(data.features);
            setFeature(data.features);
            setLoad("idle")
        })
    }, [])
    return (
        <div>
            {load === "loading" ? <div>LOAD</div> :
            features.map(feature => {
               return (
                <ProductWrapper>
                <ProductImage src={feature.imageSrc}></ProductImage>
                <ProductName>{feature.name}</ProductName>
                <ProductPrice>{feature.price}</ProductPrice>
               <button>Buy Now</button>
                </ProductWrapper>
                )
            })}
            <div></div>
        </div>
    )
}

const ProductWrapper = styled.div`
    display: flex;
    padding: 36px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 
`

const ProductImage = styled.img`
    width: 40%;
`
const ProductName = styled.h3`
    font-size: 24px;
    color: black;
    margin-top: 12px;
`

const ProductPrice = styled.div`
    color: red;
`


export default FeaturedProducts
