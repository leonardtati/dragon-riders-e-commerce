export const requestCountries = () => ({
  type: "REQUEST_COUNTRIES",
});

export const receiveCountries = (countries) => ({
  type: "RECEIVE_COUNTRIES",
  countries,
});

export const receiveCountriesError = () => ({
  type: "RECEIVE_COUNTRIES_ERROR",
});
