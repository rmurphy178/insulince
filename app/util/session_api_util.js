import axios from 'axios';

export const signUp = user => {
  const url = "https://insulince-api.herokuapp.com/api/users";
  return axios.post(url, { user })
    .then(response => console.log(response));
};

export const login = user => {
  const url = "https://insulince-api.herokuapp.com/api/user_token";
  return axios.post(url, { auth: user })
    .then(response => console.log(response));
};

export const logout = user => {
  const url = "https://insulince-api.herokuapp.com/api/user_token";
  return axios.delete(url, { user })
    .then(response => console.log(response));
};
