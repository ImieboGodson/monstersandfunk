import {
  SEARCH_FIELD_CHANGE,
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from "./constants";

const initialSearchState = {
  searchText: "",
};

export const searchReducer = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};

const initialUsersState = {
  users: [],
  isPending: false,
  error: "",
};

export const getUsersReducer = (state = initialUsersState, action = {}) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return { ...state, isPending: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, isPending: false, users: action.payload };
    case FETCH_USERS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
