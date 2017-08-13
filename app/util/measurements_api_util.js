import axios from 'axios';
import ASYNC from './async_util';

export const fetchAllMeasurements = () => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = "https://insulince-api.herokuapp.com/api/measurements";
    return axios({
      method: 'GET',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    });
  });
};

export const createMeasurement = measurement => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = "https://insulince-api.herokuapp.com/api/measurements";
    return axios({
      method: 'POST',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      data: { measurement }
    });
  });
};

export const updateMeasurement = measurement => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = `https://insulince-api.herokuapp.com/api/measurements/${measurement.id}`;
    return axios({
      method: 'POST',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      data: { measurement }
    });
  });
};

export const deleteMeasurement = measurementId => {
  return ASYNC.getItem("auth_token").then(token => {
    const url = `https://insulince-api.herokuapp.com/api/measurements/${measurementId}`;
    return axios({
      method: 'DELETE',
      url: url,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    });
  });
};
