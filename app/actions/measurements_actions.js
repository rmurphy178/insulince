import * as measurementsAPIUtil from '../util/measurements_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_ALL_MEASUREMENTS = "RECEIVE_ALL_MEASUREMENTS";
export const RECEIVE_MEASUREMENT = "RECEIVE_MEASUREMENT";

export const receiveAllMeasurements = measurements => {
  return {
    type: RECEIVE_ALL_MEASUREMENTS,
    measurements
  };
};

export const receiveMeasurement = measurement => {
  return {
    type: RECEIVE_MEASUREMENT,
    measurement
  };
};

export const fetchAllMeasurements = () => dispatch => {
  return(
    measurementsAPIUtil.fetchAllMeasurements()
      .then(measurements => {
        dispatch(receiveAllMeasurements(measurements));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors))
  );
};

export const createMeasurement = measurement => dispatch => {
  return(
    measurementsAPIUtil.createMeasurement(measurement)
      .then(newMeasurement => {
        dispatch(receiveMeasurement(newMeasurement));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors))
  );
};

export const updateMeasurement = measurement => dispatch => {
  return(
    measurementsAPIUtil.updateMeasurement(measurement)
      .then(updatedMeasurement => {
        dispatch(receiveMeasurement(updatedMeasurement));
        dispatch(clearErrors());
      }, errors => receiveErrors(errors))
  );
};

export const deleteMeasurement = measurementId => dispatch => {
  return(
    measurementsAPIUtil.deleteMeasurement(measurementId)
      .then(() => {
        dispatch(clearErrors());
      }, errors => receiveErrors(errors))
  );
};
