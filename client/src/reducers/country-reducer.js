const initialState = {
  countries: [],
  products: [],
  status: "loading",
};

export default function countryReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_COUNTRIES": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_COUNTRIES": {
      return {
        ...state,
        countries: action.countries,
        status: "idle",
      };
    }
    case "RECEIVE_COUNTRIES_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    case "REQUEST_COUNTRY_PRODUCTS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_COUNTRY_PRODUCTS": {
      return {
        ...state,
        products: action.products,
        status: "idle",
      };
    }

    case "RECEIVE_COUNTRY_PRODUCTS_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }

    default: {
      return state;
    }
  }
}
