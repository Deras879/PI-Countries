import axios from "axios";
const endpoint = "http://localhost:3001/";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const ORDER_ALF = "ORDER_ALF";
export const ORDER_POPULATION = "ORDER_POPULATION";

export const getCountries = () => {
  try {
    return async (dispatch) => {
      await axios.get(endpoint + "countries").then(({ data }) => {
        return dispatch({
          type: GET_ALL_COUNTRIES,
          payload: data,
        });
      });
    };
  } catch (error) {
    new Error(error.message);
  }
};

export const getCountry = (id) => {
  try {
    if (id.length === 3) {
      return async (dispatch) => {
        await axios.get(endpoint + "countries" + `/${id}`).then(({ data }) => {
          return dispatch({ type: SEARCH_COUNTRY, payload: [data] });
        });
      };
    } else {
      return async (dispatch) => {
        await axios
          .get(endpoint + "countries" + `/name/?name=${id}`)
          .then(({ data }) => {
            return dispatch({ type: SEARCH_COUNTRY, payload: data });
          });
      };
    }
  } catch (error) {
    new Error(error.message);
  }
};

export const getActivities = () => {
  try {
    return async (dispatch) => {
      await axios.get(endpoint + "activities").then(({ data }) => {
        return dispatch({
          type: GET_ACTIVITIES,
          payload: data,
        });
      });
    };
  } catch (error) {
    new Error(error.message);
  }
};

export const filterCountriesActivity = (difficulty) => {
  try {
    return { type: FILTER_ACTIVITY, payload: difficulty };
  } catch (error) {
    new Error(error.message);
  }
};

export const filterCountriesContinent = (continent) => {
  try {
    return { type: FILTER_CONTINENT, payload: continent };
  } catch (error) {
    new Error(error.message);
  }
};

export const orderCountriesAlf = (value) => {
  try {
    return { type: ORDER_ALF, payload: value };
  } catch (error) {
    new Error(error.message);
  }
};

export const orderCountriesPopulation = (value) => {
  try {
    return { type: ORDER_POPULATION, payload: value };
  } catch (error) {
    new Error(error.message);
  }
};
