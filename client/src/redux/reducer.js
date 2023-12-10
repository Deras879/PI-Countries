import { GET_ALL_COUNTRIES, SEARCH_COUNTRY } from "./actions";

const initialState = {
  allCountries: [],
  searchCountries: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return { ...state, allCountries: payload, searchCountries: payload };

    case SEARCH_COUNTRY:
      return { ...state, searchCountries: payload };
    default:
      return { ...state };
      break;
  }
};

export default rootReducer;
