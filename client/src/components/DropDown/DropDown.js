import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";
import {
  requestCountries,
  receiveCountries,
  receiveCountriesError,
} from "../../actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const DropDown = () => {
  const dispatch = useDispatch();
  const countriesStatus = useSelector((state) => state.country.status);
  const countryList = useSelector((state) => state.country.countries);
  const [countryValue, setCountryValue] = React.useState("");
  const [isSelected, setIsSelected] = React.useState(false);

  const countryArray = countryList.countries;

  React.useEffect(() => {
    dispatch(requestCountries());
    fetch("/countries")
      .then((res) => res.json())
      .then((data) => {
        dispatch(receiveCountries(data));
        setIsSelected(!isSelected);
      })
      .catch((error) => {
        dispatch(receiveCountriesError(error));
      });
  }, []);
  return (
    <Wrapper>
      <SelectContainer>
        {countriesStatus === "idle" ? (
          <>
            <StyledSelect
              defaultValue=""
              onChange={(ev) => setCountryValue(ev.target.value)}
            >
              <option selected>Please Choose A Country</option>
              {countryArray.map((country) => {
                return <option value={country}>{country}</option>;
              })}
            </StyledSelect>
            {countryList.countries.includes(countryValue) ? (
              <Link to={`products/${countryValue}`}>
                <StyledButton>CONFIRM</StyledButton>
              </Link>
            ) : (
              <Link to={"/"}>
                <StyledButton>CONFIRM</StyledButton>
              </Link>
            )}
          </>
        ) : (
          <CircularProgress />
        )}
      </SelectContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSelect = styled.select`
  width: 300px;
  height: 40px;
  font-size: 18px;
  option {
    font-size: 18px;
  }
`;
const SelectContainer = styled.div`
  width: 400px;
  background-color: white;
  height: 96px;
  margin-top: 105px;
  margin-right: 560px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const StyledButton = styled.button`
  background: hsl(258deg, 100%, 50%);
  margin-left: 5px;
  font-size: 15px;
  border-radius: 5px;
  color: white;
  width: 100px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
`;

export default DropDown;
