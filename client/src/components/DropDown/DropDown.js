import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import MainPage from "../MainPage/MainPage";

import {
  requestCountries,
  receiveCountries,
  receiveCountriesError,
  requestCountryProducts,
  receiveCountryProducts,
  receiveCountryProductsError,
} from "../../actions";

const DropDown = () => {
  //const { countryId } = useParams();
  const dispatch = useDispatch();
  const countriesStatus = useSelector((state) => state.country.status);
  const getCountries = useSelector((state) => state.country.countries);
  const getCountryProducts = useSelector((state) => state.country.products);
  const [countryValue, setCountryValue] = React.useState("");
  const [isSelected, setIsSelected] = React.useState(false);

  const countryArray = getCountries.countries;

  React.useEffect(() => {
    dispatch(requestCountries());
    fetch("/countries")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveCountries(data));
      })
      .catch((error) => {
        dispatch(receiveCountriesError());
      });
    dispatch(requestCountryProducts());
    fetch(`/products/${countryValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("INSECONDFETCH", data);
        dispatch(receiveCountryProducts(data));
      })
      .catch((error) => {
        dispatch(receiveCountryProductsError());
      });
  }, [countryValue]);

  // React.useEffect(() => {
  //console.log("SECONDFECTH");

  //}, [countryValue]);

  console.log("EVENT", countryValue);

  console.log("GETCOUNTRY", getCountries);


  //make a second Useffect for the other fetch

  //MOVE THE LOADING DIV IN THE HOME COMPONENT WITH THE APPROPRIATE SELECTOR

  if (countriesStatus === "loading") {
    return <div>LOADING</div>;
  }
  //<button onClick={(ev) =>{handleCountryValue(ev.target.value)}}></button>

  return (
    <Wrapper>
      <select onChange={(ev) => setCountryValue(ev.target.value)}>
        {countryArray.map((country) => {
          return <option value={country}>{country}</option>;
        })}
      </select>
      <MainPage />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DropDown;
