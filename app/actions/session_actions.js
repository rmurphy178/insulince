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
