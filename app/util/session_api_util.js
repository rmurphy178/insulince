import axios from 'axios';

export const login = user => {
  const url = "/api/users";
  return axios.get(url).then(response => console.log(response));
};

export const logout = user => {
  const url = "/api/users";
  return axios.delete(url).then(response => console.log(response));
};
