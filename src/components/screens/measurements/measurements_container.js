import { connect } from 'react-redux';
import Measurements from './measurements';
import {
  fetchAllMeasurements,
  createMeasurement,
  deleteMeasurement,
  updateMeasurement
} from '../../../actions/measurements_actions';


const mapStateToProps = state => {
  return {
    errors: state.errors,
    currentUser: state.currentUser,
    measurements: state.measurements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllMeasurements: () => dispatch(fetchAllMeasurements()),
    createMeasurement: measurement => dispatch(createMeasurement(measurement)),
    updateMeasurement: measurement => dispatch(updateMeasurement(measurement)),
    deleteMeasurement: measurementId => dispatch(deleteMeasurement(measurementId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Measurements);
