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
