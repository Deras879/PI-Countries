import axios from "axios";
const endpoint = "http://localhost:3001/countries";
export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";

export const getCountries = () => {
  try {
    return async (dispatch) => {
      await axios.get(endpoint).then(({ data }) => {
        return dispatch({
          type: GET_ALL_COUNTRIES,
          payload: data,
        });
      });
    };
  } catch (error) {
    window.alert(error.message);
  }
};

export const getCountry = (id) => {
  try {
    if (id.length === 3) {
      return async (dispatch) => {
        await axios.get(endpoint + `/${id}`).then(({ data }) => {
          return dispatch({ type: SEARCH_COUNTRY, payload: [data] });
        });
      };
    } else {
      return async (dispatch) => {
        await axios.get(endpoint + `/name/?name=${id}`).then(({ data }) => {
          return dispatch({ type: SEARCH_COUNTRY, payload: data });
        });
      };
    }
  } catch (error) {
    windows.alert(error.message);
  }
};
