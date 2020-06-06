import { getUsersApi } from '../api';
import { ActionType } from '../constants/usersConstants';

const {
  GET_USERS_INIT,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CLEAR_STORE,
  SET_PAGE,
} = ActionType;

export const getPosts = (requestParams) => (dispatch) => {
  dispatch({
    type: GET_USERS_INIT,
  });
  getUsersApi(requestParams)
    .then((response) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: { ...response },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: { ...error },
      });
    });
};

export const clearStore = () => ({
  type: CLEAR_STORE,
});

export const setPage = (value) => ({
  type: SET_PAGE,
  payload: value,
});
