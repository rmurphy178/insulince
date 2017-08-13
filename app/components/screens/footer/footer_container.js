import { connect } from 'react-redux';
import { clearErrors } from '../../../actions/errors_actions';
import { fetchAllJournalEntries } from '../../../actions/journal_entries_actions';
import { fetchAllMeasurements } from '../../../actions/measurements_actions';
import Footer from './footer';

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    journalEntries: state.journalEntries,
    measurements: state.measurements,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllJournalEntries: () => dispatch(fetchAllJournalEntries()),
    fetchAllMeasurements: () => dispatch(fetchAllMeasurements()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
