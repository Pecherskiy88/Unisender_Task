import { combineReducers } from 'redux';

import { ActionType } from '../constants/usersConstants';

const {
  GET_USERS_INIT,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CLEAR_STORE,
  SET_PAGE,
  GET_CURRENT_USER_INIT,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_FAILURE,
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
    default:
      return state;
  }
};

const currentUserInitialState = {
  data: {
    login: '',
    id: null,
    avatar_url: '',
    html_url: '',
    followers_url: '',
    subscriptions_url: '',
    organizations_url: '',
    repos_url: '',
    name: '',
    company: null,
    blog: '',
    location: '',
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
    updated_at: '',
  },
  loading: false,
  loaded: false,
  error: false,
  errorData: {},
};

const currentUserReducer = (
  state = currentUserInitialState,
  { type, payload },
) => {
  switch (type) {
    case GET_CURRENT_USER_INIT:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        errorData: {},
      };
    case GET_CURRENT_USER_SUCCESS: {
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
    case GET_CURRENT_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        errorData: payload,
      };
    }
    case CLEAR_STORE:
      return { ...currentUserInitialState };
    default:
      return state;
  }
};

export default combineReducers({
  usersData: usersDataReducer,
  currentUser: currentUserReducer,
});
