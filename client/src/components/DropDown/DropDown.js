import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  requestCountries,
  receiveCountries,
  receiveCountriesError,
} from "../../actions";

const DropDown = () => {
  const dispatch = useDispatch();
  const countriesStatus = useSelector((state) => state.country.status);
  const getCountries = useSelector((state) => state.country.countries);
  const [countryValue, setCountryValue] = React.useState("");

  const countryArray = getCountries.countries;

  console.log("Countries", countryArray);

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
  }, []);

  //make a second Useffect for the other fetch

  //MOVE THE LOADING DIV IN THE HOME COMPONENT WITH THE APPROPRIATE SELECTOR

  if (countriesStatus === "loading") {
    return <div>LOADING</div>;
  }

  return (
    <Wrapper>
      <select onChange={(ev) => setCountryValue(ev.target.value)}>
        {countryArray.map((country) => {
          return <option value={country}>{country}</option>;
        })}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default DropDown;
