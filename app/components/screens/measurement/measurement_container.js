import { connect } from 'react-redux';
import Measurements from './measurement';
// import { fetchAllMeasurements, createMeasurement, deleteMeasurement, updateMeasurement } from '../../actions/measurements_actions';


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
    deleteMeasurement: id => dispatch(deleteMeasurement(id)),
    updateMeasurement: id => dispatch(updateMeasurement(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Measurements);
