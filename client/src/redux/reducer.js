import { GET_ALL_COUNTRIES, SEARCH_COUNTRY, GET_ACTIVITIES } from "./actions";

const initialState = {
  allCountries: [],
  searchCountries: [],
  Activities: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COUNTRIES:
      return { ...state, allCountries: payload, searchCountries: payload };

    case SEARCH_COUNTRY:
      return { ...state, searchCountries: payload };
    case GET_ACTIVITIES:
      return { ...state, Activities: payload };
    default:
      return { ...state };
      break;
  }
};

export default rootReducer;
