import axios from 'axios';
import ASYNC from '../util/async_util';

export const signUp = user => {
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
    auth: {
      user_credential: user.user_credential,
      password: user.password
    }
  });
};

export const updateUser = user => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = `https://insulince-api.herokuapp.com/api/users/${user.id}`;
    return axios({
      method: 'PATCH',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      data: { user }
    });
  });
};
