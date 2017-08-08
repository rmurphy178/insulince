import axios from 'axios';

const url = "/api/users";

export const signUp = user => {
  return axios.post(url, { user });
};

export const login = user => {
  return axios.get(url).then(response => console.log(response));
};

export const logout = user => {
  return axios.delete(url).then(response => console.log(response));
};
