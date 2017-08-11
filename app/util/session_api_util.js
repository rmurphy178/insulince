import axios from 'axios';
import ASYNC from '../util/async_util';

export const signUp = user => {
  console.log(user);
  const url = "https://insulince-api.herokuapp.com/api/users";
  return axios.post(url, { user })
    .then(response => axios.post("https://insulince-api.herokuapp.com/api/user_token", {
      auth: {
        user_credential: user.username,
        password: user.password
      }
    }));
};

export const login = user => {
  const url = "https://insulince-api.herokuapp.com/api/user_token";
  return axios.post(url, {
    auth: { user }
  });
};
