import { getUsersApi } from '../api';
import { ActionType } from '../constants/usersConstants';

const {
  GET_USERS_INIT,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CLEAR_STORE,
} = ActionType;

export const getPosts = () => (dispatch) => {
  dispatch({
    type: GET_USERS_INIT,
  });
  getUsersApi()
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
