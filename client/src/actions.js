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

export const requestCountryProducts = () => ({
  type: "REQUEST_COUNTRY_PRODUCTS",
});

export const receiveCountryProducts = (products) => ({
  type: "RECEIVE_COUNTRY_PRODUCTS",
  products,
});

export const receiveCountryProductsError = () => ({
  type: "RECEIVE_COUNTRY_PRODUCTS_ERROR",
});
