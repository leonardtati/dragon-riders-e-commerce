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
        setIsSelected(!isSelected);
      })
      .catch((error) => {
        dispatch(receiveCountriesError());
      });
  }, []);

  React.useEffect(() => {
    //console.log("SECONDFECTH");
    dispatch(requestCountryProducts());

    fetch(`/products/${countryValue.replace(" ", "")}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveCountryProducts(data));
        setIsSelected(!isSelected);
      })
      .catch((error) => {
        dispatch(receiveCountryProductsError());
      });
  }, []);


  //make a second Useffect for the other fetch
  // selected={isSelected}
  //MOVE THE LOADING DIV IN THE HOME COMPONENT WITH THE APPROPRIATE SELECTOR

  if (countriesStatus === "loading") {
    return <div>LOADING</div>;
  }
  //<button onClick={(ev) =>{handleCountryValue(ev.target.value)}}></button>

  return (
    <Wrapper>
      <div>
      <select
        defaultValue="X"
        onChange={(ev) => setCountryValue(ev.target.value)}
      >
        <option selected>Please Choose A Country</option>
        {countryArray.map((country) => {
          return <option value={country}>{country}</option>;
        })}
      </select>
      <Link to={`products/${countryValue}`}>
        <button>GO TO LOCATION</button>
      </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 200px
`;

export default DropDown;
