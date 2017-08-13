import { RECEIVE_ALL_MEASUREMENTS, RECEIVE_MEASUREMENT } from '../actions/measurements_actions';
import { CLEAR_STORE } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultState = {
    allIds: [],
    byId: {}
};

const MeasurementsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case(RECEIVE_ALL_MEASUREMENTS):
      nextState = merge({}, defaultState);
      nextState.allIds = Object.keys(action.measurements);
      nextState.allIds.forEach(measurementId => {
        nextState.byId[measurementId] = action.journalEntries[measurementId];
      });
      return nextState;
    case(RECEIVE_MEASUREMENT):
      nextState = merge({}, state);
      nextState.byId[action.measurement.id] = action.measurement;
      if (!nextState.allIds.includes(action.measurement.id)) {
        nextState.allIds.push(action.measurement.id);
      }
      return nextState;
    case CLEAR_STORE:
      return defaultState;
    default:
      return state;
  }
};

export default MeasurementsReducer;
