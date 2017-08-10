import axios from 'axios';
import ASYNC from '../util/async_util';

export const signUp = user => {
  const url = "https://insulince-api.herokuapp.com/api/users";
  return axios.post(url, { user })
    .then(response => console.log(response));
};

export const login = user => {
  console.log(user);
  const url = "https://insulince-api.herokuapp.com/api/user_token";
  return axios.post(url, { auth: user })
    .then(ASYNC.setItem("auth_token", user.auth_token));
};
