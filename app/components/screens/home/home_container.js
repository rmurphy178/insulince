import { connect } from 'react-redux';
import { fetchAllJournalEntries } from '../../../actions/journal_entries_actions';
import { fetchAllMeasurements } from '../../../actions/measurements_actions';
import Home from './home';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
