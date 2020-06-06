import { combineReducers } from 'redux';

import { ActionType } from '../constants/usersConstants';

const {
  GET_USERS_INIT,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CLEAR_STORE,
  SET_PAGE,
} = ActionType;

const usersDataInitialState = {
  data: [],
  currentPage: 1,
  loading: false,
  loaded: false,
  error: false,
  errorData: {},
};

const usersDataReducer = (state = usersDataInitialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_INIT:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        errorData: {},
      };
    case GET_USERS_SUCCESS: {
      const { data } = payload;
      return {
        ...state,
        data,
        loading: false,
        loaded: true,
        error: false,
        errorData: {},
      };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        errorData: payload,
      };
    }
    case SET_PAGE: {
      return { ...state, currentPage: payload };
    }
    case CLEAR_STORE:
      return { ...usersDataInitialState };
    default:
      return state;
  }
};

export default combineReducers({
  data: usersDataReducer,
});
