import * as sessionAPIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './errors_actions';
import ASYNC from '../util/async_util';
import { AsyncStorage } from 'react-native';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const CLEAR_STORE = "CLEAR_STORE";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const clearStore = () => {
  return {
    type: CLEAR_STORE
  };
};

export const signUp = user => dispatch => {
  return(
    sessionAPIUtil.signUp(user)
      .then(response => {
        ASYNC.setItem("auth_token", response.data.auth_token);
        dispatch(receiveCurrentUser(response.data));
        dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(errors.response.data)))
  );
};

export const login = user => dispatch => {
  return(
    sessionAPIUtil.login(user)
      .then(response => {
        ASYNC.setItem("auth_token", response.data.auth_token);
        dispatch(receiveCurrentUser(response.data));
        dispatch(clearErrors());
      }, errors => dispatch(receiveErrors(["You have entered an invalid username or password"])))
  );
};

export const logout = user => dispatch => {
  return(
    ASYNC.removeItem("auth_token")
      .then(() => {
        dispatch(clearStore());
      }, errors => dispatch(receiveErrors(errors)))
  );
};

export const updateUser = user => dispatch => {
  return (
    sessionAPIUtil.updateUser(user)
    .then(response => {
      ASYNC.setItem("auth_token", response.data.auth_token);
      dispatch(receiveCurrentUser(response.data));
      dispatch(clearErrors());
    }, errors => dispatch(receiveErrors(errors.response.data)))
  );
};
