import {
  SEARCH_FIELD_CHANGE,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from "./constants";

export const setSearchText = (text) => ({
  type: SEARCH_FIELD_CHANGE,
  payload: text,
});

export const getUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_USERS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: FETCH_USERS_FAILED, payload: error }));
};
