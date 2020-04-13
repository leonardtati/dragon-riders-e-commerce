import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  requestCountries,
  receiveCountries,
  receiveCountriesError,
} from "../../actions";

const DropDown = () => {
  //const { countryId } = useParams();
  const dispatch = useDispatch();
  const countriesStatus = useSelector((state) => state.country.status);
  const getCountries = useSelector((state) => state.country.countries);
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

  return (
    <Wrapper>
      <div>
        {countriesStatus === "idle" ? (
          <>
            <select
              defaultValue=""
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
          </>
        ) : (
          <div>LOADING</div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 200px;
`;

export default DropDown;
