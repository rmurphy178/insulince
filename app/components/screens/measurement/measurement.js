import { connect } from 'react-redux';
import measurement from './measurement';
import { fetchAllMeasurements, createMeasurement, deleteMeasurement, updateMeasurement } from '../../actions/measurements_actions';


const mapStateToProps = ({ session }) => {
  return {
    currentUser = state.currentUser,
    measurement = state.measurement,
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMeasurements:
  };
};
