import { connect } from 'react-redux';
import Measurements from './measurement';
import { createMeasurement, deleteMeasurement, updateMeasurement } from '../../../actions/measurements_actions';


const mapStateToProps = ({  currentUser, errors, measurements }) => {
  return {
    errors: errors,
    currentUser: currentUser,
    measurements: measurements
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMeasurement: measurement => dispatch(createMeasurement(measurement)),
    updateMeasurement: measurement => dispatch(updateMeasurement(measurement)),
    deleteMeasurement: measurementId => dispatch(deleteMeasurement(measurementId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Measurements);
