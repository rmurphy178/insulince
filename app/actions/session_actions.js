import * as sessionAPIUtil from '../util/session_api_util';

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

export const login = user => dispatch => {
  return (
    sessionAPIUtil.login(user).then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
    }, errors => console.log(errors))
  );
};

export const logout = user => dispatch => {
  return (
    sessionAPIUtil.logout().then(() => {
      dispatch(receiveCurrentUser(null));
      dispatch(clearStore());
    }, errors => console.log(errors))
  );
};
