import axios from 'axios';

export const fetchAllMeasurements = () => {
  const url = "https://insulince-api.herokuapp.com/api/measurements";
  return axios({
    method: 'GET',
    url: url,
    headers: {
      // "Authorization": "JWT" + AsyncStorage
    }
  }).then(response => console.log(response));



};

export const createMeasurement = measurement => {
  const url = "https://insulince-api.herokuapp.com/api/measurements";
  return axios.post(url, { measurement })
    .then(response => console.log(response));
};

export const updateMeasurement = measurement => {
  const url = `https://insulince-api.herokuapp.com/api/measurements/${measurement.id}`;
  return axios.patch(url, { measurement })
    .then(response => console.log(response));
};

export const deleteMeasurement = measurementId => {
  const url = `https://insulince-api.herokuapp.com/api/measurements/${measurementId}`;
  return axios.delete(url)
    .then(response => console.log(response));
};
