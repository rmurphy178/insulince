import axios from 'axios';

export const fetchAllMeasurements = () => {
  const url = "/api/journal_entries";
  return axios.get(url);
};

export const createMeasurement = measurement => {
  const url = "/api/measurements";
  return axios.post(url, { measurement })
    .then(response => console.log(response));
};

export const updateMeasurement = measurement => {
  const url = `/api/measurements/${measurement.id}`;
  return axios.patch(url, { measurement })
    .then(response => console.log(response));
};

export const deleteMeasurement = measurementId => {
  const url = `/api/measurements/${measurementId}`;
  return axios.delete(url)
    .then(response => console.log(response));
};
