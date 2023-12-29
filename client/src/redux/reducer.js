import {
  GET_ALL_COUNTRIES,
  SEARCH_COUNTRY,
  GET_ACTIVITIES,
  FILTER_ACTIVITY,
  FILTER_CONTINENT,
  ORDER_ALF,
  ORDER_POPULATION,
} from "./actions";

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

    case FILTER_ACTIVITY:
      if (payload === "Todos") {
        return { ...state, searchCountries: state.allCountries };
      }

      return {
        ...state,
        searchCountries: state.allCountries.filter(
          (country) =>
            country.Activities &&
            country.Activities.some((activity) => {
              return activity.difficulty === Number(payload);
            })
        ),
      };

    case FILTER_CONTINENT:
      if (payload === "Todos") {
        return { ...state, searchCountries: state.allCountries };
      }
      return {
        ...state,
        searchCountries: state.allCountries.filter((country) => {
          return country.continent === payload;
        }),
      };
    case ORDER_ALF:
      if (payload === "none") {
        return { ...state, searchCountries: state.allCountries };
      }

      if (payload === "ASC") {
        return {
          ...state,
          searchCountries: [...state.searchCountries].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      }
      return {
        ...state,
        searchCountries: [...state.searchCountries].sort((a, b) =>
          b.name.localeCompare(a.name)
        ),
      };

    case ORDER_POPULATION:
      if (payload === "none") {
        return { ...state, searchCountries: state.allCountries };
      }
      if (payload === "ASC") {
        return {
          ...state,
          searchCountries: [...state.searchCountries].sort(
            (a, b) => a.population - b.population
          ),
        };
      }
      return {
        ...state,
        searchCountries: [...state.searchCountries].sort(
          (a, b) => b.population - a.population
        ),
      };
    default:
      return { ...state };
      break;
  }
};

export default rootReducer;
